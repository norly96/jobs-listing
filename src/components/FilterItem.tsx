const FilterItem = ({ name }: { name: string }) => {
  return (
    <div className="bg-gray-200 rounded-md flex items-center">
      <h1 className="px-2">{name}</h1>
      <button className="bg-dark-cyan hover:bg-black py-3 px-2 rounded-r-md">
        <img src="/images/icon-remove.svg" alt="" />
      </button>
    </div>
  );
};

export default FilterItem;
