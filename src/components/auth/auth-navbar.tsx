import Image from "next/image";
import React from "react";

const AuthNavbar = () => {
  return (
    <div className="fixed right-0 left-0 top-0 w-full rounded-b-[8px] bg-custom-grey-900 flex items-center justify-center px-10 py-6 lg:hidden ">
      <Image src="/logo.svg" alt="Logo" width={121} height={21.76} />
    </div>
  );
};

export default AuthNavbar;
