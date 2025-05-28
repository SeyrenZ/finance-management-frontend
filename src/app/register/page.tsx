import AuthBanner from "@/components/auth/auth-banner";
import RegisterForm from "@/components/auth/registration-form";
import React from "react";

const RegisterPage = () => {
  return (
    <div className="mx-auto flex items-center justify-between h-full min-h-[100dvh] max-w-[1440px] w-full sm:p-10">
      <AuthBanner />
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;
