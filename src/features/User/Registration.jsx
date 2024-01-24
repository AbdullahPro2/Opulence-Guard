import React, { useEffect, useState } from 'react';
import SignUp from './SignUp';
import Login from './Login';

function Registration() {
  const [firstTime, setFirstTime] = useState(true);
  return (
    <div className=" flex h-[80dvh] flex-col items-center justify-center">
      <div className=" flex w-[80%] justify-between rounded-tl-lg rounded-tr-lg border-x-4 border-t-4 border-yellow-700 p-4  xs:w-[80%] sm:w-1/2 lg:w-[40%]  xl:w-[30%]">
        <button
          className={`w-1/2 p-2  ${
            firstTime ? ' bg-yellow-300' : 'bg-yellow-100 '
          }`}
          onClick={() => setFirstTime(true)}
        >
          Sign Up
        </button>
        <button
          className={`w-1/2 p-2 ${
            !firstTime ? ' bg-yellow-300' : ' bg-yellow-100'
          }`}
          onClick={() => setFirstTime(false)}
        >
          Login In
        </button>
      </div>
      {firstTime && <SignUp setFirstTime={setFirstTime} />}
      {!firstTime && <Login setFirstTime={setFirstTime} />}
    </div>
  );
}

export default Registration;
