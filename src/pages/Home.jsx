import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalContext';

export function Home() {
  const {
    darkMode,
    setDarkMode,
    markerGeo,
    setMarkerGeo,
    portugalGeo,
    setPortugalGeo,
    filterOpen,
    setFilterOpen,
    flagOpen,
    setFlagOpen,
    flag,
    setFlag,
    hoveredId,
    setHoveredId,
    region,
    setRegion,
    selectedRegion,
    setSelectedRegion,
    zoomView,
    setZoomView,
    initialView,
    setInitialView,
  } = useContext(GlobalContext);

  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/linkedin">Linkedin</Link> |{' '}
      <Link to="/notfound">Not Found</Link>
    </div>
  );
}
