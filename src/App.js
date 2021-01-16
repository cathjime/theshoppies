import logo from './logo.svg';
import './App.css';
import React from 'react' 
import FavoritesContainer from './Containers/FavoritesContainer'
import MoviesContainer from './Containers/MoviesContainer'
import Header from './Components/Header'

class App extends React.Component {
  render(){
    return (
      <>
        <Header />
        <MoviesContainer />
        <FavoritesContainer />
      </>
     
    );
  }
  
}

export default App;
