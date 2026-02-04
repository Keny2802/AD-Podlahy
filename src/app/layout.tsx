import type {
  Metadata
} from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AD Podlahy | Adam Šimara",
  description: "Specializujeme se na dovoz a čerpání betonových směsí včetně realizace litých podlah.",
  icons: {
    icon: [
      {
        url: "/fota/logo/logo.png",
        sizes: "32x32",
        type: "image/png"
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        {children}
      </body>
    </html>
  );
}
