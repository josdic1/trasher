import { useState, useEffect } from "react";
import HouseContext from "../contexts/HouseContext";

function HouseProvider({ children }) {
  const [houses, setHouses] = useState([]);
  const [selectedHouse, setSelectedHouse] = useState({
    houseId: "",
    address: "",
    score: ""
  });

  useEffect(() => {
    fetchHouses();
  }, []);

  async function fetchHouses() {
    try {
      const r = await fetch(`http://127.0.0.1:5000/houses`);
      if (!r.ok) throw new Error("💥 Error");
      const data = await r.json();
      setHouses(data);
    } catch (error) {
      console.error("❌ Caught error:", error);
    }
  }

  async function handleNewHouse(obj) {
    try {
      const r = await fetch(`http://127.0.0.1:5000/houses`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(obj)
      });
      if (!r.ok) throw new Error("💥 Error");
      const data = await r.json();
      setHouses([...houses, data]);
    } catch (error) {
      console.error("❌ Caught error:", error);
    }
  }

  async function handleDeleteHouse(houseId) {
    try {
      const r = await fetch(`http://127.0.0.1:5000/houses/${houseId}`, {
        method: "DELETE"
      });
      if (!r.ok) throw new Error("💥 Error");
      const data = await r.json();
      const deleted = houses.filter(h => h.houseId !== data.houseId);
      setHouses(deleted);
    } catch (error) {
      console.error("❌ Caught error:", error);
    }
  }

  async function handleUpdateHouse(obj) {
    try {
      const r = await fetch(`http://127.0.0.1:5000/houses/${obj.houseId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(obj)
      });
      if (!r.ok) throw new Error("💥 Error");
      const data = await r.json();
      const updated = houses.map(h =>
        h.houseId === data.houseId ? data : h
      );
      setHouses(updated);
    } catch (error) {
      console.error("❌ Caught error:", error);
    }
  }

  return (
    <HouseContext.Provider
      value={{
        houses,
        selectedHouse,
        setSelectedHouse,
        handleNewHouse,
        handleDeleteHouse,
        handleUpdateHouse
      }}
    >
      {children}
    </HouseContext.Provider>
  );
}

export default HouseProvider;
