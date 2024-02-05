// import React from 'react';


// const Services = () => {
//   return (
//     <ul className="styled-list">
//     <li className="first">First Item</li>
//     <li className="second">Second Item</li>
//     <li className="third">Third Item</li>
//     </ul>
//   );
// };

// export default Services;

import React, { useState } from 'react';

const Services = () => {
  const [showBox, setShowBox] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setShowBox(true);
    setSelectedItem(item);
  };

  const closeBox = () => {
    setShowBox(false);
    setSelectedItem(null);
  };

  return (
    <div style={{display: "flex", justifyContent: "space-between"}}>
      <ul className="styled-list">
        <li className="first" onClick={() => handleItemClick('First Item')}>
          First Item
        </li>
        <li className="second" onClick={() => handleItemClick('Second Item')}>
          Second Item
        </li>
        <li className="third" onClick={() => handleItemClick('Third Item')}>
          Third Item
        </li>
      </ul>

      {showBox && (
        <div className="info-box">
          <p>{selectedItem}</p>
          <button onClick={closeBox}>Close</button>
        </div>
      )}
    </div>
  );
};

export default Services;




