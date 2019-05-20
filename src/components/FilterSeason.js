import React from 'react'

const FilterSeason = ({ onFilterSeason }) => {
  return (
    <div className="FilterSeason mb-4">
      <h6>Filter season</h6>

      <div className="btn-group" role="group">
        {[null, 1, 2, 3, 4, 5, 6, 7, 8].map(season => (
          <button
            className="btn btn-secondary"
            key={season}
            onClick={() => { onFilterSeason(season) }}>

            {season ? `S0${season}` : 'Todas'}

          </button>
        ))}
      </div>
    </div>
  );
}

export default FilterSeason