"use client";

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function LivingGrid() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Grid configuration
  // The cells need to cover a perspective plane.
  const cellSize = 80;
  // Screen max-width ~2500, max-height ~1400.
  // Rotated 60deg: 1400 / cos(60) = 2800px vertical cover needed.
  // We'll use 60 cols (4800px) x 40 rows (3200px) to safely over-render
  // and guarantee no clipping.
  const cols = 60;
  const rows = 40;
  const totalCells = cols * rows;
  
  const cellsRef = useRef<(HTMLDivElement | null)[]>([]);
  const targetsRef = useRef<Float32Array>(new Float32Array(totalCells));
  const currentRef = useRef<Float32Array>(new Float32Array(totalCells));
  const activeCellsRef = useRef<Set<number>>(new Set());
  const mouseIndexRef = useRef<number | null>(null);
  
  // Animation loop
  useEffect(() => {
    let animationFrameId: number;
    
    const render = () => {
      const targets = targetsRef.current;
      const current = currentRef.current;
      const activeCells = activeCellsRef.current;
      const cells = cellsRef.current;
      const mouseIndex = mouseIndexRef.current;
      
      // 1. Reset all targets in the active set to 0 for this frame
      activeCells.forEach(i => { targets[i] = 0; });
      
      // 2. Compute targets based on the *current* mouse position
      if (mouseIndex !== null) {
        activeCells.add(mouseIndex);
        targets[mouseIndex] = 1.0;
        
        const col = mouseIndex % cols;
        const row = Math.floor(mouseIndex / cols);
        
        // Define energy dropoff for neighboring cluster (4-8 cells)
        const neighbors = [
          { r: row - 1, c: col, e: 0.6 },
          { r: row + 1, c: col, e: 0.6 },
          { r: row, c: col - 1, e: 0.6 },
          { r: row, c: col + 1, e: 0.6 },
          // Diagonals (subtle)
          { r: row - 1, c: col - 1, e: 0.25 },
          { r: row - 1, c: col + 1, e: 0.25 },
          { r: row + 1, c: col - 1, e: 0.25 },
          { r: row + 1, c: col + 1, e: 0.25 },
        ];
        
        neighbors.forEach(n => {
          if (n.r >= 0 && n.r < rows && n.c >= 0 && n.c < cols) {
            const idx = n.r * cols + n.c;
            targets[idx] = n.e;
            activeCells.add(idx);
          }
        });
      }
      
      // 3. Step physics and update DOM natively
      activeCells.forEach(i => {
        const t = targets[i];
        let c = current[i];
        
        // Critical damping (Lerp)
        c += (t - c) * 0.12; // Adjust for fade speed
        current[i] = c;
        
        const cell = cells[i];
        if (cell) {
          // If completely faded out and no target, remove from loop to save CPU
          if (c < 0.005 && t === 0) {
            current[i] = 0;
            activeCells.delete(i);
            cell.style.backgroundColor = 'transparent';
            cell.style.borderColor = 'rgba(255, 255, 255, 0.05)';
            cell.style.boxShadow = 'none';
          } else {
            // Core cluster uses Muted Purple (#e6d2fc)
            // Outer edges transition to Muted Light Blue (#d2ebfc)
            const isCore = c > 0.4;
            const r = isCore ? 230 : 210;
            const g = isCore ? 210 : 235;
            const b = isCore ? 252 : 252;
            
            // Dynamic styling
            cell.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${c * 0.1})`;
            cell.style.borderColor = `rgba(${r}, ${g}, ${b}, ${c * 0.7 + 0.03})`;
            
            // Ensure absolutely no circular glows or radial blur
            cell.style.boxShadow = 'none';
          }
        }
      });
      
      animationFrameId = requestAnimationFrame(render);
    };
    
    render();
    return () => cancelAnimationFrame(animationFrameId);
  }, [cols, rows]);
  
  const handlePointerMove = (e: React.PointerEvent) => {
    const target = e.target as HTMLElement;
    if (target && target.dataset.index) {
      mouseIndexRef.current = parseInt(target.dataset.index, 10);
    }
  };

  const handlePointerLeave = () => {
    mouseIndexRef.current = null;
  };
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 flex items-start justify-center">
      {/* Infinite scrolling wrapper */}
      <motion.div 
        animate={{ y: [0, cellSize] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 flex justify-center"
        style={{
          width: '100%',
          height: rows * cellSize,
          transform: "perspective(1200px) rotateX(60deg) rotateZ(15deg) translateY(-200px) translateZ(-200px)",
          transformOrigin: "center top",
        }}
      >
        <div 
          className="relative grid"
          style={{
            width: cols * cellSize,
            height: rows * cellSize,
            gridTemplateColumns: `repeat(${cols}, ${cellSize}px)`,
            gridTemplateRows: `repeat(${rows}, ${cellSize}px)`,
            pointerEvents: 'auto', // Capture mouse events here
          }}
          onPointerMove={handlePointerMove}
          onPointerLeave={handlePointerLeave}
        >
          {Array.from({ length: totalCells }).map((_, i) => (
            <div 
              key={i}
              data-index={i}
              ref={el => { cellsRef.current[i] = el; }}
              style={{
                borderRight: '1px solid rgba(255, 255, 255, 0.05)',
                borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
                backgroundColor: 'transparent',
                // Avoid CSS transitions; rAF handles it for 60fps
                transition: 'none', 
                willChange: 'background-color, border-color, box-shadow'
              }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
