import Button from './Button';
import Skeleton from './Skeleton';
import UsersListItem from './UsersListItem';
import { useFetchUsersQuery, useAddUserMutation } from '../store';

function UsersList() {
  const { data, error, isFetching } = useFetchUsersQuery();
  const [addUser, results] = useAddUserMutation();

  let content;

  if (isFetching) {
    content = <Skeleton times={6} className="h-10 w-full" />;
  } else if (error) {
    content = <div className="text-center">Error fetching users.</div>;
  } else if (data.length === 0) {
    content = <div className="text-center">No users found.</div>;
  } else {
    content = data.map((user) => {
      return <UsersListItem key={user.id} user={user} />;
    });
  }

  const handleUserAdd = () => {
    addUser();
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
