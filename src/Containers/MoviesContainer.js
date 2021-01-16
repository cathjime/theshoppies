import React from 'react' 

class MoviesContainer extends React.Component {

    state = {movies: {}}
   
    render(){
        
        let apiCall = () => {
            fetch("http://www.omdbapi.com/?i=tt3896198&apikey=2b281728")
            .then(resp => resp.json())
            .then(data => console.log(data))
        }

        return (
            <>
            <h1> MOVIES</h1>
            apiCall
            </>
        )
    }
   
  
}

export default MoviesContainer;
