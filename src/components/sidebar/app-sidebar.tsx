import { MonitorSmartphone, Search, Settings, Shirt, ShoppingCart } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import LoggedOutButton from "./logged_out_button";

// Menu items.
const items = [
  {
    title: "Men",
    url: "#",
    icon: Shirt,
  },
  {
    title: "Women",
    url: "#",
    icon: Shirt,
  },
  {
    title: "Devices",
    url: "#",
    icon: MonitorSmartphone,
  },
  {
    title: "Cart",
    url: "#",
    icon: ShoppingCart,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Test EC site</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
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
      <SidebarFooter className=" py-5 px-3 flex justify-center items-center">
        <LoggedOutButton />
      </SidebarFooter>
    </Sidebar>
  );
}
