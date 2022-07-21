import userApi from 'configs/api/userApi';
import { CreateUserParams } from 'models/user';
import CreateUserForm from 'modules/users/components/CreateUserForm/CreateUserForm';
import React, { useCallback, useEffect, useState } from 'react';
import { formatArr } from 'utils';
import './styles.scss';

interface Props {}

const CreateUser = (props: Props) => {
  const [roleList, setRoleList] = useState<any[]>([]);

  const getRoles = useCallback(async () => {
    try {
      const data = await userApi.getRole();
      const arr: any[] = data.data.data.administrator;
      setRoleList(formatArr(arr, { id: 'value', name: 'label' }));
    } catch (error) {
      console.log(error);
    }
  }, []);

  const onCreateUser = useCallback(async (values: CreateUserParams) => {
    try {
      const data = await userApi.createUser(values);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getRoles();
  }, []);

  return (
    <div>
      <CreateUserForm onCreateUser={onCreateUser} roleList={roleList} />
    </div>
  );
};

export default CreateUser;
