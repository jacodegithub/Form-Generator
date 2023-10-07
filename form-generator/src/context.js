import React, { createContext, useState } from 'react';

export const FormContext = createContext();

export const FormProvider = ({ children }) => {

  const [formData, setFormData] = useState({});

  const resetForm = () => setFormData({});

  const saveForm = () => {
    console.log('Saving form data:', formData);
  };

  return (
    <FormContext.Provider value={{ formData, setFormData, resetForm, saveForm }}>
      {children}
    </FormContext.Provider>
  );
};
