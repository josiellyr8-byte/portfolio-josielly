import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ReactNode } from "react";

export const metadata = {
  title: "Portfólio - Josielly Rayssa",
  description: "Portfólio desenvolvido com Next.js e integração de API",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-br">
      <body>

        <div className="binary-bg binary-left">
          <div className="binary-column">
            {`
HTML
01010101
CSS
10101010
JavaScript
00110011
React
11100011
Next.js
01010101
GitHub
10101010
API
00110011
HTML
01010101
CSS
10101010
React
11100011
`}
          </div>
        </div>

        <div className="binary-bg binary-right">
          <div className="binary-column">
            {`
Next.js
10101010
Git
01010101
HTML
11100011
CSS
00110011
JavaScript
10101010
React
01010101
API
11100011
GitHub
00110011
Next.js
10101010
`}
          </div>
        </div>

        <Navbar />
        {children}
        <Footer />

      </body>
    </html>
  );
}