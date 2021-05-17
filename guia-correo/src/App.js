import {useEffect, useState} from 'react';
import './App.css';
import Search from './components/Search'
import List from './components/List'

function App() {

  const [envios, setEnvios] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () =>
  {
      const url = "http://localhost:3000/data.json";

      const response = await fetch(url);
      const data = await response.json();

      setEnvios(data);
  }
  return (
    <div className="App">
        <Search />
        <List envios={envios} />
    </div>
  );
}

export default App;
