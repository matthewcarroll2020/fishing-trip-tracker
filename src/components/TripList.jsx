// Trip list component for displaying user's fishing trips

import { useEffect, useState } from "react";
import { collection, query, orderBy, onSnapshot, deleteDoc, doc } from "firebase/firestore";
import { db } from "../lib/firebase";

export default function TripList({ user }) {
  // State for storing user's trips
  const [trips, setTrips] = useState([]);

  // State for tracking deletion status
  const [deletingId, setDeletingId] = useState(null);

  useEffect(() => {
    if (!user) { setTrips([]); return; }
    const col = collection(db, "users", user.uid, "trips");
    const q = query(col, orderBy("date", "desc"));
    const unsub = onSnapshot(q, snap => {
      setTrips(snap.docs.map(d => ({ id: d.id, ...d.data() })));
    });
    return () => unsub();
  }, [user]);

  // Delete function for removing a trip
  async function handleDelete(tripId) {
    if (!user) return;
    const ok = window.confirm("Remove this trip? This cannot be undone.");
    if (!ok) return;

    try {
      setDeletingId(tripId);
      await deleteDoc(doc(db, "users", user.uid, "trips", tripId));
    } catch (err) {
      console.error("Delete failed:", err);
      alert(`${err.code || "error"}\n${err.message || err}`);
    } finally {
      setDeletingId(null);
    }
  }

  // If user is not logged in, return null
  if (!user) return null;

  // If user has no trips, show a message and prompt to add one
  if (!trips.length) return <p className="mt-4">No trips yet, click Add trip.</p>;

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {trips.map(t => (
        <li key={t.id} className="card p-4 flex flex-col gap-2">
          <div>
            <h3 className="text-lg font-semibold">{t.location || "Unknown spot"}</h3>
            <p className="text-sm text-gray-500">
              {t.date ? new Date(t.date).toLocaleDateString() : "No date"}
            </p>
            <p className="mt-2 text-sm text-gray-700 dark:text-gray-200">
              <span className="font-medium">Fish:</span>{" "}
              {(t.species || []).join(", ") || "N/A"}
            </p>
          </div>

          {/* Remove Button */}
          <div className="mt-3">
            <button
              onClick={() => handleDelete(t.id)}
              disabled={deletingId === t.id}
              className="px-3 py-1 text-sm rounded-md bg-red-500 text-white hover:bg-red-600 disabled:opacity-60"
              title="Remove trip"
            >
              {deletingId === t.id ? "Removing…" : "Remove"}
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
