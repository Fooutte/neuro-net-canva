'use client';

import { useEffect } from 'react';

export default function NeuroCanvas() {
  useEffect(() => {
    window.location.href = '/neuro-canvas.html';
  }, []);

  return <div style={{color: '#00ffe5', padding: '50px'}}>Chargement de NEURO//CANVAS...</div>;
}
