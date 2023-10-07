import React, { useContext, useEffect, useRef, useState } from 'react';
import $ from 'jquery';
import 'jquery-ui-sortable';
import { FormContext } from './context';

window.jQuery = $;
window.$ = $;
require('formBuilder'); 

const FormBuilder = () => {
  const fb = useRef();

  const { resetForm, saveForm } = useContext(FormContext)

  const [start, setStart] = useState(false)

  useEffect(() => {
    if(!start) {
        $(fb.current).formBuilder();
        setStart(true)
        console.log('print')
    }
  }, [start]);

  return (
        <div className='form-builder'>
            <h2>Build Form</h2>
            <div ref={fb} />
            <div className="form-buttons">
                <button onClick={resetForm} type='button'>clear</button>
                <button onClick={saveForm} type='button'>save</button>
            </div>
        </div>
    )
};

export default FormBuilder;

