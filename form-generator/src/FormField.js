import $ from "jquery"; 
import React, { createRef, useContext, useEffect, useState } from "react"; 
import { FormContext } from "./context";

window.jQuery = $; 
window.$ = $; 

require("jquery-ui-sortable"); 
require("formBuilder/dist/form-render.min.js")

const FormRender = () => {
    const { form, setForm } = useContext(FormContext);
    const [ display, setDisplay] = useState({});
    const fb = createRef();


    useEffect(() => {
        let formData = form;
        $(fb.current).formRender( {formData} );
    }, [form]);

    function saveData() {
        setDisplay($(fb.current).formRender("userData"))
    }
    return (
        <div className="display-form">
            <h1>Display Form</h1>
            <form ref={fb}></form>
            
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