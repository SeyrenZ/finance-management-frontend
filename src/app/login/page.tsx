import AuthBanner from "@/components/auth/auth-banner";
import AuthNavbar from "@/components/auth/auth-navbar";
import LoginForm from "@/components/auth/login-form";
import React from "react";

const LoginPage = () => {
  return (
    <div className="mx-auto flex items-center justify-between h-full min-h-[100dvh] max-w-[1440px] w-full sm:p-10 p-4 relative">
      <AuthNavbar />
      <AuthBanner />
      <LoginForm />
    </div>
  );
};

export default LoginPage;
