'use client';

import { useEffect } from 'react';

export default function NeuroCanvas() {
  useEffect(() => {
    // Redirige vers le fichier HTML statique
    window.location.href = '/neuro-canvas.html';
  }, []);

  return <div>Chargement de NEURO//CANVAS...</div>;
}
