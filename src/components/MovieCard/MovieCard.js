import React from "react";

const MovieCard = (prpos) => {
  const { data } = prpos;
  return (
    <div className="card-item">
      <div className="card-inner">
        <div className="card-top">
          <img src={data.poster} alt={data.Title} />
        </div>
        <div className="card-bottom">
          <div className="card-info">
            <h4>
              <p>{data.Year}</p>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
