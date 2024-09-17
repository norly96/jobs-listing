import FilterItem from "./FilterItem";

interface FilterItem {
  name: string;
}

const Filter = ({ languages }: { languages: string[] }) => {
  return (
    <div className="flex py-4 px-8 items-center justify-between font-bold text-dark-cyan -mt-10 shadow-3xl shadow-dark-cyan bg-light-grayish-cyan rounded-md w-[80%] h-auto">
      <div className="flex flex-wrap gap-3">
        {languages &&
          languages.map((name, index) => (
            <FilterItem name={name} key={index} />
          ))}
      </div>
      <button className="h-5 hover:underline">Clear</button>
    </div>
  );
};

export default Filter;
