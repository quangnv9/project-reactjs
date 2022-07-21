import { IUser, IUserParams } from 'models/user';
import React from 'react';
import { Input, Table } from 'reactstrap';

import User from '../User/User';
import './styles.scss';

interface Props {
  userList: IUser[];
  filters: IUserParams;
}

const Content = (props: Props) => {
  const { userList, filters } = props;

  return (
    <div className="content-table">
      <Table>
        <thead>
          <tr>
            <th>
              <Input type="checkbox" />
            </th>
            <th>Login/Email</th>
            <th>Name</th>
            <th>Access level </th>
            <th>Products </th>
            <th>Orders </th>
            <th>Wishlist </th>
            <th>Created </th>
            <th>Last Login </th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {userList.map((user, index) => (
            <tr key={index}>
              <User user={user} />
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Content;
