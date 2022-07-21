import userApi from 'configs/api/userApi';
import Header from 'modules/common/Header/Header';
import SideBar from 'modules/common/SideBar/SideBar';
import React, { useCallback } from 'react';

interface Props {}

const UserDetail = (props: Props) => {
  const getProfile = useCallback(async (id: string) => {
    const data = await userApi.showDetail(id);
    console.log(data);
  }, []);
  return (
    <div>
      <Header />
      <SideBar />
    </div>
  );
};

export default UserDetail;
