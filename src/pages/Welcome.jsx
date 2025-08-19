import { auth, provider, signInWithPopup } from "../lib/firebase";
import { Navigate } from "react-router-dom";

export default function Welcome({ user }) {
  if (user) return <Navigate to="/app" replace />;
  return (
    <section className="max-w-xl mx-auto mt-12 text-center">
      <h1 className="text-3xl font-semibold">Welcome to Trip Tracker</h1>
      <p className="mt-2 opacity-80">Sign in to save and view your fishing trips.</p>
      <button
        onClick={() => signInWithPopup(auth, provider)}
        className="mt-6 px-4 py-2 rounded-lg bg-black text-white"
      >
        Sign in with Google
      </button>
    </section>
  );
}
