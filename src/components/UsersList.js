import Button from './Button';
import Skeleton from './Skeleton';
import UsersListItem from './UsersListItem';
import { useFetchUsersQuery, useAddUserMutation } from '../store';
import { v4 } from 'uuid';

function UsersList() {
  const { data, error, isFetching } = useFetchUsersQuery();
  const [addUser, results] = useAddUserMutation();

  let content;

  if (isFetching) {
    content = <Skeleton times={6} className="h-10 w-full" />;
  } else if (error) {
    content = <div>Error fetching users...</div>;
  } else {
    content = data.map((user) => {
      return <UsersListItem key={user.id} user={user} />;
    });
  }

  const handleUserAdd = () => {
    addUser(v4());
  };

  return (
    <div>
      <div className="flex flex-row justify-between items-center m-3">
        <h1 className="m-2 text-xl">Users</h1>
        <Button loading={results.isLoading} onClick={handleUserAdd}>
          + Add User
        </Button>
      </div>
      <div>{content}</div>
    </div>
  );
}

export default UsersList;
