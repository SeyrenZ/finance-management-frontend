import AuthBanner from "@/components/auth/auth-banner";
import LoginForm from "@/components/auth/login-form";
import React from "react";

const LoginPage = () => {
  return (
    <div className="mx-auto flex items-center justify-between h-full min-h-[100dvh] max-w-[1440px] w-full sm:p-10">
      <AuthBanner />

      <LoginForm />
    </div>
  );
};

export default LoginPage;
