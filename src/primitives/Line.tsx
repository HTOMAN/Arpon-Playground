import React, { memo } from 'react';

function Line() {
  return (
    <svg width="600" height="200" viewBox="0 190 600 200" xmlns="http://www.w3.org/2000/svg" version="1">
      <defs>
        <linearGradient id="e" x1="40" y1="210" x2="460" y2="290" gradientUnits="userSpaceOnUse">
          <stop stopColor="steelblue" offset="0" />
          <stop stopColor="red" offset="1" />
        </linearGradient>
      </defs>
      <line x1="40" y1="210" x2="460" y2="290" stroke="url(#e)" strokeWidth="30" />
    </svg>
  );
}

export default memo(Line);
