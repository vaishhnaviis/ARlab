import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

const ubuntu = Outfit({ subsets: ["latin"]});

export const metadata = {
  title: "Meesho",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={ubuntu.className}>
        <Header/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}