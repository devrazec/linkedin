import React, { createContext, useState } from 'react';
import portugalJson from '../data/portugal.json';
import markersJson from '../data/markers.json';

export const GlobalContext = createContext();

const GlobalProvider = props => {
  const [darkMode, setDarkMode] = useState(false);
  const [markerGeo, setMarkerGeo] = useState(markersJson);
  const [portugalGeo, setPortugalGeo] = useState(portugalJson);
  const [filterOpen, setFilterOpen] = useState(false);
  const [flagOpen, setFlagOpen] = useState(false);
  const [flag, setFlag] = useState('us');
  const [hoveredId, setHoveredId] = useState(null);
  const [region, setRegion] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState(['All']);
  const [zoomView, setZoomView] = useState(7);
  const [initialView, setInitialView] = useState([39.3999, -8.2245]);

  return (
    <GlobalContext.Provider
      value={{
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
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default React.memo(GlobalProvider);
