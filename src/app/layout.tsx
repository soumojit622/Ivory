import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import BackToTop from "@/components/BackToTop";

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
    <ClerkProvider
      appearance={{
        baseTheme: dark,
        variables: {
          // Primary brand color
          colorPrimary: "#1e9df2",

          // Text colors
          colorText: "#ffffff",
          colorTextSecondary: "#cbd5e1",

          // Input fields
          colorInputBackground: "#121212",
          colorInputText: "#ffffff",

          // Background
          colorBackground: "#1a1a1a",
        },
        elements: {
          button: "rounded-xl font-semibold shadow-lg",
          input:
            "rounded-lg border border-[#1e9df2] bg-[#121212] text-white placeholder:text-muted-foreground",
        },
      }}
    >
      <html lang="en" suppressHydrationWarning>
        <body className={font.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <BackToTop />
            {children}
            <Toaster richColors />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
