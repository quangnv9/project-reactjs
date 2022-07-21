import Header from 'modules/common/Header/Header';
import Loading from 'modules/common/Loading/Loading';
import SideBar from 'modules/common/SideBar/SideBar';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
import React, { useState } from 'react';
import * as yup from 'yup';
import './styles.scss';
import { FastField, Field, Form, Formik } from 'formik';
import InputField from 'modules/common/FormField/InputField/InputField';
import { Button } from 'reactstrap';
import PasswordField from 'modules/common/FormField/PasswordField/PasswordField';
import CheckboxField from 'modules/common/FormField/CheckboxField/CheckboxField';
import SelectField from 'modules/common/FormField/SelectField/SelectField';
import { accessLevel, paymentRailsType, membershipId, colourOptions } from 'utils/constants';
import SelectMultiField from 'modules/common/FormField/SelectMultiField/SelectMultiField';
import DateField from 'modules/common/FormField/DateField/DateField';

interface Props {
  roleList: any[];
  onCreateUser: any;
}

const CreateUserForm = (props: Props) => {
  const { onCreateUser, roleList } = props;
  const LoginValidation = yup.object().shape({
    email: yup.string().email('emailInvalid').required('emailRequire'),
    password: yup
      .string()
      .min(6, 'minPasswordInvalid')
      .max(50, 'maxPasswordInvalid')
      .required('passwordRequire'),
    confirm_password: yup
      .string()
      .required('repeatPasswordRequire')
      .oneOf([yup.ref('password')], 'repeatPasswordInvalid'),
    firstName: yup.string().required('firstNameRequire'),
    lastName: yup.string().required('lastNameRequire'),
    access_level: yup.string().required('accessLevelRequire'),
  });

  return (
    <div>
      <div>
        <Header />
        <SideBar />
        <div className="user-content">
          <BsFillArrowLeftCircleFill />
          <h2>Create profile</h2>
          <Formik
            validationSchema={LoginValidation}
            initialValues={{
              firstName: '',
              lastName: '',
              email: '',
              password: '',
              confirm_password: '',
              paymentRailsType: '',
              access_level: '',
              roles: [],
              membership_id: '',
              status: '',
              date: [],
            }}
            onSubmit={(values) => {
              console.log(values);
              onCreateUser(values);
            }}
          >
            {({ errors, touched, values }) => {
              return (
                <Form>
                  <div className="create-form-ss col-md-6">
                    <h5>Email password</h5>
                    <div>
                      <FastField
                        name="firstName"
                        component={InputField}
                        label="First Name *"
                        type="text"
                        errors={errors.firstName}
                        istouched={touched.firstName}
                      />
                    </div>
                    <div>
                      <FastField
                        name="lastName"
                        component={InputField}
                        label="Last Name *"
                        type="text"
                        errors={errors.lastName}
                        istouched={touched.lastName}
                      />
                    </div>
                    <div>
                      <FastField
                        name="email"
                        component={InputField}
                        label="Email *"
                        type="text"
                        errors={errors.email}
                        istouched={touched.email}
                      />
                    </div>
                    <div>
                      <FastField
                        name="password"
                        component={PasswordField}
                        label="Password *"
                        type="password"
                        errors={errors.password}
                        istouched={touched.password}
                      />
                    </div>
                    <div>
                      <FastField
                        name="confirm_password"
                        component={PasswordField}
                        label="Confirm password *"
                        type="password"
                        errors={errors.confirm_password}
                        istouched={touched.confirm_password}
                      />
                    </div>
                    <div>
                      <FastField
                        name="paymentRailsType"
                        component={SelectField}
                        label="Type"
                        type="select"
                        errors={errors.paymentRailsType}
                        istouched={touched.paymentRailsType}
                        options={paymentRailsType}
                      />
                    </div>
                  </div>
                  <div className="line"></div>
                  <div className="create-form-ss col-md-6">
                    <h5>Access information</h5>
                    <div>
                      <Field
                        name="access_level"
                        component={SelectField}
                        label="Access level *"
                        type="select"
                        placeholder="Chọn level"
                        errors={errors.access_level}
                        istouched={touched.access_level}
                        options={accessLevel}
                      />
                    </div>
                    {values.access_level === '100' && (
                      <div>
                        <Field
                          name="roles"
                          component={SelectMultiField}
                          label="Roles "
                          type="select"
                          options={roleList}
                        />
                      </div>
                    )}

                    <div>
                      <FastField
                        name="membership_id"
                        component={SelectField}
                        label="Membership"
                        type="select"
                        options={membershipId}
                      />
                    </div>
                    <div>
                      <FastField
                        name="forceChangePassword"
                        component={CheckboxField}
                        label="Require to change password on next log in"
                        type="checkbox"
                        errors={errors}
                        istouched={touched}
                      />
                    </div>
                  </div>
                  <div className="line"></div>
                  <div className="create-form-ss col-md-6">
                    <h5>Tax information</h5>
                    <div>
                      <FastField
                        name="taxExempt"
                        component={CheckboxField}
                        label="Tax exempt "
                        type="checkbox"
                        errors={errors}
                        istouched={touched}
                      />
                    </div>
                  </div>
                  <Button className="create-user">Create User</Button>
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default CreateUserForm;
