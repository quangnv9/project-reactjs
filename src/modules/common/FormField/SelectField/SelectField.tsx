import React from 'react';
import Select from 'react-select';
import { Input, Label } from 'reactstrap';
import { listStatus } from 'utils/constants';
import './styles.scss';

interface Props {
  field: any;
  label: string;
  placeholder: string;
  errors: string;
  isTouched: boolean;
  options: any[];
}

const SelectField = (props: Props) => {
  const { field, label, placeholder, errors, isTouched, options } = props;

  const { name, value } = field;

  const selectedOption = options.find((option) => option.value === value);

  const handleSelectOptionChange = (selectedOption: any) => {
    const selectedValue = selectedOption ? selectedOption.value : selectedOption;
    const changeEvent = {
      target: {
        name: name,
        value: selectedValue,
      },
    };
    field.onChange(changeEvent);
  };

  return (
    <div className="form-field">
      <Label>{label}</Label>
      <Select
        {...field}
        isClearable
        className="select-field"
        classNamePrefix="select"
        value={selectedOption}
        onChange={handleSelectOptionChange}
        options={options}
      />
    </div>
  );
};
export default SelectField;
