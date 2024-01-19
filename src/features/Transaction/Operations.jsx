import React from 'react';
import { useSelector } from 'react-redux';

function Operations({ setBtnOpen }) {
  const { loan } = useSelector((state) => state.account);
  return (
    <div className="mx-2">
      <h2 className="my-4 text-center text-lg font-bold md:text-2xl">
        What Opperation Do You Want To Perfom?
      </h2>
      <div className="flex flex-col gap-2 md:flex-row md:justify-center">
        <button
          className="rounded-md bg-green-400 px-4 py-2 text-black hover:bg-green-600"
          onClick={() => setBtnOpen('deposit')}
        >
          Deposit &#9660;
        </button>
        {loan > 0 ? (
          <button
            className="rounded-md bg-[#333] px-4 py-2  text-yellow-100 hover:bg-[#111]"
            onClick={() => setBtnOpen('payLoan')}
          >
            Pay Loan💰
          </button>
        ) : (
          <button
            className="rounded-md bg-[#333] px-4 py-2  text-yellow-100 hover:bg-[#111]"
            onClick={() => setBtnOpen('loan')}
          >
            Request Loan 💰
          </button>
        )}
        <button
          className="rounded-md bg-red-400 px-4 py-2 text-black hover:bg-red-600"
          onClick={() => setBtnOpen('withdraw')}
        >
          Withdraw &#9650;
        </button>
        <button
          className="rounded-md bg-blue-400 px-4 py-2 text-black hover:bg-blue-600"
          onClick={() => setBtnOpen('transfer')}
        >
          Online Transfer 📤
        </button>
      </div>
    </div>
  );
}

export default Operations;
