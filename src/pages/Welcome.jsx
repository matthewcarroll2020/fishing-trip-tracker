// Welcome page for unauthenticated users

import { auth, provider, signInWithPopup } from "../lib/firebase";
import { Navigate } from "react-router-dom";

export default function Welcome({ user }) {
  // If the user is authenticated, redirect to the app
  if (user) return <Navigate to="/app" replace />;
  return (
    <section className="max-w-xl mx-auto mt-12 text-center">
      <main className="container-app py-16 text-center">
        <h1 className="section-title mb-6">CarrollCustomTackle - Fishing Trip Tracker</h1>
      </main>
      <p className="mt-2 opacity-80">Sign in to save and view your fishing trips.</p>
    </section>
  );
}
