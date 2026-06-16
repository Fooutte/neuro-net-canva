'use client';

import { useEffect } from 'react';

export default function NeuroCanvas() {
  useEffect(() => {
    // Ton script complet va ici
    const script = document.createElement('script');
    script.innerHTML = `
      // ─── STATE ───────────────────────────────────────────────────────────────────
      const state = {
        nodes: [],
        connections: [],
        nextId: 1,
        pan: { x: 0, y: 0 },
        zoom: 1,
        dragging: false,
        lastMouse: { x: 0, y: 0 },
        mode: 'ask',
        activeNodeId: null,
      };

      const world = document.getElementById('world');
      const svg = document.getElementById('connections');

      function applyTransform() {
        world.style.transform = \`translate(\${state.pan.x}px, \${state.pan.y}px) scale(\${state.zoom})\`;
        svg.style.transform = \`translate(\${state.pan.x}px, \${state.pan.y}px) scale(\${state.zoom})\`;
      }

      state.pan.x = window.innerWidth / 2;
      state.pan.y = window.innerHeight / 2;
      applyTransform();

      // ... (Je vais te donner tout le script complet ci-dessous)
    `;
    document.body.appendChild(script);

    return () => script.remove();
  }, []);

  return (
    <div dangerouslySetInnerHTML={{ __html: `
      <!-- Ton HTML complet ici (head sans <html> etc.) -->
    ` }} />
  );
}
