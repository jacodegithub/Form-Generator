import { useState } from 'react';
import './App.css';
import FormBuilder from './FormBuilder';
import FormRender from './FormField';
import { FormContext } from './context';

function App() {
  const [form, setForm] = useState({})

  return (
    <div className="App">
      <FormContext.Provider value={{ form, setForm }}>
        <div className="form-container">
          <div className="form-builder-comp">
            <FormBuilder />
          </div>
          <div className="form-field-comp">
            <FormRender />
          </div>
        </div>
      </FormContext.Provider>
    </div>
  );
}

export default App;
