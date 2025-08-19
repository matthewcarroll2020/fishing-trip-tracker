import { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../lib/firebase";
import { useNavigate } from "react-router-dom";

export default function TripForm({ user }) {
  const nav = useNavigate();
  const [form, setForm] = useState({
    date: new Date().toISOString().slice(0,10),
    location: "",
    species: ""
  });
  const [saving, setSaving] = useState(false);

  const onChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  async function onSubmit(e) {
    e.preventDefault();
    if (!user) return;
    setSaving(true);
    try {
      const doc = {
        date: new Date(form.date).toISOString(),
        location: form.location.trim(),
        species: form.species.split(",").map(s => s.trim()).filter(Boolean),
        ownerUid: user.uid,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp()
      };
      await addDoc(collection(db, "users", user.uid, "trips"), doc);
      nav("/app");
    } finally {
      setSaving(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="max-w-xl mt-6 space-y-4">
      <div>
        <label className="block text-sm mb-1">Date</label>
        <input type="date" name="date" value={form.date} onChange={onChange} className="w-full border rounded-lg px-3 py-2" />
      </div>
      <div>
        <label className="block text-sm mb-1">Location</label>
        <input name="location" value={form.location} onChange={onChange} className="w-full border rounded-lg px-3 py-2" />
      </div>
      <div>
        <label className="block text-sm mb-1">Fish caught, comma separated</label>
        <input name="species" value={form.species} onChange={onChange} className="w-full border rounded-lg px-3 py-2" placeholder="striped bass, bluefin" />
      </div>
      <button disabled={saving} className="px-4 py-2 rounded-lg bg-black text-white">
        {saving ? "Saving..." : "Save trip"}
      </button>
    </form>
  );
}
