import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { auth, db } from '../../firbaseConfig';
import { useNavigate } from 'react-router-dom';
import {
  collection,
  doc,
  getDoc,
  onSnapshot,
  query,
  where,
} from 'firebase/firestore';
import { useDispatch } from 'react-redux';
import { createUser } from './UserSlice';
import { deposite, requestLoan } from '../Transaction/TransactionSlice';

function LoginForm() {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  async function handleSubmit(e) {
    e.preventDefault();
    const res = await signInWithEmailAndPassword(auth, email, password);
    const itemsRef = collection(db, 'appUsers');
    if (res.user.uid) {
      const queryItems = query(itemsRef, where('UserUID', '==', res.user.uid));
      const unsubscribe = onSnapshot(queryItems, (snapShot) => {
        console.log(snapShot.docs[0].data());
        dispatch(
          createUser(
            snapShot.docs[0].data().FullName,
            res.user.uid,
            snapShot.docs[0].data().AccountNumber,
          ),
        );
        dispatch(deposite(snapShot.docs[0].data().Balance));
        dispatch(
          requestLoan(
            snapShot.docs[0].data().Loan,
            snapShot.docs[0].data().LoanPurpose,
            snapShot.docs[0].data().Balance,
          ),
        );
      });
    }
    navigate('/app');
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
      <div className="flex w-full flex-col ">
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
      <div className="flex w-full flex-col">
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
      <button
        className="w-full rounded-md bg-yellow-400 px-4 py-2 font-black text-black hover:bg-yellow-600 "
        type="submit"
      >
        Login
      </button>
    </form>
  );
}
export default LoginForm;
