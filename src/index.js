import React from 'react';
import ReactDOM from 'react-dom/client';
import './dist/css/main.css';
import './styles/theme.css';
import './styles/tailwind.css';
import App from './App';
import FleetContext from './context/FleetContext';
import SelectedCarContext from './context/SelectedCarContext';
import Popup from './context/Popup';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Popup>
      <FleetContext>
        <SelectedCarContext>
            <App />
        </SelectedCarContext>
      </FleetContext>
    </Popup>
  </React.StrictMode>
);
