import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Github User Finder",
  description: "Github User Search",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link
        rel="icon"
        href="https://res.cloudinary.com/dmbxx03vp/image/upload/v1728185392/unnamed_xczili.png"
        type="image/svg+xml"
      />
      <link
        rel="apple-touch-icon"
        href="https://res.cloudinary.com/dmbxx03vp/image/upload/v1728154275/Logo_lnr4mv.png"
      />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
