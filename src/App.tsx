import Header from "./components/Header";
import JobsList from "./components/JobsList";
import Filter from "./components/Filter";

const languages: string[] = [
  "Frontend",
  "ReactJS",
  "CSS",
  "Javascript",
  "Astro",
  "Backend",
];

function App() {
  return (
    <>
      <Header />
      <div className="flex flex-col justify-center items-center">
        <Filter languages={languages} />
        <JobsList />
      </div>
    </>
  );
}

export default App;
