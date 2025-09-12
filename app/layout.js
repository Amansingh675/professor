import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

const inter = Inter({subset: ["latin"]});


export const metadata = {
  title: "Professor🤗",
  description: "Professor is your AI career coach, designed to guide you in navigating and advancing your career.",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider appearance={{
      baseTheme: dark, 
    }}>
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className}`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {/* header */}
            <Header/>
            <main className="min-h-screen">{children}</main>
            {/* footer */}
            <footer className="bg-muted/20 w-full py-12 md:py-24 lg:py-5 bg-gradient-to-l via-blue-950">
              <div  className="w-full py-12 md:py-24 lg:py-10 bg-gradient-to-l via-blue-950 container ms-auto px-4 text-center text-gray-200 ">
                <p>Made with 💗 by Aman Singh</p>
              </div>
            </footer>
          </ThemeProvider>
      </body>
    </html>
    </ClerkProvider>
  );
}
