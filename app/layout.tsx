export const metadata = {
  title: "Al Hoourr Furniture",
  description: "Luxury modern furniture. Website by AV Team.",
};

import "./../styles/globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="bn">
      <body className="min-h-screen bg-gradient-to-b from-white via-white to-amber-50/40 text-neutral-900 antialiased">
        {children}
      </body>
    </html>
  );
}
