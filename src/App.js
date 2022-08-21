import Header from './components/Header.js'
import Footer from './components/Footer.js';
import Main from './components/Main.js';
import { useEffect } from 'react';
import axios from 'axios';
import './App.css';


const options = {
  method: 'GET',
  url: 'https://edamam-recipe-search.p.rapidapi.com/search',
  params: {q: 'rice'},
  headers: {
    'X-RapidAPI-Key': 'c0d2e70417msh3bde3b7dbe9e25ap12748ejsncd1fe394742c',
    'X-RapidAPI-Host': 'edamam-recipe-search.p.rapidapi.com'
  }
};
function App() {

  useEffect(()=>{
    axios.request(options).then(function (response) {
      console.log(response.data);
    }).catch(function (error) {
      console.error(error);
    });
  }, [])

  return (
    <div className="App">
      <Header/>
      <Footer/>
      <Main />
      
    </div>
  );
}

export default App;
