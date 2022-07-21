import userApi from 'configs/api/userApi';
import { IUserParams } from 'models/user';
import Header from 'modules/common/Header/Header';
import SideBar from 'modules/common/SideBar/SideBar';
import Filters from 'modules/users/components/Filters/Filters';
import Content from 'modules/users/components/Content/Content';
import React, { useCallback, useEffect, useState } from 'react';
import { Button } from 'reactstrap';
import './styles.scss';
import { Pagination, Stack } from '@mui/material';
import Loading from 'modules/common/Loading/Loading';
import { Link } from 'react-router-dom';
import { ROUTES } from 'configs/Routes';
import { formatArr } from 'utils';
import { Country } from 'models/country';
interface Props {}

const UserList = (props: Props) => {
  const [filters, setFilters] = useState<IUserParams>({
    page: 1,
    count: 25,
    search: '',
    memberships: [],
    types: [],
    status: [],
    country: '',
    state: '',
    address: '',
    phone: '',
    date_type: 'R',
    date_range: [],
    sort: 'last_login',
    order_by: 'DESC',
    tz: 7,
  });
  const [userList, setUserList] = useState([]);
  const [recordsTotal, setRecordsTotal] = useState();
  const [loading, setLoading] = useState(true);
  const [roleList, setRoleList] = useState<any[]>([]);
  const [countryList, setCountryList] = useState<any[]>([]);

  const getUser = useCallback(async (values: IUserParams) => {
    try {
      const data = await userApi.getAll(values);
      setUserList(data.data.data);
      setRecordsTotal(data.data.recordsTotal);
    } catch (error) {
      console.log(error);
    }
  }, []);
  const getRole = useCallback(async () => {
    try {
      const data = await userApi.getRole();
      setRoleList(formatArr(data.data.data.administrator, { id: 'value', name: 'label' }));
    } catch (error) {
      console.log(error);
    }
  }, []);
  const getCountry = useCallback(async () => {
    try {
      const data = await userApi.getCountry();
      setCountryList(formatArr(data.data.data, { code: 'value', country: 'label' }));
    } catch (error) {
      console.log(error);
    }
  }, []);
  

  useEffect(() => {
    setLoading(true);
    getUser(filters);
    setLoading(false);
  }, [filters]);

  useEffect(() => {
    getRole();
  }, []);

  useEffect(() => {
    getCountry();
  }, []);

  const handlePageChange = (e: any, page: number) => {
    setFilters({
      ...filters,
      page: page,
    });
  };

  const handleFiltersChange = (values: IUserParams) => {
    setFilters({
      ...filters,
      ...values,
      page: 1,
    });
  };

  

  return (
    <div className="content">
      {loading ? (
        <Loading />
      ) : (
        <div>
          <Header />
          <SideBar />
          <div className="user-content">
            <h2>Search for users</h2>
            <Filters roleList={roleList} countryList={countryList} onChange={handleFiltersChange} />
            <Button className="add-user">
              <Link to={ROUTES.createUser}>Add User</Link>
            </Button>
            <Content userList={userList} filters={filters} />
            <Stack>
              <Pagination
                size="large"
                className="pagination"
                count={recordsTotal && filters.count && Math.ceil(recordsTotal / filters.count)}
                page={filters.page}
                variant="outlined"
                shape="rounded"
                color="secondary"
                onChange={handlePageChange}
              ></Pagination>
            </Stack>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserList;
