import React from "react";

export const CurrentBalanceCard = () => {
  return (
    <div className="w-full p-6 bg-custom-grey-900 flex flex-col gap-3 rounded-[12px]">
      <div className="text-sm text-white">Current Balance</div>
      <div className="text-3xl font-bold text-white">$4,836.00</div>
    </div>
  );
};

export const IncomeCard = () => {
  return (
    <div className="w-full p-6 bg-white flex flex-col gap-3 rounded-[12px]">
      <div className="text-sm text-custom-grey-500">Current Balance</div>
      <div className="text-3xl font-bold text-custom-grey-900">$3,814.25</div>
    </div>
  );
};
export const ExpensesCard = () => {
  return (
    <div className="w-full p-6 bg-white flex flex-col gap-3 rounded-[12px]">
      <div className="text-sm text-custom-grey-500">Current Balance</div>
      <div className="text-3xl font-bold text-custom-grey-900">$1,700.50</div>
    </div>
  );
};
