import { Inter } from "next/font/google";
// import { Gilda_Display } from "next/font/google";
import "./globals.css";
import Footer from "../components/Footer";
import ExternalMenu from "../components/externalMenu";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jobify App",
  description: "Generate your CV with Style",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ExternalMenu />
        {children}
        <Footer />
      </body>
    </html>
  );
}
