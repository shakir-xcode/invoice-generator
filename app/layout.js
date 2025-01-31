
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import {
  Twitter,
  Facebook,
  Instagram,
  Github
} from "lucide-react";
import Header from "@/components/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "EasyInvoice",
  description: "Generate invoices easily",
};

export default function RootLayout({ children }) {
  // const { theme } = useTheme();
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          {/* Footer */}
          <footer className="py-12 bg-secondary/50 transition border-t ">
            <div className="container px-4 mx-auto ">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 ">
                <div>
                  <h3 className="font-bold mb-4">Company</h3>
                  <ul className="space-y-2">
                    <li><a href="#" className="hover:gradient-text transition-all">About</a></li>
                    <li><a href="#" className="hover:gradient-text transition-all">Careers</a></li>
                    <li><a href="#" className="hover:gradient-text transition-all">Press</a></li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold mb-4">Product</h3>
                  <ul className="space-y-2">
                    <li><a href="#" className="hover:gradient-text transition-all">Features</a></li>
                    <li><a href="#" className="hover:gradient-text transition-all">Pricing</a></li>
                    <li><a href="#" className="hover:gradient-text transition-all">Security</a></li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold mb-4">Resources</h3>
                  <ul className="space-y-2">
                    <li><a href="#" className="hover:text-primary hover:gradient-text transition-all">Blog</a></li>
                    <li><a href="#" className="hover:text-primary hover:gradient-text transition-all">Help Center</a></li>
                    <li><a href="#" className="hover:text-primary hover:gradient-text transition-all">Contact</a></li>
                  </ul>
                </div>
                <div className="">
                  <h3 className="font-bold mb-4">Connect</h3>
                  <div className="flex gap-4">
                    <a href="#" className="hover:text-primary"><Twitter className="h-5 w-5 hover:text-purple-700 transition" /></a>
                    <a href="#" className="hover:text-primary"><Facebook className="h-5 w-5 hover:text-purple-700 transition" /></a>
                    <a href="#" className="hover:text-primary"><Instagram className="h-5 w-5 hover:text-purple-700 transition" /></a>
                    <a href="#" className="hover:text-primary"><Github className="h-5 w-5 hover:text-purple-700 transition" /></a>
                  </div>
                </div>
              </div>
              <div className="mt-12 pt-8 border-t border-border text-center text-muted-foreground">
                <p>&copy; 2024 Invoice Generator. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
