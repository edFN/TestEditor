import logo from './logo.svg';
import './App.css';

import {Route, Routes} from 'react-router-dom'

import PageLayout from './shared/layouts/PageLayout/PageLayout';
import TestViewPage from "./feauters/SearchTestPanel/conteiner/TestViewPage";
import NotFound from "./feauters/NotFound/conteiner/NotFound";
import RegistrationForm from "./feauters/Registration/components/RegistrationForm/RegistrationForm";

function App() {
  return (
      <PageLayout>
          <Routes>
              <Route path='/' element={<TestViewPage/>}/>
              <Route path='/register' element={<RegistrationForm/>} />
              <Route path='*' element={<NotFound/>}/>
          </Routes>
      </PageLayout>
  );
}

export default App;
