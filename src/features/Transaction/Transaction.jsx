import React, { useEffect, useRef, useState } from 'react';
import Operations from './Operations';
import { useDispatch, useSelector } from 'react-redux';
import {
  deposite,
  payLoan,
  requestLoan,
  transferToAnotherAccount,
  withdraw,
} from './TransactionSlice';

const TransactionForm = () => {
  const [btnOpen, setBtnOpen] = useState('');
  const [depositAmount, setDepositAmount] = useState(0);
  const [loanAmount, setLoanAmount] = useState('');
  const [loanReason, setLoanReason] = useState('');
  const [payLoanAmount, setPayLoan] = useState('');
  const [withdrawAmount, setWithdrawAmount] = useState('');
  const [transferAmount, setTransferAmount] = useState('');
  const dispatch = useDispatch();
  const { balance, loan } = useSelector((state) => state.account);
  const { fullName, accountNumber } = useSelector((state) => state.user);
  const formDiv = useRef();
  useEffect(() => {
    if (btnOpen !== '') {
      formDiv.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [btnOpen]);

  function handleDeposit() {
    dispatch(deposite(depositAmount));
  }
  function handleWithdraw() {
    dispatch(withdraw(withdrawAmount));
  }
  function handleLoan() {
    dispatch(requestLoan(loanAmount, loanReason));
  }
  function handleTransfer() {
    dispatch(transferToAnotherAccount(transferAmount));
  }
  function handlePayLoan() {
    dispatch(payLoan(payLoanAmount));
  }
  return (
    <div className="container mx-auto mb-6 mt-8">
      <div className="mx-2 flex flex-col rounded-lg bg-gray-200 p-8 shadow-md md:flex-row md:justify-between ">
        <h1 className="mb-2 text-xl font-bold md:text-2xl lg:text-4xl">
          Welcome, {fullName}
        </h1>
        <div>
          <p className="text-lg md:text-xl lg:text-2xl">
            <strong>Balance:</strong>
            {balance}
          </p>
          <p className="text-lg md:text-xl lg:text-2xl">
            <strong>Account Number:</strong> {accountNumber}
          </p>
          {loan > 0 && (
            <p className="text-lg md:text-xl lg:text-2xl">
              <strong>Loan:</strong> {loan}
            </p>
          )}
        </div>
      </div>
      <Operations setBtnOpen={setBtnOpen} />
      <div
        className={`mx-2 mt-8 flex flex-col gap-8 rounded-lg bg-gray-100 p-8 shadow-md md:mx-auto md:w-[85%] lg:w-[65%] xl:w-[55%] ${
          btnOpen === '' ? '  h-[300px] ' : ''
        } `}
        ref={formDiv}
      >
        {/* Deposit Form */}
        {btnOpen === 'deposit' && (
          <div className="mx-2">
            <h2 className="mb-4 text-2xl font-bold">Deposit</h2>
            <div className="mb-4">
              <label
                htmlFor="depositAmount"
                className="mb-2 block text-sm font-bold text-gray-700"
              >
                Amount
              </label>
              <input
                type="number"
                id="depositAmount"
                name="depositAmount"
                placeholder="Enter deposit amount"
                className="w-full rounded-md border border-gray-300 p-2"
                value={depositAmount}
                onChange={(e) => setDepositAmount(+e.target.value)}
              />
            </div>
            <button
              className="rounded-md bg-green-500 px-4 py-2 text-white hover:bg-green-700"
              onClick={handleDeposit}
            >
              Deposit
            </button>
          </div>
        )}

        {/* Loan Form */}
        {btnOpen === 'loan' && loan === 0 && (
          <div className="mx-2">
            <h2 className="mb-4 text-2xl font-bold">Request Loan</h2>
            <div className="mb-4">
              <label
                htmlFor="loanAmount"
                className="mb-2 block text-sm font-bold text-gray-700"
              >
                Amount
              </label>
              <input
                type="number"
                id="loanAmount"
                name="loanAmount"
                placeholder="Enter loan amount"
                className="w-full rounded-md border border-gray-300 p-2"
                value={loanAmount}
                onChange={(e) => setLoanAmount(+e.target.value)}
              />
              <label
                htmlFor="loanAmount"
                className="mb-2 block text-sm font-bold text-gray-700"
              >
                Purpose
              </label>
              <input
                type="text"
                id="loanText"
                name="loanText"
                placeholder="Briefly describe purpose of loan"
                className="w-full rounded-md border border-gray-300 p-2"
                value={loanReason}
                onChange={(e) => setLoanReason(e.target.value)}
              />
            </div>
            <button
              className="rounded-md bg-[#333] px-4 py-2 text-yellow-100"
              onClick={handleLoan}
            >
              Request Loan
            </button>
          </div>
        )}
        {/* Pay Loan Form */}
        {btnOpen === 'payLoan' && loan !== 0 && (
          <div className="mx-2">
            <h2 className="mb-4 text-2xl font-bold">Pay Loan</h2>
            <div className="mb-4">
              <label
                htmlFor="loanAmount"
                className="mb-2 block text-sm font-bold text-gray-700"
              >
                Amount
              </label>
              <input
                type="number"
                id="loanAmount"
                name="loanAmount"
                placeholder="Enter loan amount"
                className="w-full rounded-md border border-gray-300 p-2"
                value={payLoanAmount}
                onChange={(e) => setPayLoan(+e.target.value)}
              />
            </div>
            <button
              className="rounded-md bg-[#444] px-4 py-2 text-yellow-100"
              onClick={handlePayLoan}
            >
              Pay Loan
            </button>
          </div>
        )}

        {/* Withdraw Form */}
        {btnOpen === 'withdraw' && (
          <div className="mx-2">
            <h2 className="mb-4 text-2xl font-bold">Withdraw</h2>
            <div className="mb-4">
              <label
                htmlFor="withdrawAmount"
                className="mb-2 block text-sm font-bold text-gray-700"
              >
                Amount
              </label>
              <input
                type="number"
                id="withdrawAmount"
                name="withdrawAmount"
                placeholder="Enter withdrawal amount"
                className="w-full rounded-md border border-gray-300 p-2"
                value={withdrawAmount}
                onChange={(e) => setWithdrawAmount(+e.target.value)}
              />
            </div>
            <button
              className="rounded-md bg-red-500 px-4 py-2 text-white hover:bg-red-700"
              onClick={handleWithdraw}
            >
              Withdraw
            </button>
          </div>
        )}

        {/* Online Transfer Form */}
        {btnOpen === 'transfer' && (
          <div className="mx-2 mb-4">
            <h2 className="mb-4 text-2xl font-bold">Online Transfer</h2>
            <div className="mb-4">
              <label
                htmlFor="transferAmount"
                className="mb-2 block text-sm font-bold text-gray-700"
              >
                Amount
              </label>
              <input
                type="number"
                id="transferAmount"
                name="transferAmount"
                placeholder="Enter transfer amount"
                className="w-full rounded-md border border-gray-300 p-2"
                value={transferAmount}
                onChange={(e) => setTransferAmount(+e.target.value)}
              />
              <div className="mt-4 flex gap-10">
                <input
                  type="number"
                  placeholder="CVV"
                  className="w-full rounded-md border border-gray-300 p-2"
                />

                <input
                  type="number"
                  placeholder="Expire MM/YY"
                  className="w-full rounded-md border border-gray-300 p-2"
                />
              </div>
            </div>
            <div className="mb-4">
              <label
                htmlFor="receiverAccount"
                className="mb-2 block text-sm font-bold text-gray-700"
              >
                Receiver's Account Number
              </label>
              <input
                type="text"
                id="receiverAccount"
                name="receiverAccount"
                placeholder="Enter receiver's account number"
                className="w-full rounded-md border border-gray-300 p-2"
              />
            </div>
            <button
              className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-700"
              onClick={handleTransfer}
            >
              Transfer
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TransactionForm;
