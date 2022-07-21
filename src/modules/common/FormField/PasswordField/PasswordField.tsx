import React from 'react';
import { Input, Label } from 'reactstrap';
import './styles.scss';

interface Props {
  field: any;
  type: string;
  label: string;
  errors: string;
  istouched: boolean;
}

const PasswordField = (props: Props) => {
  const { field, type, label, errors, istouched } = props;
  return (
    <div className="form-field ">
      <Label>{label}</Label>
      <Input
        className="password-field"
        {...field}
        type={type}
        errors={errors}
        istouched={istouched}
      />
      {errors && istouched && <small className="text-danger">{errors}</small>}
    </div>
  );
};

export default PasswordField;
