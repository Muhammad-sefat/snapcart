"use client";

import ResponsiveNavbar from "@/components/Navbar";
import ResponsiveFooter from "@/components/Footer";
import { ReduxProvider } from "@/lib/redux/provider";
import { Toaster } from "react-hot-toast";

export default function LayoutWrapper({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <ResponsiveNavbar />
      <ReduxProvider>
        <main className="flex-1">{children}</main>
      </ReduxProvider>
      <Toaster position="top-center" reverseOrder={false} />
      <ResponsiveFooter />
    </div>
  );
}
