import { IUser } from 'models/user';
import moment from 'moment';
import React from 'react';
import { Button, Input } from 'reactstrap';
import { IoMdTrash } from 'react-icons/io';
import './styles.scss';
import { Link, useHistory } from 'react-router-dom';
import { ROUTES } from 'configs/Routes';

interface Props {
  user: IUser;
}

const User = (props: Props) => {
  const user = props.user;

  const history = useHistory();

  const handleClick = () => {
    history.push(`/user-detail/${user.profile_id}`);
  };

  return (
    <>
      <td>
        <div>
          <Input type="checkbox" />
        </div>
      </td>
      <td onClick={handleClick}>{user.vendor}</td>
      <td>
        <Link to="">
          {user.fistName} {user.lastName}
        </Link>
      </td>
      <td>{user.access_level}</td>
      <td style={{ textAlign: 'center' }}>{user.product}</td>
      <td style={{ textAlign: 'center' }}>{user.order.order_as_buyer}</td>
      <td style={{ textAlign: 'center' }}>{user.wishlist}</td>
      <td>{moment.unix(user.created).format('LLL')}</td>
      <td>{moment.unix(user.last_login).format('LLL')}</td>
      <td>
        <div>
          <Button>
            <IoMdTrash />
          </Button>
        </div>
      </td>
    </>
  );
};

export default User;
