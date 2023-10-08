import $ from "jquery"; 
import React, { createRef, useContext, useEffect, useState } from "react"; 
import { FormContext } from "./context";

window.jQuery = $; 
window.$ = $; 

require("jquery-ui-sortable"); 
require("formBuilder/dist/form-render.min.js")

const FormRender = () => {
    const { form, setForm } = useContext(FormContext);
    const [errors, setErrors] = useState({})
    const [ display, setDisplay] = useState({});
    const fb = createRef();


    useEffect(() => {
        let formData = form;
        $(fb.current).formRender( {formData} );
    }, [form]);

    function saveData() {
        const render = $(fb.current).formRender();
        const emptyFields = [];
        render.find("[required]").each(function () {
          if ($(this).val().trim() === "") {
            emptyFields.push($(this).attr("name"));
          }
        });
    
        if (emptyFields.length > 0) {
          const newErrors = {};
          emptyFields.forEach((fieldName) => {
            newErrors[fieldName] = "This field is required.";
          });
          setErrors(newErrors);
        } else {
          setErrors({});
          setDisplay(render.formRender("userData"));
        }
      }
    
    return (
        <div className="display-form">
            <h1>Display Form</h1>
            <form ref={fb}></form>
            
            {Object.keys(errors).length > 0 && (
                <div className="error-messages">
                    {Object.keys(errors).map((fieldName, index) => (
                        <p key={index}>{errors[fieldName]}</p>
                    ))}
                </div>
            )}

            <>
              <button
              onClick={saveData}
              type="button"
              >
                Submit Data
              </button>           
            </>

        </div>
    )
}

export default FormRender