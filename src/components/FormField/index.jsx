import React from 'react';
import PropTypes from 'prop-types';
import { FormFieldWrapper, Label, Input } from './styles';

function FormField({
  label, type, name, value, onChange, as,
}) {
  const fieldId = `id_${name}`;
  return (

    <FormFieldWrapper>
      <Label
        htmlFor={fieldId}
      >
        <Input
          as={as}
          id={fieldId}
          type={type}
          value={value}
          name={name}
          onChange={onChange}
        />

        <Label.Text>
          {label}
        </Label.Text>
      </Label>
    </FormFieldWrapper>
  );
}

FormField.defaultProps = {
  as: '',
  value: '',
  type: 'text',
};

FormField.propTypes = {
  as: PropTypes.string,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  // eslint-disable-next-line react/require-default-props
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default FormField;
