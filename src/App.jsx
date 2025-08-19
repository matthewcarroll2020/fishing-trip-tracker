import { useEffect, useState } from "react";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import { auth, provider, signInWithPopup, signOut, onAuthStateChanged } from "./lib/firebase";
import Welcome from "./pages/Welcome.jsx";
import Home from "./pages/Home.jsx";
import TripForm from "./components/TripForm.jsx";

function Navbar({ user }) {
  return (
    <header className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
      <Link to="/" className="text-xl font-semibold">Trip Tracker</Link>
      <nav className="flex items-center gap-3">
        {user && <Link to="/add" className="px-3 py-2 rounded-lg bg-black text-white">Add trip</Link>}
        {user
          ? <button onClick={() => signOut(auth)} className="px-3 py-2 rounded-lg border">Sign out</button>
          : <button onClick={() => signInWithPopup(auth, provider)} className="px-3 py-2 rounded-lg bg-black text-white">Sign in with Google</button>}
      </nav>
    </header>
  );
}

function Protected({ user, children }) {
  if (!user) return <Navigate to="/" replace />;
  return children;
}

export default function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, setUser);
    return () => unsub();
  }, []);
  return (
    <>
      <Navbar user={user} />
      <main className="max-w-5xl mx-auto px-4 pb-16">
        <Routes>
          <Route path="/" element={<Welcome user={user} />} />
          <Route path="/app" element={<Home user={user} />} />
          <Route path="/add" element={<Protected user={user}><TripForm user={user} /></Protected>} />
        </Routes>
      </main>
    </>
  );
}