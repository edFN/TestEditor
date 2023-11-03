import logo from './logo.svg';
import './App.css';

import NavBar from "./ components/UI/NavBar/NavBar";
import SearchBar from "./ components/UI/SearchBar/SearchBar";

import CardTests from './ components/UI/CardTests/CardTest';

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
