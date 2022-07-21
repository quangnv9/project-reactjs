import React, { useState } from 'react';
import Select from 'react-select';
import { Label } from 'reactstrap';
import { Option } from 'utils/constants';
import './styles.scss';

interface Props {
  field: any;
  label: string;
  placeholder: string;
  options: any[];
  form: any;
  isMulti?: boolean;
}

const SelectMultiField = (props: Props) => {
  const { field, label, placeholder, options, form, isMulti } = props;

  const handleChange = (options: any | Option[]) => {
    form.setFieldValue(
      field.name,
      options ? (options as Option[]).map((item: Option) => item.value) : []
    );
  };

  const getValue = () => {
    if (options) {
      return isMulti
        ? options.filter((option) => field.value.indexOf(option.value) >= 0)
        : options.find((option) => option.value === field.value);
    } else {
      return isMulti ? [] : ('' as any);
    }
  };
  return (
    <div className="form-field ">
      <Label>{label}</Label>
      <Select
        placeholder={placeholder}
        className="multi-select-field"
        classNamePrefix="react-select"
        name={field.name}
        value={getValue()}
        onChange={handleChange}
        options={options}
        isMulti
      />
    </div>
  );
};

export default SelectMultiField;
