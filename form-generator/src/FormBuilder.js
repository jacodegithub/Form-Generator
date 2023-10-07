import $ from 'jquery'
import React, { createRef, useEffect, useState } from 'react'

window.jQuery = $
window.$ = $

require("jQuery-ui-sortable")
require("formBuilder")

const data = [
    {
        type: "header",
        subtype: "h2",
        label: "Form Generator"
    },
]



export const FormBuilder = () => {

    const fb = createRef()

    let [formBuilder, setFormBuilder] = useState(null)

    const [form, setForm] = useState([])


    function saveData() {
        setForm(formBuilder.formData)
    }
    
    function clearData() {
        formBuilder.actions.clearFields()
        setForm([])
    }

    useEffect(() => {
        setFormBuilder($(fb.current).formBuilder({ data }))
    }, [])

  return (
    <div className='form-builder'>
        <h2>Form Builder</h2>
        <div className="buttons">
            <button type='button' onClick={clearData}>clear</button>
            <button type='button' onClick={saveData}>save</button>
        </div>
    </div>
  )
}
