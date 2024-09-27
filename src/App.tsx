import Header from "./components/Header";
import JobsList from "./components/JobsList";
import Filter from "./components/Filter";
import { JobProvider } from "./context/JobContext";

function App() {
  return (
    <JobProvider>
      <Header />
      <div className="flex flex-col justify-center items-center">
        <Filter />
        <JobsList />
      </div>
    </JobProvider>
  );
}

export default App;
