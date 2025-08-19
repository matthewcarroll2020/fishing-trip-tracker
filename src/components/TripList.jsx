import { useEffect, useState } from "react";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "../lib/firebase";

export default function TripList({ user }) {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    if (!user) { setTrips([]); return; }
    const col = collection(db, "users", user.uid, "trips");
    const q = query(col, orderBy("date", "desc"));
    const unsub = onSnapshot(q, snap => {
      setTrips(snap.docs.map(d => ({ id: d.id, ...d.data() })));
    });
    return () => unsub();
  }, [user]);

  if (!user) return null;
  if (!trips.length) return <p className="mt-4">No trips yet, click Add trip.</p>;

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
      {trips.map(t => (
        <li key={t.id} className="rounded-2xl border p-4">
          <h3 className="text-lg font-semibold">{t.location || "Unknown spot"}</h3>
          <p className="text-sm opacity-80">{new Date(t.date).toLocaleDateString()}</p>
          <p className="mt-2 text-sm">Fish, {(t.species || []).join(", ") || "n,a"}</p>
        </li>
      ))}
    </ul>
  );
}
