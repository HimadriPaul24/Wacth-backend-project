import React, { useState } from 'react';
import './VideoBanner.css'
const VideoBanner = () => {
  const [loop, setLoop] = useState(true);
  return (
    <div className="container mt-5">
      <iframe width="850" height="400" src="https://www.youtube.com/embed/NFae1EtBqts" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  );
};

export default VideoBanner;