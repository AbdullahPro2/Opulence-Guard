import React from 'react';

function GuidanceItem({ image, heading, para, btnText }) {
  return (
    <div className="mx-auto my-8 ">
      <img src={image} alt="Guiandce" />
      <div>
        <h1>{heading}</h1>
        <p>{para}</p>
        <button>{btnText}</button>
      </div>
    </div>
  );
}

export default GuidanceItem;
