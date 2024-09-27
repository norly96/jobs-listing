import { useJobContext } from "../context/JobContext";
import { Job } from "../interfaces/Job";

const JobsCard = ({ job }: { job: Job }) => {
  const filters = [job.role, job.level, ...job.tools, ...job.languages];
  const { addFilter } = useJobContext();
  return (
    <div className="flex flex-col sm:flex-row sm:py-8 lg:py-12 px-8 sm:px-3 lg:px-8 divide-y sm:divide-y-0 divide-dark-grayish-cyan mb-20 sm:mb-12 font-bold hover:border-l-4 hover:border-dark-cyan hover:transition-all hover:-translate-y-1 justify-between text-dark-cyan shadow-4xl shadow-dark-cyan bg-light-grayish-cyan rounded-md w-[80%] mx-auto h-auto">
      <div className="flex flex-col sm:flex-row items-start -mb-4 sm:mb-0 sm:items-center ">
        <img
          src={job.logo}
          alt="icon-company"
          className="-translate-y-12 sm:translate-y-0 h-auto w-[70px] lg:w-auto"
        />
        <div className="flex flex-col sm:ml-3 lg:ml-8 -translate-y-9 sm:translate-y-0 gap-1 sm:gap-3 lg:gap-1">
          <div className="flex flex-wrap">
            <p className="font-bold mr-4 text-sm sm:text-md">{job.company}</p>
            <div className="flex items-center text-xs gap-1">
              {job.new ? (
                <p className="text-white bg-dark-cyan rounded-xl py-0.5 px-1.5">
                  NEW!
                </p>
              ) : null}

              {job.featured ? (
                <p className="text-white bg-very-dark-grayish-cyan rounded-xl py-0.5 px-1.5">
                  FEATURED
                </p>
              ) : null}
            </div>
          </div>
          <h1 className="font-bold text-xl lg:text-2xl cursor-pointer hover:text-dark-cyan text-very-dark-grayish-cyan">
            {job.position}
          </h1>
          <div className="flex text-sm sm:text-md font-medium text-dark-grayish-cyan">
            <p>{job.postedAt}</p>
            <span className="mx-2">.</span>
            <p>{job.contract}</p>
            <span className="mx-2">.</span>
            <p>{job.location}</p>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 sm:gap-1 lg:gap-3 py-5 sm:py-0 flex-wrap  text-sm sm:text-md lg:text-lg">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => addFilter(f)}
            className="bg-gray-200 hover:bg-dark-cyan hover:text-white transition-all rounded-md px-2 py-2 "
          >
            {f}
          </button>
        ))}
      </div>
    </div>
  );
};

export default JobsCard;
