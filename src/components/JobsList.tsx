import JobsCard from "./JobsCard";
import { useJobContext } from "../context/JobContext";

const JobsList = () => {
  const { jobs } = useJobContext();

  return (
    <div className="w-full mt-20 font-spartan">
      {jobs.map((j) => (
        <JobsCard key={j.id} job={j} />
      ))}
    </div>
  );
};

export default JobsList;
