//'use client'; makes it a client side component
import "./globals.css";
import Header from "./components/Header"
import { Inter } from "next/font/google";

const inter = Inter({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Colton's Portfolio",
  description: "A home for all of my projects",
  keywords: "Javascript, web developmnet, React, Next JS, npm",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="container">
          {children}
        </main>
      </body>
    </html>
  );
}
