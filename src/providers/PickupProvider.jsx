import { useState, useEffect } from "react";
import PickupContext from "../contexts/PickupContext";

function PickupProvider({ children }) {
  const [pickups, setPickups] = useState([]);

  useEffect(() => {
    fetchPickups();
  }, []);

  async function fetchPickups() {
    try {
      const r = await fetch(`http://127.0.0.1:5000/pickups`);
      if (!r.ok) throw new Error("💥 Error");
      const data = await r.json();
      setPickups(data);
    } catch (error) {
      console.error("❌ Caught error:", error);
    }
  }

  async function handleNewPickup(obj) {
    try {
      const r = await fetch(`http://127.0.0.1:5000/pickups`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(obj)
      });
      if (!r.ok) throw new Error("💥 Error");
      const data = await r.json();
      setPickups([...pickups, data]);
    } catch (error) {
      console.error("❌ Caught error:", error);
    }
  }

  async function handleDeletePickup(pickupId) {
    try {
      const r = await fetch(`http://127.0.0.1:5000/pickups/${pickupId}`, {
        method: "DELETE"
      });
      if (!r.ok) throw new Error("💥 Error");
      const data = await r.json();
      const deleted = pickups.filter(p => p.pickupId !== data.pickupId);
      setPickups(deleted);
    } catch (error) {
      console.error("❌ Caught error:", error);
    }
  }

  async function handleUpdatePickup(obj) {
    try {
      const r = await fetch(`http://127.0.0.1:5000/pickups/${obj.pickupId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(obj)
      });
      if (!r.ok) throw new Error("💥 Error");
      const data = await r.json();
      const updated = pickups.map(p =>
        p.pickupId === data.pickupId ? data : p
      );
      setPickups(updated);
    } catch (error) {
      console.error("❌ Caught error:", error);
    }
  }

  return (
    <PickupContext.Provider
      value={{
        pickups,
        handleNewPickup,
        handleDeletePickup,
        handleUpdatePickup
      }}
    >
      {children}
    </PickupContext.Provider>
  );
}

export default PickupProvider;
