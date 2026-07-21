import { lazy, Suspense } from "react";

import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Loader from "./components/Loader";

const Watchlist = lazy(() => import("./pages/Watchlist"));

function App() {
  return (
    <>

{/*  https://movies-8b84e.web.app */}

      <Navbar />

      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Watchlist />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;