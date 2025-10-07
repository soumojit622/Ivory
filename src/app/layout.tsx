import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const font = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ivory | Intelligent AI Voice Dental Assistant",
  description:
    "Ivory is a next-generation AI voice assistant built for modern dental practices. It simplifies patient interactions, automates routine tasks, and helps dentists deliver smarter, faster, and more personalized care.",
  keywords: [
    "Ivory",
    "AI Dental Assistant",
    "Voice Assistant",
    "Dental AI",
    "Dentist Automation",
    "Healthcare AI",
    "Dental Technology",
    "Patient Management",
  ],
  authors: [
    { name: "Soumojit Banerjee", url: "https://github.com/soumojit622" },
  ],
  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={font.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}
