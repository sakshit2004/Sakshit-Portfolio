import { createRoot } from 'react-dom/client'
import { SpeedInsights } from "@vercel/speed-insights/react"
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById("root")!).render(
  <>
    <App />
    <SpeedInsights 
      sampleRate={1} // Send all events for maximum accuracy
      debug={process.env.NODE_ENV === 'development'} // Enable debug in development
      beforeSend={(data) => {
        // You can add custom logic here to filter or modify events
        return data;
      }}
    />
  </>
);
