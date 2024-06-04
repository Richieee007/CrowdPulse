import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { 
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton


 } from "@clerk/nextjs";

const poppins = Poppins({
  
  subsets: ["latin"],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins'


});

export const metadata: Metadata = {
  title: "CrowdPulse",
  description: "Event Management platform for all your wonderful events",
  icons: {

    icon: '/assets/images/logo.svg' 
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <ClerkProvider>
      
      <html lang="en">
      <body className={poppins.variable}>
        
        {children}
        </body>
    </html>
    </ClerkProvider>
    
  );
}
