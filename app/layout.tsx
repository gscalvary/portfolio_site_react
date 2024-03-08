import '@/app/ui/global.css';
import { roboto_flex } from '@/app/ui/fonts';
import type { Metadata } from "next";
import Footer from '@/app/ui/footer/footer';
import Navigation from '@/app/ui/navigation';

export const metadata: Metadata = {
  title: "Christopher Oliver's Portfolio",
  description: "A portfolio site written in React and Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto_flex.className} antialiased`}>
        <main>
          <Navigation/>
          {children}
          <Footer/>
        </main>
      </body>
    </html>
  );
}
