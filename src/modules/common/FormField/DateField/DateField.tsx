import { useField, useFormikContext } from 'formik';
import React, { useState } from 'react';
import DatePicker from 'react-multi-date-picker';
import { Input, Label } from 'reactstrap';

interface Props {
  field: any;
  label: string;
  form: any;
}

const DateField = (props: Props) => {
  const { field, label, form } = props;
  const { value, name } = field;
  return (
    <div className="form-field">
      <Label>{label}</Label>

      <DatePicker
        {...field}
        selected={(field.value && new Date(field.value)) || null}
        onChange={(val) => {
          form.setFieldValue(field.name, val);
        }}
      />
    </div>
  );
};

export default DateField;
