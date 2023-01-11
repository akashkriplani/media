import { GoTrashcan } from 'react-icons/go';
import Button from './Button';
import ExpandablePanel from './ExpandablePanel';
import { Fragment } from 'react';
import AlbumsList from './AlbumsList';
import { useRemoveUserMutation } from '../store';

function UsersListItem({ user }) {
  const [removeUser, results] = useRemoveUserMutation();

  const handleClick = () => {
    removeUser(user);
  };

  const header = (
    <Fragment>
      <Button className="mr-3" loading={results.isLoading} onClick={handleClick}>
        <GoTrashcan />
      </Button>
      {user.name}
    </Fragment>
  );

  return (
    <ExpandablePanel header={header}>
      <AlbumsList user={user} />
    </ExpandablePanel>
  );
}

export default UsersListItem;
