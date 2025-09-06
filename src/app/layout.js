import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { CardProvider } from "@/context/card";
import { UserProvider } from "@/context/user";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Skyline Horizons",
  description: "Skyline Horizons is an Real Estate company that allows you to buy, sell, and rent properties. It also allows you to add your own property for sale or rent.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <UserProvider>
        <CardProvider>
          <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
          >
            <Navbar />
            {children}
          </body>
        </CardProvider>
      </UserProvider>
    </html>
  );
}
