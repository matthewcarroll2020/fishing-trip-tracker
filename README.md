# CCT Fishing Trip Tracker

Fishing isn’t just about the catch, it’s about the stories, memories, and details of each trip.  
The **Fishing Trip Tracker** is a React web app built to help anglers log and manage their fishing adventures.  
Users can sign in with their Google account, add trips with location and fish caught, and revisit their fishing history anytime.

---

## Features
- **Google Authentication** with Firebase Auth  
- **Add Trips** with:
  - Date
  - Location
  - Fish caught  
- **View Saved Trips** in a clean card layout  
- **Delete Trips** instantly with a red "Remove" button  
- **Responsive UI** styled with Tailwind CSS  
- **Deployed to GitHub Pages** for quick access  

---

## Tech Stack
- [React](https://reactjs.org/) + [Vite](https://vitejs.dev/) (modern frontend tooling)  
- [Firebase](https://firebase.google.com/) (Authentication + Firestore Database)  
- [Tailwind CSS](https://tailwindcss.com/) (utility-first CSS framework)  
- [GitHub Pages](https://pages.github.com/) (deployment hosting)  

---

## Project Structure
```plaintext
src/
 ├─ components/      # Reusable UI components (TripForm, TripList)
 ├─ pages/           # App pages (Welcome, Home)
 ├─ lib/             # Firebase configuration
 ├─ App.jsx          # Main app structure
 ├─ main.jsx         # App entry point
 └─ index.css        # Tailwind global styles
```

## Future Improvements
- Add tide, moon cycle, water temperature, and weather integration
- Upload fishing photos to trips
- Share trips with friends or groups
- Advanced filtering & search by fish type, date, or location

Made by Matthew Carroll
