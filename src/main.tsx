import { createRoot } from 'react-dom/client'
import { SpeedInsights } from "@vercel/speed-insights/react"
import { Analytics } from "@vercel/analytics/react"
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById("root")!).render(
  <>
    <App />
    <SpeedInsights 
      sampleRate={1}
      debug={true} // Force debug mode to see what's happening
      beforeSend={(data) => {
        console.log('Speed Insights Event:', data); // Log events to console
        return data;
      }}
    />
    <Analytics />
  </>
);
