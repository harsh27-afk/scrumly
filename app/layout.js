
import { ThemeProvider } from "@/components/ui/theme-provider";
import "./globals.css";
import {Inter} from 'next/font/google'
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/header";
import { shadesOfPurple } from "@clerk/themes";


const inter=Inter({subsets:["latin"] } )

export const metadata = {
  title: "scrumly",
  description: "Prjoct management app",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
    appearance={{
      baseTheme:shadesOfPurple
    }}
    >
    <html lang="en">
      <body
        className={`${inter.className}`}
      >
       
        <ThemeProvider attribute="class" defaultTheme="dark">
           <Header/>
           <main className="min-h-screen">{children}</main>
           <div className="container mx-auto px-4 text-center text-gray-200">
           <footer className="bg-gray-900 py-12 ">
             <p>Made by harsh</p>
           </footer>
           </div>
        
        </ThemeProvider>
        
      </body>
    </html>
    </ClerkProvider>
  );
}
