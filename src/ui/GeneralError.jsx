import React from 'react';
import { Link } from 'react-router-dom';

const GeneralError = ({ onSetGeneral }) => {
  return (
    <div className="fixed left-0 top-0 z-50 w-full bg-red-500 p-4 text-center text-white">
      <p className="mb-2">
        To perform this action, please
        <Link to="/registration" className="ml-1 text-lg underline">
          login or sign up{' '}
        </Link>
        first.
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
