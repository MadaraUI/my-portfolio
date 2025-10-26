import React from "react";
import "../index.css";
export const metadata = {
  title: "Madara's Portfolio",
  description: "A stunning portfolio showcasing frontend development skills",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
