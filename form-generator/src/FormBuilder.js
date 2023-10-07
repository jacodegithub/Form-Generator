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
    const [form, setForm] = 

    useEffect(() => {
        setFormBuilder($(fb.current).formBuilder({ data }))
    }, [])

  return (
    <div className='form-builder'>
        <h2>Form Builder</h2>
        <div className="form-header">
            {
                Object.keys(form)
            }
        </div>
    </div>
  )
}
