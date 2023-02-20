import React from "react";
import { useEffect, useState } from "react";
import SearchIcon from "./search.svg";
import ThemeToggle from "./ThemeToggle";
import MovieCard from "./MovieCard";


const API_URL = `http://www.omdbapi.com?apikey=214c8bdb`;

const App = () => {

    const [ movies, setMovies ] = useState([]);
    const [ searchTerm, setSearchTerm ] = useState('');

    const [theme, setTheme] = useState("light");

      const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

    const searchMovies = async (title) => {
        const res = await fetch(`${API_URL}&s=${title}`);
        const data = await res.json();

        setMovies(data.Search);
    }

    useEffect(() => {
        searchMovies('Superman')
    }, [])

    

    return (
        <div className={`app ${theme}`}>
            < ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            <h1>MoviePlanet</h1>

            <div className="search">
                <input 
                placeholder="Search for movies"   
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}  
                onKeyDown={(e) => {
                    if (e.keyCode === 13) {
                    searchMovies(searchTerm);
                    }
                }}   
                />
                <img 
                src={SearchIcon} 
                alt="search" 
                onClick={() => searchMovies(searchTerm)}
                />
            </div>

            {movies.length > 0 ?
                (
                    <div className="container">
                        {movies.map((movie) => (
                            <MovieCard movie={movie} />
                        ))}
                    </div> 
                ) : 
                (
                    <div className="empty">
                        <h2>No movies found</h2>
                    </div>
                ) 
            }

        </div>
    )
}

export default App;