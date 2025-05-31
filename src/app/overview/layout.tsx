import React from "react";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export default async function OverviewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="bg-beige-100">
        <div className="flex flex-1 flex-col gap-4 px-10 py-6">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}
