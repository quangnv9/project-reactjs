import React from 'react';
import { Input, Label } from 'reactstrap';
import './styles.scss';

interface Props {
  field: any;
  type: string;
  label: string;
  placeholder: string;
  errors: string;
  istouched: boolean;
}

const InputField = (props: Props) => {
  const { field, type, label, errors, istouched, placeholder } = props;
  return (
    <div className="form-field">
      <Label>{label}</Label>
      <Input
        className="input-field "
        {...field}
        type={type}
        placeholder={placeholder}
        errors={errors}
        istouched={istouched}
      />

      {errors && istouched && <small className="text-danger">{errors}</small>}
    </div>
  );
};

export default InputField;
