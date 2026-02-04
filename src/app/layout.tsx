import type {
  Metadata
} from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AD Podlahy",
  description: "Specializujeme se na dovoz a čerpání betonových směsí včetně realizace litých podlah.",
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
