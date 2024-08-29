import "./globals.css";
import Navbar from "@/ui/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
      <Navbar />
      {children}
      </body>
    </html>
  );
}

