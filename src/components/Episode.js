import React from 'react'

const Episode = () => {
  return (
    <div className="Episode card">
      <img src="http://static.tvmaze.com/uploads/images/medium_landscape/1/2668.jpg" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Title here</h5>
          <h6 className="card-title">S00 E00</h6>
          <p className="card-text">
            summary
          </p>

          <div className="d-flex justify-content-between">
            <a href="#" className="card-link">Read more</a>

            <button className="card-link btn btn-sm btn-primary">
              Favourite
            </button>
        </div>
      </div>
    </div>
  );
}

export default Episode
