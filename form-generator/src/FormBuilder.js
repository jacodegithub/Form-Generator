import React, { useContext, useEffect, useRef, useState } from 'react';
import $ from 'jquery';
import 'jquery-ui-sortable';
import { FormContext } from './context';

window.jQuery = $;
window.$ = $;
require('formBuilder');

const FormBuilder = () => {
  const fb = useRef();
  const [builderInstance, setBuilderInstance] = useState(null);
  const [start, setStart] = useState(false);
  const {form, setForm} = useContext(FormContext);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (!start) {
      if (!builderInstance?.formData) {
        const builder = $(fb.current).formBuilder({
          disabledActionButtons: ['data', 'clear', 'save'],
          formData: [],
        });

        setBuilderInstance(builder);
        setStart(true);
      } else {
        console.error('formBuilder library not loaded properly');
      }
    }
  }, [start]);

  function resetForm() {
    builderInstance.actions.clearFields();
    setForm([]);
    setErrors({});
  }

  function saveForm() {
    const data = builderInstance.actions.getData();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length === 0) {
      setForm(data);
      setErrors({});
    } else {
      setErrors(validationErrors);
    }
  }

  function validateForm(data) {
    const errors = {};

    if (!data) {
        return errors;
      }

    data.forEach((field) => {
      if (field.required && !field.value) {
        errors[field.name] = 'This field is required.';
      }
    });

    return errors;
  }

  return (
    <div className="form-builder">
      <h1>Form Generator</h1>
      <div ref={fb} />
      <div className="form-buttons">
        <button onClick={resetForm} type="button">
          Clear
        </button>
        <button onClick={saveForm} type="button">
          Save
        </button>
      </div>
      {Object.keys(errors).length > 0 && (
        <div className="error-messages">
          {Object.keys(errors).map((fieldName) => (
            <div key={fieldName}>{errors[fieldName]}</div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FormBuilder;
