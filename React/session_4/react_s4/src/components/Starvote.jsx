import React, { useState } from 'react';
import { Star } from 'lucide-react'; 

const Starvote = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', fontFamily: 'sans-serif' }}>
      <h3>Rate your experience</h3>
      <div style={{ display: 'flex', gap: '5px' }}>
        {[1, 2, 3, 4, 5].map((star) => {
          
          const isHighlighted = star <= (hover || rating);
          
          return (
            <button
              key={star}
              type="button"
              onClick={() => setRating(star)}
              onMouseEnter={() => setHover(star)}
              onMouseLeave={() => setHover(0)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
                outline: 'none',
                transition: 'transform 0.1s ease',
              }}
            >
              <Star
                size={36}
                fill={isHighlighted ? '#FFB23F' : 'none'}
                stroke={isHighlighted ? '#FFB23F' : '#CBD5E1'}
                style={{
                  transform: hover === star ? 'scale(1.15)' : 'scale(1)',
                  transition: 'transform 0.1s ease',
                }}
              />
            </button>
          );
        })}
      </div>
      {rating > 0 && <p style={{ fontSize: '14px', color: '#4B5563' }}>You rated this {rating} out of 5 stars!</p>}
    </div>
  );
};

export default Starvote;
