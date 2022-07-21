import React, { useCallback, useEffect, useState } from 'react';
import { FastField, Field, Form, Formik } from 'formik';
import { IRole } from 'models/role';
import InputField from 'modules/common/FormField/InputField/InputField';
import SelectMultiField from 'modules/common/FormField/SelectMultiField/SelectMultiField';
import SelectField from 'modules/common/FormField/SelectField/SelectField';
import { listStatus, memberships } from 'utils/constants';
import './styles.scss';
import { Button } from 'reactstrap';
import userApi from 'configs/api/userApi';
import { Country } from 'models/country';

interface Props {
  roleList: IRole[];
  countryList: any[];
  onChange: any;
}

const Filters = (props: Props) => {
  const { roleList, countryList, onChange } = props;

  const getState = useCallback(async (codeCountry: Country) => {
    try {
      const data = await userApi.getState(codeCountry);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <Formik
      initialValues={{
        search: '',
        memberships: [],
        types: [],
        status: [],
        country: '',
        state: '',
        address: '',
        phone: '',
      }}
      onSubmit={(values) => {
        console.log(values);
        if (onChange) onChange(values);
      }}
    >
      {({ values }) => {
        useEffect(() => {
          getState({ code: values.country });
        }, [values.country]);

        return (
          <Form>
            <div className="filters">
              <ul>
                <li>
                  <FastField name="search" component={InputField} placeholder="Search keywords" />
                </li>
                <li>
                  <Field
                    name="memberships"
                    type="select"
                    component={SelectMultiField}
                    placeholder="All memberships"
                    options={memberships}
                  />
                </li>
                <li>
                  <Field
                    name="types"
                    component={SelectMultiField}
                    placeholder="All user types"
                    options={roleList}
                  />
                </li>
                <li>
                  <Field
                    name="status"
                    type="select"
                    component={SelectField}
                    placeholder="Search keywords"
                    options={listStatus}
                  />
                </li>
              </ul>
              <ul>
                <li>
                  <Field
                    name="country"
                    component={SelectField}
                    type="select"
                    placeholder="Search keywords"
                    options={countryList}
                  />
                </li>
                <li>
                  <Field
                    name="state"
                    component={SelectField}
                    type="select"
                    placeholder="State"
                    options={countryList}
                  />
                </li>
                <li>
                  <FastField name="address" component={InputField} placeholder="Address" />
                </li>
                <li>
                  <FastField name="phone" component={InputField} placeholder="Phone" />
                </li>
              </ul>
              <Button>Search</Button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default Filters;
