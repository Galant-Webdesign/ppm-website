import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://properformancemaintenance.com.au"),
  title: {
    default: "PPM | Premium Painting and Maintenance in Sydney",
    template: "%s | PPM",
  },
  description:
    "Premium painting, finishing and maintenance services for Sydney residential, commercial and strata properties.",
  openGraph: {
    title: "PPM | Premium Painting and Maintenance in Sydney",
    description:
      "Premium painting, finishing and maintenance services for Sydney residential, commercial and strata properties.",
    url: "https://properformancemaintenance.com.au",
    siteName: "PPM - Pro Performance Maintenance",
    locale: "en_AU",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth antialiased">
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
