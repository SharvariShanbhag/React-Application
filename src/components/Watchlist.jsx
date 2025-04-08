import React from "react";

const Watchlist = ({ watchlist, removeFromWatchlist }) => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Watchlist</h2>
      {watchlist.length === 0 ? (
        <p className="text-gray-500">Your watchlist is empty.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {watchlist.map((movie) => (
            <div key={movie.id} className="bg-gray-800 p-4 rounded-lg shadow-lg text-white">
              <img
                src={movie.poster}
                alt={movie.title}
                className="w-full h-48 object-cover rounded-md"
              />
              <h3 className="mt-2 text-lg font-semibold">{movie.title}</h3>
              <button
                onClick={() => removeFromWatchlist(movie.id)}
                className="mt-2 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Watchlist;
