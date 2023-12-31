import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./components/navbar/Navbar";
const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {
  return (
    <div className="bg-pp-3-background">
      <div className="flex justify-center">
        <div className="w-[1100px] flex justiy-center flex-col">
          <>
            <Navbar />
            <body className={inter.className}>{children}</body>
          </>
        </div>
      </div>
    </div>
  );
}
