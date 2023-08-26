import "./styles/globals.css";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";






const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AI Getting Started",
  description: "Help you setup an AI project with ease",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ClerkProvider>
        <body>{children}</body>
     
      </ClerkProvider>
    </html>
  );
}