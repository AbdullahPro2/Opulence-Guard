import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { auth, db } from '../../firbaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { addDoc, collection } from 'firebase/firestore';

function SignUp({ setFirstTime }) {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  //   function generateBankAccountNumber(existingAccountNumbers) {
  //     // Set the maximum and minimum values for the 6-digit account number
  //     const minAccountNumber = 100000;
  //     const maxAccountNumber = 999999;
  //     let newAccountNumber;
  //     // Generate a unique 6-digit random number
  //     do {
  //       newAccountNumber = Math.floor(
  //         Math.random() * (maxAccountNumber - minAccountNumber + 1) +
  //           minAccountNumber,
  //       );
  //     } while (existingAccountNumbers.includes(newAccountNumber));
  //     // Add the new account number to the existing list
  //     existingAccountNumbers.push(newAccountNumber);

  //     return newAccountNumber;
  //   }
  async function handleSubmit(e) {
    e.preventDefault();
    if (password === confirmPassword && userName) {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      try {
        if (res.user.uid) {
          const docRef = await addDoc(collection(db, 'appUsers'), {
            UserUID: res.user.uid,
            AccountNumber: Math.floor(
              Math.random() * (99999 - 10000 + 1) + 10000,
            ),
            Balance: 0,
            FullName: userName,
            Loan: 0,
            LoanPurpose: '',
            Password: password,
          });
          if (res.user.uid) {
            console.log('yes working');
            setConfirmPassword('');
            setEmail('');
            setPassword('');
            setUserName('');
            setFirstTime(false);
            navigate('/registration');
          }
        }
      } catch (e) {
        console.error('Error adding document: ', e);
      }
    }
  }
  return (
    <form
      className="flex w-[80%] flex-col gap-4 border-x-4 border-b-4 border-yellow-700 p-4 xs:w-[80%] sm:w-1/2 lg:w-[40%] xl:w-[30%]"
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
