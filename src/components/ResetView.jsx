import { useMap } from 'react-leaflet';
import L from 'leaflet';
import { useEffect, useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { createRoot } from 'react-dom/client';
import ReplayIcon from '@mui/icons-material/Replay';

const ResetView = () => {
  const map = useMap();
  const {
    selectedRegion,
    setSelectedRegion,
    zoomView,
    setZoomView,
    initialView,
    setInitialView,
  } = useContext(GlobalContext);

  useEffect(() => {
    const zoomControl = document.querySelector('.leaflet-control-zoom');
    if (!zoomControl) return;

    // Create a container for the button
    const btn = L.DomUtil.create('a', 'leaflet-control-zoom-reset', zoomControl);
    btn.href = '#';
    btn.title = 'Return to default view';

    // Match Leaflet button styling
    btn.classList.add('leaflet-control-zoom-in');
    btn.style.display = 'flex';
    btn.style.alignItems = 'center';
    btn.style.justifyContent = 'center';
    btn.style.width = '30px';
    btn.style.height = '30px';
    btn.style.fontSize = '30px';
    btn.style.cursor = 'pointer';

    // Render MUI icon inside the button
    const iconContainer = document.createElement('span');
    btn.appendChild(iconContainer);
    const root = createRoot(iconContainer);
    root.render(<ReplayIcon sx={{ fontSize: 20, color: '#000' }} />);

    // Click handler to reset map view
    btn.onclick = e => {
      e.preventDefault();
      setSelectedRegion(['All']);
      map.setView(initialView, zoomView, { animate: true });
    };

    // Cleanup
    return () => {
      if (zoomControl.contains(btn)) zoomControl.removeChild(btn);
      root.unmount();
    };
  }, [map, setSelectedRegion, setZoomView, setInitialView]);

  return null;
};

export default ResetView;
