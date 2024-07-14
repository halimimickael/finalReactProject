import { createContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const AppContext = createContext(null);

export default function ContextProvider({ children }) {
  const [worker_ar, setWorkerAr] = useState([]);
  const [worker_Favorites_ar, setWorkerFavoritesAr] = useState(() => {
    const storedFavorites = localStorage.getItem("worker_Favorites_ar");
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });
  const [seed, setSeed] = useState("");
  const [searchTerm, setSearchTerm] = useState('');
  const { query } = useParams();

  useEffect(() => {
    const fetchWorkers = async () => {
      try {
        const response = await fetch(`https://randomuser.me/api/?results=50&seed=${seed === "" ? "abc" : seed}`);
        const data = await response.json();
        const workers = data.results;
        setWorkerAr(workers);
        localStorage.setItem("worker_ar", JSON.stringify(workers));
      } catch (error) {
        console.error("Error retrieving data :", error);
      }
    };

    fetchWorkers();
  }, [query, seed]);

  useEffect(() => {
    localStorage.setItem("worker_Favorites_ar", JSON.stringify(worker_Favorites_ar));
  }, [worker_Favorites_ar]);


  const globalVal = {
    setWorkerFavoritesAr,
    worker_Favorites_ar,
    worker_ar,
    setSeed,
    seed,
    setSearchTerm,
    searchTerm,
    query,
  };

  return (
    <AppContext.Provider value={globalVal}>
      {children}
    </AppContext.Provider>
  );
}
