import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async'; // Importa HelmetProvider
import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <HelmetProvider> {/* Envuelve tu aplicación con HelmetProvider */}
        <App />
    </HelmetProvider>
);