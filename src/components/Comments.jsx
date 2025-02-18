import React, { useRef, useState, useEffect } from "react";
import "./Comments.css";

export default function Comments() {
  const dragItem = useRef();
  const dragItemOffset = useRef();
  const containerRef = useRef();
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    const containerRect = containerRef.current.getBoundingClientRect();
    const newPositions = [];
    for (let i = 0; i < 5; i++) {
      // Generate 5 positions
      let position;
      do {
        position = {
          left: Math.random() * (containerRect.width - 200),
          top: Math.random() * (containerRect.height - 100),
          rotation: Math.random() * 20 - 10, // Random rotation between -10 and 10 degrees
        };
      } while (newPositions.some((pos) => Math.abs(pos.left - position.left) < 200 && Math.abs(pos.top - position.top) < 100));
      newPositions.push(position);
    }
    setPositions(newPositions);
  }, []);

  const handleDragStart = (e) => {
    dragItem.current = e.target.closest(".wrapper");
    dragItemOffset.current = {
      x: e.clientX - dragItem.current.getBoundingClientRect().left,
      y: e.clientY - dragItem.current.getBoundingClientRect().top,
    };
  };

  const handleDragEnd = () => {
    dragItem.current = null;
    dragItemOffset.current = null;
  };

  const handleDrag = (e) => {
    if (dragItem.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const itemRect = dragItem.current.getBoundingClientRect();
      let newLeft = e.clientX - dragItemOffset.current.x - containerRect.left;
      let newTop = e.clientY - dragItemOffset.current.y - containerRect.top;

      // Restrict movement within the container
      newLeft = Math.max(0, Math.min(newLeft, containerRect.width - itemRect.width));
      newTop = Math.max(0, Math.min(newTop, containerRect.height - itemRect.height));

      dragItem.current.style.left = `${newLeft}px`;
      dragItem.current.style.top = `${newTop}px`;
    }
  };

  return (
    <div className="comments grid lg:grid-cols-6 grid-cols-1 mx-auto p-4 gap-10 mt-32" onMouseMove={handleDrag}>
      <h1 className="text-4xl lg:col-span-2 bg-amber-100 text-center">This is what they say about us....</h1>
      <div className="container-comments lg:col-span-4 mx-auto bg-pink-300 flex items-center justify-center relative" ref={containerRef}>
        {positions.map((pos, index) => (
          <div
            key={index}
            className="wrapper hover:cursor-grab p-4 bg-white absolute"
            onMouseDown={handleDragStart}
            onMouseUp={handleDragEnd}
            style={{
              position: "absolute",
              left: `${pos.left}px`,
              top: `${pos.top}px`,
              transform: `rotate(${pos.rotation}deg)`,
              userSelect: "none", // Prevent text selection
            }}
          >
            <header className="font-bold">Draggable element {index + 1}</header>
            <p>Drag me around!</p>
          </div>
        ))}
      </div>
    </div>
  );
}
