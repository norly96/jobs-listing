import { useJobContext } from "../context/JobContext";
import FilterItem from "./FilterItem";

const Filter = () => {
  const { selectedFilters, removeFilter, clearFilters } = useJobContext();
  return (
    <>
      {selectedFilters.length !== 0 ? (
        <div className="flex py-4 px-8 items-center justify-between font-bold text-dark-cyan -mt-10 shadow-3xl shadow-dark-cyan bg-light-grayish-cyan rounded-md w-[80%] h-auto">
          <div className="flex flex-wrap gap-3">
            {selectedFilters &&
              selectedFilters.map((name, index) => (
                <FilterItem
                  name={name}
                  key={index}
                  removeFilter={removeFilter}
                />
              ))}
          </div>
          <button onClick={clearFilters} className="h-5 hover:underline">
            Clear
          </button>
        </div>
      ) : null}
    </>
  );
};

export default Filter;
