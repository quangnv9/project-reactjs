import { FabPropsVariantOverrides, Pagination, Stack } from '@mui/material';
import { IUserParams } from 'models/user';
import { on } from 'process';
import * as React from 'react';

interface Props {
  filters: IUserParams;
  onChange: any;
}

const PaginationCom = (props: Props) => {
  const { filters, onChange } = props;

  console.log(filters, onChange);

  const handlePageChange = (e: any, page: number) => {
    if (onchange) onChange(page);
  };

  return (
    <Stack>
      <Pagination
        count={5}
        page={filters.page}
        variant="outlined"
        shape="rounded"
        color="secondary"
        onChange={handlePageChange}
      ></Pagination>
    </Stack>
  );
};

export default PaginationCom;
