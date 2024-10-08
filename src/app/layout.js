import localFont from "next/font/local";
import "./globals.css";

export const metadata = {
  title: "CodeLearn",
  description: "CodeLearn for job task",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
