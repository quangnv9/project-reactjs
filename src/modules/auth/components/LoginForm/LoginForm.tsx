import { Field, Form, Formik } from 'formik';
import InputField from 'modules/common/FormField/InputField/InputField';
import PasswordField from 'modules/common/FormField/PasswordField/PasswordField';
import React from 'react';
import { Button, Input } from 'reactstrap';
import { FiLogIn } from 'react-icons/fi';
import './styles.scss';
import { ILoginParams } from 'models/auth';

interface Props {
  onLogin(values: ILoginParams): void;
}

const LoginForm = (props: Props) => {
  const { onLogin } = props;
  return (
    <div className="container">
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={(values) => {
          onLogin(values);
        }}
      >
        {({ errors, touched }) => (
          <Form className="login-form">
            <h3>Login</h3>
            <Field
              name="email"
              component={InputField}
              placeholder="Nhập email"
              type="text"
              label="Email:"
              errors={errors}
              isTouched={touched}
            />
            <Field
              name="password"
              component={PasswordField}
              placeholder="Nhập password"
              type="password"
              label="Mật khẩu:"
              errors={errors}
              isTouched={touched}
            />
            <Button color="primary">
              <FiLogIn />
              Login
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
