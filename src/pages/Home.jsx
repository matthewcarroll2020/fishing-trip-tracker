// Home page for the fishing trip tracker app

import TripList from "../components/TripList.jsx";
import { Link } from "react-router-dom";

export default function Home({ user }) {
  // If user is not logged in, prompt to sign in on Welcome page
  if (!user) return <p className="mt-6">Please sign in on the Welcome page.</p>;

  // If user is logged in, show their trips
  return (
    <section className="mt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Your trips</h2>
        <Link to="/add" className="px-3 py-2 rounded-lg bg-black text-white">Add trip</Link>
      </div>
      <TripList user={user} />
    </section>
  );
}
