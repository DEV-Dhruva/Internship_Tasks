import Header from "./components/Header";
import CardsSection from "./components/CardsSection";
import { useSelector } from "react-redux";
import LoadingSpinner from "./components/LoadingSpinner";
import FetchData from "./components/FetchData";

function App() {
  const fetchStatus = useSelector((store) => store.fetchStatus);

  return (
    <>
      <Header />
      <FetchData />
      {fetchStatus.currentlyFetching ? <LoadingSpinner /> : <CardsSection />}
    </>
  );
}

export default App;
