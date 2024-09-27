import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { Job } from "../interfaces/Job";
import axios from "axios";

interface JobContextProps {
  jobs: Job[];
  filters: string[];
  selectedFilters: string[];
  addFilter: (filter: string) => void;
  removeFilter: (filter: string) => void;
  //filteredJobs: Job[];
}

export const JobContext = createContext<JobContextProps | undefined>(undefined);

export const useJobContext = () => {
  const context = useContext(JobContext);
  if (!context) {
    throw new Error("useJobContext debe usarse dentro de JobProvider");
  }
  return context;
};

export const JobProvider = ({ children }: { children: ReactNode }) => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [filters, setfilters] = useState<string[]>([]);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  // Función para agregar filtros
  const addFilter = (filter: string) => {
    setSelectedFilters((prevFilters) =>
      prevFilters.includes(filter) ? prevFilters : [...prevFilters, filter]
    );
  };

  // Función para eliminar filtros
  const removeFilter = (filter: string) => {
    setSelectedFilters((prevFilters) =>
      prevFilters.filter((f) => f !== filter)
    );
  };

  // Filtrar los trabajos en base a los filtros seleccionados
  /* const filteredJobs = jobs.filter((job) =>
    selectedFilters.every((filter) => job.role.includes(filter))
  ); */

  useEffect(() => {
    const loadJobs = async () => {
      const response = await axios.get("/src/data/data.json");
      try {
        if (selectedFilters.length === 0) {
          const jobs = response.data;
          setJobs(jobs);
        } else {
          const jobs = response.data;
          const filteredJobs = jobs.filter((job: Job) =>
            selectedFilters.every(
              (filter) =>
                job.role.includes(filter) ||
                job.level.includes(filter) ||
                job.languages.includes(filter) ||
                job.tools.includes(filter)
            )
          );
          setJobs(filteredJobs);
        }
      } catch (err) {
        console.log();
        ("Error al cargar los datos");
      }
    };
    loadJobs();
  }, [selectedFilters]);

  return (
    <JobContext.Provider
      value={{
        jobs,
        filters,
        selectedFilters,
        addFilter,
        removeFilter,
      }}
    >
      {children}
    </JobContext.Provider>
  );
};
