import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Providers } from './providers';

const korMonoRegular = localFont({
  src: './fonts/kor/PlaywriteGBS-Regular.ttf',
  variable: '--font-kor-regular',
  weight: '400',
});


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html  suppressHydrationWarning>
      <body
        className={` ${korMonoRegular.variable} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}