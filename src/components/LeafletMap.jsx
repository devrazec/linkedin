import React, { useEffect, useState, useContext } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-draw/dist/leaflet.draw.css';

import ResetView from './ResetView';
import ShowMyLocation from './ShowMyLocation';
import MaskLayer from './MaskLayer';

import { GlobalContext } from '../context/GlobalContext';

import L from 'leaflet';

const LeafletMap = () => {
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
    <MapContainer
      center={initialView}
      zoom={zoomView}
      scrollWheelZoom={true}
      zoomControl={true}
      style={{
        height: '100%',
        width: '100%',
      }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {/* Controls */}
      <ResetView />
      <ShowMyLocation />
      <MaskLayer />
    </MapContainer>
  );
};

export default React.memo(LeafletMap);
