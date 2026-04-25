import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hosein.dev",
  description: "developer portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-hidden">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
  if (
    localStorage.theme === 'dark' ||
    (!localStorage.theme && window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    document.documentElement.classList.add('dark')
  }
`,
          }}
        />
      </head>
      {children}
    </html>
  );
}
