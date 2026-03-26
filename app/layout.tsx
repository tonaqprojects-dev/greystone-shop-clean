import "./globals.css";

export const metadata = {
  title: "Greystone College Shop",
  description: "Official Greystone College merchandise",
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
