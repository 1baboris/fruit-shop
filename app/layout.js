import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Header from "./Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Fruit Shop",
  description: "Hyperinflated fruit store - best prices 2024",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
          integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body
        className={"min-h-screen flex flex-col relative " + inter.className}
      >
        <Header />
        <div className="flex-1">{children}</div>
        <footer className="flex items-center flex-wrap justify-center border-t border-solid border-slate-300 p-4 md:p-8">
          <Link href={"https://www.instagram.com"} target="_blank">
            <i
              className="text-slate-700 hover:text-slate-500 cursor-pointer text-2xl sm:text-3xl 
          md:text-4xl fa-brands fa-instagram"
            ></i>
          </Link>
        </footer>
        <div id="portal"></div>
      </body>
    </html>
  );
}
