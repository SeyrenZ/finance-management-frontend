import {
  CurrentBalanceCard,
  ExpensesCard,
  IncomeCard,
} from "@/components/overview/summary-card";
import React from "react";

const OverviewPage = () => {
  return (
    <div className="w-full h-full flex flex-col gap-8">
      <div className="text-3xl font-bold text-custom-grey-900">Overview</div>
      <div className="flex items-center gap-6">
        <CurrentBalanceCard />
        <IncomeCard />
        <ExpensesCard />
      </div>
    </div>
  );
};

export default OverviewPage;
