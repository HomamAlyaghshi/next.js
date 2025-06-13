import "./globals.css";
import { Orbitron, Rajdhani } from "next/font/google";

const orbitron = Orbitron({ subsets: ["latin"], weight: "700" });
const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head></head>
      <body className={orbitron.className}>{children}</body>
    </html>
  );
}
