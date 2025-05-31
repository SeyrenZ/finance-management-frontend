"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "loading") {
      // Still loading, don't redirect yet
      return;
    }

    if (session) {
      // User is logged in, redirect to overview
      router.push("/overview");
    } else {
      // User is not logged in, redirect to login
      router.push("/login");
    }
  }, [session, status, router]);

  return null;
}
