"use client";

import {
  CalendarDays,
  LayoutDashboard,
  Settings,
  Stethoscope,
  Users,
} from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { authClient } from "@/lib/auth-client";

import { NavUser } from "./nav-user";

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Clinics",
    url: "/clinics",
    icon: CalendarDays,
  },
  {
    title: "Doctors",
    url: "/doctors",
    icon: Stethoscope,
  },
  {
    title: "Patients",
    url: "/patients",
    icon: Users,
  },
  {
    title: "Settings",
    url: "/settings",
    icon: Settings,
  },
];

export function AppSidebar() {
  const session = authClient.useSession();
  const pathname = usePathname();

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarHeader className="border-b-1 p-4">
          <Image
            src="/clinicflow-blue-black.webp"
            alt="ClinicFlow Logo"
            width={136}
            height={28}
          />
        </SidebarHeader>
        <SidebarGroup>
          <SidebarGroupLabel>Main Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={item.url === pathname}>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        {session?.data?.user && <NavUser user={session?.data?.user} />}
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
