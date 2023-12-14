import logo from './logo.svg';
import './App.css';

import {Route, Routes} from 'react-router-dom'

import PageLayout from './shared/layouts/PageLayout/PageLayout';
import TestViewPage from "./feauters/SearchTestPanel/conteiner/TestViewPage";
import NotFound from "./feauters/NotFound/conteiner/NotFound";
import RegistrationForm from "./feauters/Registration/components/RegistrationForm/RegistrationForm";
import MyListTestPage from "./feauters/MyListTest/conteiner/MyListTest";
import EditTestPage from './feauters/EditTest/conteiner/EditTestPage';
import LoginPage from "./feauters/LoginPage/conteiner/LoginPage";
import UpdateTestPage from "./feauters/UpdateTest/conteiner/UpdateTestPage";
import TestPage from "./feauters/Test/conteiner/TestPage";
import ReportPage from './feauters/ReportPage/conteiner/ReportPage';
import ListProtocolPage from "./feauters/ProtocolList/conteiner/ListProtocolPage";

function App() {
  return (
      <PageLayout>
          <Routes>
              <Route path='/' element={<TestViewPage/>}/>
              <Route path='/register' element={<RegistrationForm/>} />
              <Route path='/list' element={<MyListTestPage/>}/>
              <Route path='/edit' element={<EditTestPage/>} />
              <Route path='/edit/:id' element={<UpdateTestPage/>}/>
              <Route path='/login' element={<LoginPage/>}/>
              <Route path='/test/:id' element={<TestPage/>}/>
              <Route path='/protocol-list/:id' element={<ListProtocolPage/>} />
              <Route path='/protocol/:id' element={<ReportPage/>}/>
            
              <Route path='*' element={<NotFound/>}/>
              

          </Routes>
      </PageLayout>
  );
}

export default App;
