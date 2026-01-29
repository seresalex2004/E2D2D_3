import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "🌸2026.01.07🌸",
  description: "13EBC2",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="hu">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
