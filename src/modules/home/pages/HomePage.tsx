import SideBar from 'modules/common/SideBar/SideBar';
import React from 'react';
import Header from '../../common/Header/Header';

interface Props {}

const HomePage = (props: Props) => {
  return (
    <>
      <Header />
      <SideBar />
    </>
  );
};

export default HomePage;
