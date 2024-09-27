interface FilterItemProps {
  name: string;
  removeFilter: (name: string) => void;
}

const FilterItem = ({ name, removeFilter }: FilterItemProps) => {
  return (
    <div className="bg-gray-200 rounded-md flex items-center">
      <h1 className="px-2 text-sm sm:text-md lg:text-lg">{name}</h1>
      <button
        onClick={() => removeFilter(name)}
        className="bg-dark-cyan hover:transition-all hover:bg-black py-3 px-2 rounded-r-md"
      >
        <img src="/images/icon-remove.svg" alt="" />
      </button>
    </div>
  );
};

export default FilterItem;
