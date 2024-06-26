import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import NavBar from "@/app/ui_components/NavBar";
import {fab} from "@fortawesome/free-brands-svg-icons";
import {library} from "@fortawesome/fontawesome-svg-core";
import {faArrowRight, faBoltLightning, faCheck, faSearch} from "@fortawesome/free-solid-svg-icons";
import Footer from "@/app/ui_components/Footer";
import {ThemeProvider} from "@/app/context/ThemeContext";
import ClientThemeWrapper from "@/app/context/ClientThemeWrapper";

const inter = Inter({ subsets: ["latin"] });

library.add(fab,faSearch,faBoltLightning,faCheck,faArrowRight)

export const metadata: Metadata = {
  title: "Code Chronicles",
  description: "A platform for developers to read fun stories developed by Thompson Oretan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <ThemeProvider >
          <ClientThemeWrapper>
                  <NavBar/>
                  {children}
                  <Footer/>
          </ClientThemeWrapper>
      </ThemeProvider>
      </body>
    </html>
  );
}
