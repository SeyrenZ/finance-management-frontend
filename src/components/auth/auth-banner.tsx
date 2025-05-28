import Image from "next/image";
import React from "react";

const AuthBanner = () => {
  return (
    <div className="h-full max-w-[920px] max-h-[560px]">
      <Image src="/auth-illustration.svg" alt="" width={560} height={620} />
    </div>
  );
};

export default AuthBanner;
