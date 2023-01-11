import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { faker } from '@faker-js/faker';

const usersApi = createApi({
  reducerPath: 'users',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3005',
    fetchFn: async (...args) => {
      return fetch(...args);
    }
  }),
  endpoints(builder) {
    return {
      fetchUsers: builder.query({
        providesTags: ['Users'],
        query: () => {
          return {
            url: '/users',
            method: 'GET'
          };
        }
      }),
      addUser: builder.mutation({
        invalidatesTags: ['Users'],
        query: () => {
          return {
            url: '/users',
            method: 'POST',
            body: {
              name: faker.name.fullName()
            }
          };
        }
      }),
      removeUser: builder.mutation({
        invalidatesTags: ['Users'],
        query: (user) => {
          return {
            url: `/users/${user.id}`,
            method: 'DELETE'
          };
        }
      })
    };
  }
});

export const { useFetchUsersQuery, useAddUserMutation, useRemoveUserMutation } = usersApi;
export { usersApi };
