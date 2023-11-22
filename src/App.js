import logo from './logo.svg';
import './App.css';

import CardTests from './feauters/SearchTestPanel/components/CardTest/CardTest';
import SearchBar from './feauters/SearchTestPanel/components/SearchBar/SearchBar';
import NavBar from './feauters/SearchTestPanel/components/NavBar/NavBar'

import PageLayout from './shared/layouts/PageLayout/PageLayout';

function App() {
  return (
      <>
        <PageLayout>
          <SearchBar/>
          <CardTests/>
        </PageLayout>
        {/* <NavBar />
        <SearchBar/>
        <CardTests/> */}
      </>
  );
}

export default App;
