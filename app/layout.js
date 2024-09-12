import { Inter } from "next/font/google";
// import { Gilda_Display } from "next/font/google";
import "./globals.css";
import { getServerSession } from "next-auth";
import SessionProvider from "../utils/SessionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jobify App",
  description: "Generate your CV in Style",
};

export default function RootLayout({ children }) {
  const session = getServerSession();
  return (
    <html lang="en">
      <SessionProvider session={session}>
        <body className={`${inter.className} antialiased`}>{children}</body>
      </SessionProvider>
    </html>
  );
}
