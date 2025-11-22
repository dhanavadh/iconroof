"use client";

import { Analytics } from "@vercel/analytics/react";
import NewNavbar from "./components/NewNavBar";
import NewFooter from "./components/NewFooter";
import CookieAlert from "./components/CookieAlert";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NewNavbar />
      {children}
      <CookieAlert />
      <Analytics />
      <NewFooter />
    </>
  );
}
