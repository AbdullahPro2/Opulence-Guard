import React, { useState } from 'react';

const TransactionForm = () => {
  return (
    <div className="container mx-auto mt-8">
      <div className="mx-2 rounded-lg bg-gray-200 p-8 shadow-md">
        <h1 className="mb-4 text-4xl font-bold">Welcome, %NAME%</h1>
        <p className="text-lg">Balance: %BALANCE%</p>
      </div>

      <div className="mt-8 flex flex-col gap-8">
        {/* Deposit Form */}
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
            />
          </div>
          <button className="rounded-md bg-green-500 px-4 py-2 text-white hover:bg-green-700">
            Deposit
          </button>
        </div>

        {/* Loan Form */}
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
            />
          </div>
          <button className="rounded-md bg-black px-4 py-2 text-white">
            Request Loan
          </button>
        </div>

        {/* Withdraw Form */}
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
            />
          </div>
          <button className="rounded-md bg-red-500 px-4 py-2 text-white hover:bg-red-700">
            Withdraw
          </button>
        </div>

        {/* Online Transfer Form */}
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
            />
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
          <button className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-700">
            Transfer
          </button>
        </div>
      </div>
    </div>
  );
};

export default TransactionForm;
