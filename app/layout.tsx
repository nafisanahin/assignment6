import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";
import { PlanProvider } from "./context/PlanContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FitLog",
  description: "Workout Library and Training Log",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${oswald.variable}`}>
        <PlanProvider>{children}</PlanProvider>

        <ToastContainer position="bottom-right" autoClose={2000} theme="dark" />
      </body>
    </html>
  );
}
