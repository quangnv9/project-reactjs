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

const CheckboxField = (props: Props) => {
  const { field, type, label, errors, istouched } = props;
  return (
    <div className="form-field checkbox">
      <Label>{label}</Label>
      <Input {...field} type={type} errors={errors} istouched={istouched} />
    </div>
  );
};

export default CheckboxField;
