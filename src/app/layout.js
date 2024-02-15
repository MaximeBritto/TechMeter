import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "TechMeter",
  description: "Auto-évalution",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <header>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </header> */}
      <body className={inter.className}>{children}</body>

    </html>
  );
}
