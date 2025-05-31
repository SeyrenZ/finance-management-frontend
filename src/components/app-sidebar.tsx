"use client";

import * as React from "react";
import { usePathname } from "next/navigation";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import Logo from "./logo";
import Link from "next/link";
import OverviewIcon from "./icons/overview-icon";
import TransactionIcon from "./icons/transaction-icon";
import BudgetsIcon from "./icons/budgets-icon";
import PotsIcon from "./icons/pots-icon";
import RecurringBills from "./icons/recurring-bills";
import MinimizeIcon from "./icons/minimize-icon";
import LogoutIcon from "./icons/logout-icon";
import { signOut } from "next-auth/react";
import ConfirmationDialog from "./confirmation-dialog";

// Main navigation items
const mainNavigation = [
  {
    title: "Overview",
    url: "/overview",
    icon: OverviewIcon,
  },
  {
    title: "Transactions",
    url: "/overview/transactions",
    icon: TransactionIcon,
  },
  {
    title: "Budgets",
    url: "/overview/budgets",
    icon: BudgetsIcon,
  },
  {
    title: "Pots",
    url: "/overview/pots",
    icon: PotsIcon,
  },
  {
    title: "Recurring Bills",
    url: "/overview/recurring-bills",
    icon: RecurringBills,
  },
];

export function AppSidebar() {
  const pathname = usePathname();
  const { toggleSidebar, open } = useSidebar();

  const handleLogout = () => {
    signOut();
  };

  return (
    <Sidebar
      collapsible="icon"
      variant="inset"
      className="bg-custom-grey-900 p-0 "
    >
      <SidebarContent className="bg-custom-grey-900 text-custom-grey-300  rounded-r-[16px] flex flex-col justify-between overflow-hidden">
        <div>
          {open ? (
            <div className="py-10">
              <Logo className="w-[121px] h-[22px] text-white ml-8 " />
            </div>
          ) : (
            <div className="w-full px-[22px] py-[27px]  text-white font-bold flex items-center justify-start rounded-[8px] text-5xl">
              f
            </div>
          )}
          <SidebarGroup className="!p-0">
            <SidebarGroupContent>
              <SidebarMenu className="gap-1">
                {mainNavigation.map((item) => {
                  const isActive = pathname === item.url;
                  return (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton
                        asChild
                        className={`group-data-[collapsible=icon]:pl-4 group-data-[collapsible=icon]:pr-10 text-base px-8 !py-4 h-fit max-w-[276px] rounded-l-none border-l-4  ${
                          isActive
                            ? "border-l-secondary-green bg-beige-100 text-custom-grey-900"
                            : "hover:border-l-secondary-green/50 border-l-transparent"
                        }`}
                      >
                        <Link
                          href={item.url}
                          className="flex items-center gap-4"
                        >
                          <item.icon
                            className={`!w-6 !h-6 ${
                              isActive ? "text-secondary-green" : ""
                            }`}
                          />
                          <span className="font-bold">{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </div>
        <div className="flex flex-col gap-2">
          <ConfirmationDialog
            title="Log out of your account?"
            onConfirm={handleLogout}
            confirmText="Yes, log out"
            description="Are you sure you want to log out? You’ll need to sign in again to access your dashboard and personal data."
          >
            <SidebarMenuButton className="text-base px-8 group-data-[collapsible=icon]:pl-5 group-data-[collapsible=icon]:pr-10 !py-4 h-fit max-h-[56px] max-w-[276px] rounded-l-none flex items-center gap-4 ">
              <LogoutIcon />
              <div className="font-bold truncate">Logout</div>
            </SidebarMenuButton>
          </ConfirmationDialog>
          <SidebarMenuButton
            onClick={toggleSidebar}
            className="text-base px-8 group-data-[collapsible=icon]:pl-5 group-data-[collapsible=icon]:pr-10 !py-4 h-fit max-h-[56px] max-w-[276px] rounded-l-none mb-20 flex items-center gap-4 "
          >
            <MinimizeIcon />
            <div className="font-bold truncate">Minimize Menu</div>
          </SidebarMenuButton>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}
