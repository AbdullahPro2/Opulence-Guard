import React, { useState } from 'react';
import { createUser } from './UserSlice';
import { useDispatch } from 'react-redux';
import { auth } from '../../firbaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  async function handleSubmit(e) {
    e.preventDefault();
    if (password === confirmPassword && userName) {
      //   dispatch(createUser(userName, password));
      const res = await createUserWithEmailAndPassword(auth, email, password);
      if (res.user.email) {
        navigate('/registration');
      }
    }
  }
  return (
    <form
      className="flex flex-col gap-4 border-x-4 border-b-4 border-yellow-700 p-4 xs:w-[80%] sm:w-1/2 lg:w-[40%] xl:w-[30%]"
      onSubmit={(e) => handleSubmit(e)}
    >
      <div className="flex w-full flex-col ">
        <label
          htmlFor="userName"
          className="mb-2 text-base font-bold text-gray-700 md:text-xl"
        >
          Enter Your Name
        </label>
        <input
          className="rounded-md border border-gray-300 p-2"
          type="text"
          name="userName"
          required
          onChange={(e) => setUserName(e.target.value)}
          value={userName}
        />
      </div>
      <div className="flex w-full flex-col">
        <label
          htmlFor="email"
          className="mb-2 text-base font-bold text-gray-700 md:text-xl"
        >
          Email
        </label>
        <input
          className="rounded-md border border-gray-300 p-2"
          type="email"
          name="email"
          required
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </div>
      <div className="flex w-full flex-col ">
        <label
          htmlFor="password"
          className="mb-2 text-base font-bold text-gray-700 md:text-xl"
        >
          Password
        </label>
        <input
          className="rounded-md border border-gray-300 p-2"
          type="password"
          name="password"
          required
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </div>
      <div className="flex w-full flex-col ">
        <label
          htmlFor="passwordConfirm"
          className="mb-2 text-base font-bold text-gray-700 md:text-xl"
        >
          Password Confirm
        </label>
        <input
          className="rounded-md border border-gray-300 p-2"
          type="password"
          name="passwordConfirm"
          required
          onChange={(e) => setConfirmPassword(e.target.value)}
          value={confirmPassword}
        />
      </div>
      <button
        type="submit"
        className="w-full rounded-md bg-yellow-400 px-4 py-2 font-black text-black hover:bg-yellow-600 "
      >
        Sign Up
      </button>
    </form>
  );
}

export default SignUp;
