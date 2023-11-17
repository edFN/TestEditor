import logo from './logo.svg';
import './App.css';

import CardTests from './feauters/SearchTestPanel/components/CardTest/CardTest';
import SearchBar from './feauters/SearchTestPanel/components/SearchBar/SearchBar';
import NavBar from './feauters/SearchTestPanel/components/NavBar/NavBar'

function App() {
  return (
      <>
        <NavBar />
        <SearchBar/>
        <CardTests/>
      </>
  );
}

export default App;
