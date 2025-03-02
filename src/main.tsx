import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        lerp: 2
      }}
    >
      <App />
    </LocomotiveScrollProvider>
  </React.StrictMode>,
)
