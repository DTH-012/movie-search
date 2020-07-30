import React, {useState} from 'react';
import Card from './Card'
import '../styles/SearchForm.css'

function SearchForm(){
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);
    
    const searchMovies = async(e) => {
        e.preventDefault();
    
        const url = `https://api.themoviedb.org/3/search/movie?api_key=56ece64b4f0a308f5ca9594697348e97&language=en-US&query=${query}&page=1&include_adult=false`
    
        try {
            const res = await fetch(url);
            const data = await res.json();
            setMovies(data.results);
            console.log(movies);
            console.log(data.results);
        }
        catch(error) {
            console.error(error);
        }
    }

    return (
        <>
            <form className="search-form" onSubmit={searchMovies}>
                <label className="label" htmlFor="query">Movie name: </label>
                <input className="input" type="text" name="query" placeholder="i.e. One Piece"
                value={query} onChange={(e) => setQuery(e.target.value)}></input>
                <button className="button" type="submit">Search</button>
            </form>
            <div className="card-list">
                {movies.filter(movie => movie.poster_path).map(movie => (
                    <Card movie={movie} key={movie.id} />
                ))}
            </div>
        </>
    );
}

export default SearchForm;