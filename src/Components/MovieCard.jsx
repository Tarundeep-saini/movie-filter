// import React from "react";

const MovieCard = (movie) => {
  return (
    <div className=" flex flex-col md:flex-row gap-7 w-10/12 bg-white  hover:shadow-xl transition-all duration-500     bg-opacity-60 p-4 ">
      <div
        className="flex items-center justify-center min-w-44 bg-opacity-20 rounded-sm "
        style={{
          backgroundImage: `url(${movie.movie.moviemainphotos[0]})`,
          backdropFilter: "blur(1px)",
          backgroundSize: "250%",
          backgroundPosition: "center",
        }}
      >
        <img
          className="  rounded-md hover:scale-[1.04] transition-all  duration-200 "
          src={movie.movie.moviemainphotos[0]}
          alt="image"
        />
      </div>
      <div className=" flex flex-col gap-2   w-10/12">
        <h2 className=" text-3xl font-bold text-gray-700 ">
          {movie.movie.movietitle}
        </h2>
        <div>
          <h2 className="text-lg">Movie Genre:</h2>
          <div className="flex flex-wrap gap-2 ">
            {movie.movie.moviegenres.map((genre, index) => (
              <h2 className=" p-1 bg-slate-600 text-sm text-white" key={index}>
                {genre}
              </h2>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-lg">
            Available in {movie.movie.moviecountries.length} countries :{" "}
          </h2>
          <div className="flex flex-wrap gap-2 ">
            {movie.movie.moviecountries.map((country, index) => (
              <h2 className=" p-1 bg-slate-600 text-sm text-white" key={index}>
                {country}
              </h2>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-lg">
            Available in {movie.movie.movielanguages.length} Languages :
          </h2>
          <div className="flex flex-wrap gap-2 ">
            {movie.movie.movielanguages.map((language, index) => (
              <h2 className=" p-1 bg-slate-600 text-sm text-white" key={index}>
                {language}
              </h2>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
