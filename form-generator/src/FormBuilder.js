import React, { useContext, useEffect, useRef, useState } from 'react';
import $ from 'jquery';
import 'jquery-ui-sortable';
import { FormContext } from './context';


window.jQuery = $;
window.$ = $;
require('formBuilder')

const FormBuilder = () => {
  const fb = useRef();
  const [builderInstance, setBuilderInstance] = useState(null);
  const [start, setStart] = useState(false);
  const {form, setForm} = useContext(FormContext);

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
  }

  function saveForm() {
    setForm(builderInstance.formData)
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
    </div>
  );
};

export default FormBuilder;
