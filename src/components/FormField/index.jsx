import React from 'react';
import PropTypes from 'prop-types';
import { FormFieldWrapper, Label, Input } from './styles';

function FormField({
  label, type, name, value, onChange, as, suggestions,
}) {
  const fieldId = `id_${name}`;
  const hasSuggestions = Boolean(suggestions.length);

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
          autoComplete={hasSuggestions ? 'off' : 'on'}
          list={hasSuggestions ? `suggestionFor_${fieldId}` : undefined}
        />

        <Label.Text>
          {label}
        </Label.Text>
        {
          hasSuggestions && (
            <datalist id={`suggestionFor_${fieldId}`}>
              {
              suggestions.map((suggestion) => (
                <option value={suggestion} key={`suggestionFor_${fieldId}_option${suggestion}`}>
                  {suggestion}
                </option>
              ))
            }
            </datalist>
          )
        }

      </Label>
    </FormFieldWrapper>
  );
}

FormField.defaultProps = {
  as: '',
  value: '',
  type: 'text',
  suggestions: [],
};

FormField.propTypes = {
  as: PropTypes.string,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  suggestions: PropTypes.arrayOf(PropTypes.string),
};

export default FormField;
