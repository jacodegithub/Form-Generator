import './App.css';
import FormBuilder from './FormBuilder';
import { FormProvider } from './context';

function App() {
  return (
    <div className="App">
      <FormProvider>
        <FormBuilder />
      </FormProvider>
    </div>
  );
}

export default App;
