import './css/filterPills.css';

const FilterPills = ({ categories, handleFilterUpdate }) => {
  return (
    <>
      <button
        className="filter active-filter"
        key={`all Filter`}
        onClick={(e) => handleFilterUpdate(e, 'all')}
      >
        All
      </button>
      {categories.map((ele) => {
        let filterName = ele.charAt(0).toUpperCase() + ele.slice(1);
        return (
          <button
            className="filter"
            key={`${filterName} Filter`}
            onClick={(e) => handleFilterUpdate(e, ele)}
          >
            {filterName}
          </button>
        );
      })}
    </>
  );
};
export default FilterPills;
