import Image from "next/image";
import React from "react";

const AuthBanner = () => {
  return (
    <div className="w-full max-w-[560px] h-[920px] flex p-10 relative bg-[url('/auth-illustration.svg')] bg-cover bg-center bg-no-repeat rounded-2xl">
      <div className="w-full flex flex-col items-start justify-between">
        <Image src="/logo.svg" alt="Logo" width={150} height={50} />
        <div className="space-y-6">
          <div className="text-3xl text-background font-bold">
            Keep track of your money and save for your future
          </div>
          <div className="text-sm text-background ">
            Personal finance app puts you in control of your spending. Track
            transactions, set budgets, and add to savings pots easily.
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthBanner;
