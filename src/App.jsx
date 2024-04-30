// import { useState } from "react";
import { useState } from "react";
import MovieCard from "./Components/MovieCard";
import movies from "./utils/movies";
import countries from "./utils/countries";
import languages from "./utils/languages";
import genres from "./utils/genre";

export default function App() {
  const [filteredMovies, setFilteredMovies] = useState(movies);
  const [showFilteres, setShowFilters] = useState(false);
  const [selectedCountries, setSelectedCountries] = useState([]);
  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState([]);

  const handleChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedCountries([...selectedCountries, value]);
    } else {
      setSelectedCountries(
        selectedCountries.filter((country) => country !== value)
      );
    }
  };
  const handleLanguageChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedLanguages([...selectedLanguages, value]);
    } else {
      setSelectedLanguages(
        selectedLanguages.filter((language) => language !== value)
      );
    }
  };
  const handleGenreChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedGenre([...selectedGenre, value]);
    } else {
      setSelectedGenre(selectedGenre.filter((genre) => genre !== value));
    }
  };

  const handleApplyFilters = () => {
    const newMovies = [];

    movies.forEach((movie) => {
      const matchesCountry =
        selectedCountries.length === 0 ||
        selectedCountries.some((country) =>
          movie.moviecountries.includes(country)
        );
      const matchesLanguage =
        selectedLanguages.length === 0 ||
        selectedLanguages.some((language) =>
          movie.movielanguages.includes(language)
        );
      const matchesGenre =
        selectedGenre.length === 0 ||
        selectedGenre.some((genre) => movie.moviegenres.includes(genre));

      if (matchesCountry && matchesLanguage && matchesGenre) {
        newMovies.push(movie);
      }
    });
    setShowFilters(false);
    setFilteredMovies(newMovies);
  };

  const handleResetFilters = () => {
    setSelectedCountries([]);
    setSelectedLanguages([]);
    setSelectedGenre([]);
    setFilteredMovies(movies);
    setShowFilters(false);
  };

  return (
    <>
      <header className="flex justify-center items-center px-2 py-4  bg-gray-200 text-gray-800   ">
        <h2 className="text-3xl font-bold tracking-wider">Movies List</h2>
      </header>
      <main className="bg-gray-100 px-2 lg:px-32 py-1">
        <div className=" bg-white  p-2 border-2 border-slate-400 rounded-lg ">
          <div className="flex flex-row justify-between p-1 ">
            <button
              onClick={() => setShowFilters(!showFilteres)}
              className=" flex gap-2 justify-center items-center font-bold text-2xl  "
            >
              <h2 className=" "> Filters: </h2>
              <h2>^</h2>
            </button>
            <div className=" flex gap-4 justify-center items-center ">
              <button
                className="text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-md px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 "
                onClick={handleResetFilters}
              >
                Reset Filters
              </button>
              <button
                className="text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-md px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 "
                onClick={handleApplyFilters}
              >
                Apply Filters
              </button>
            </div>
          </div>
          {/* Filteres selector */}
          <div
            className={`flex justify-evenly overflow-hidden  transition-all ease-in-out duration-500 ${
              showFilteres ? "max-h-screen" : "max-h-0"
            }`}
          >
            <div className=" flex flex-col gap-2 p-2 w-3/12 rounded-lg bg-gray-50 hover:bg-gray-100 hover:shadow-md border-2 border-gray-200  ">
              <label className="border-b-2 border-gray-300 text-lg font-extralight  ">
                Select countries:
              </label>
              {countries.map((country, index) => (
                <div
                  className={` flex justify-start gap-2 hover:bg-gray-300 p-2 rounded-md ${
                    selectedCountries.includes(country) ? "bg-gray-300" : ""
                  } `}
                  key={index}
                >
                  <input
                    className="scale-110 "
                    type="checkbox"
                    id={country}
                    value={country}
                    checked={selectedCountries.includes(country)}
                    onChange={handleChange}
                  />
                  <label htmlFor={country}>{country}</label>
                </div>
              ))}
            </div>
            <div className=" flex flex-col gap-2 p-2 w-3/12 rounded-lg bg-gray-50 hover:bg-gray-100 hover:shadow-md border-2 border-gray-200  ">
              <label className="border-b-2 border-gray-300 text-lg font-extralight  ">
                Select Languages:
              </label>
              {languages.map((language, index) => (
                <div
                  className={` flex justify-start gap-2 hover:bg-gray-300 p-2 rounded-md ${
                    selectedLanguages.includes(language) ? "bg-gray-300" : ""
                  } `}
                  key={index}
                >
                  <input
                    className="scale-110 "
                    type="checkbox"
                    id={language}
                    value={language}
                    checked={selectedLanguages.includes(language)}
                    onChange={handleLanguageChange}
                  />
                  <label htmlFor={language}>{language}</label>
                </div>
              ))}
            </div>
            <div className=" flex flex-col gap-2 p-2 w-3/12  rounded-lg bg-gray-50 hover:bg-gray-100 hover:shadow-md border-2 border-gray-200  ">
              <label className="border-b-2 border-gray-300 text-lg font-extralight  ">
                Select Genre:
              </label>
              {genres.map((genre, index) => (
                <div
                  className={` flex justify-start gap-2 hover:bg-gray-300 p-2 rounded-md ${
                    selectedGenre.includes(genre) ? "bg-gray-300" : ""
                  } `}
                  key={index}
                >
                  <input
                    className="scale-110 "
                    type="checkbox"
                    id={genre}
                    value={genre}
                    checked={selectedGenre.includes(genre)}
                    onChange={handleGenreChange}
                  />
                  <label htmlFor={genre}>{genre}</label>
                </div>
              ))}
            </div>
          </div>
        </div>
        <h2>There are {filteredMovies.length} Movies</h2>
        <div className="flex flex-col items-center gap-4 ">
          {filteredMovies &&
            filteredMovies.map((movie) => {
              return <MovieCard movie={movie} key={movie.imdbmovieid} />;
            })}
        </div>
      </main>
    </>
  );
}
