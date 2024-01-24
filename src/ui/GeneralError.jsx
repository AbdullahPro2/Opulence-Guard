import React from 'react';
import { Link } from 'react-router-dom';

const GeneralError = ({
  onSetGeneral,
  text_1,
  text_2,
  text_3,
  onSetFirstTime,
}) => {
  return (
    <div className="fixed left-0 top-0 z-50 w-full bg-red-500 p-4 text-center text-white">
      <p className="mb-2">
        {text_1}
        <Link
          onClick={() => {
            if (onSetFirstTime) {
              onSetFirstTime(true);
            }
          }}
          to="/Opulence-Guard/registration"
          className="ml-1 text-lg underline"
        >
          {text_2}
        </Link>{' '}
        {text_3}
      </p>
      <p
        className="absolute right-5 top-0 cursor-pointer text-lg"
        onClick={() => onSetGeneral(false)}
      >
        X
      </p>
    </div>
  );
};

export default GeneralError;
