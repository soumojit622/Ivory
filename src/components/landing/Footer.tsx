import Image from "next/image";
import { Github, Linkedin, Twitter, Instagram } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative px-6 py-16 bg-gradient-to-t from-muted/5 via-background to-muted/10 border-t border-muted/30 overflow-x-hidden">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* Brand + Socials */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.svg"
                alt="Ivory Logo"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <span className="font-bold text-lg text-foreground">Ivory</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              AI-powered dental assistance designed to simplify your oral care.
            </p>
            <div className="flex items-center gap-4 mt-2">
              {[Github, Linkedin, Twitter, Instagram].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  aria-label={`Ivory ${Icon.name}`}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground uppercase tracking-wide text-sm">
              Product
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {["How it works", "Pricing", "FAQ", "Features", "AI Plans"].map(
                (item, idx) => (
                  <li key={idx}>
                    <a
                      href="#"
                      className="hover:text-primary transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground uppercase tracking-wide text-sm">
              Support
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {[
                "Help Center",
                "Contact Us",
                "Status",
                "Live Chat",
                "Documentation",
              ].map((item, idx) => (
                <li key={idx}>
                  <a href="#" className="hover:text-primary transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground uppercase tracking-wide text-sm">
              Legal
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {[
                "Privacy Policy",
                "Terms of Service",
                "Security",
                "Compliance",
              ].map((item, idx) => (
                <li key={idx}>
                  <a href="#" className="hover:text-primary transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="font-semibold mb-2 text-foreground uppercase tracking-wide text-sm">
              Stay Updated
            </h4>
            <p className="text-sm text-muted-foreground max-w-xs">
              Subscribe to our newsletter to get the latest AI dental tips and
              updates.
            </p>
            <form className="flex flex-col sm:flex-row gap-2 w-full">
              <Input
                type="email"
                placeholder="Your email"
                className="flex-1 min-w-0"
              />
              <Button type="submit" className="sm:w-auto w-full">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-muted/30 pt-6 text-center text-sm text-muted-foreground space-y-2">
          <p>
            &copy; {currentYear}{" "}
            <span className="font-semibold text-foreground">Ivory</span>. Built
            for real people with real dental questions.
          </p>
          <p className="text-xs text-muted-foreground">
            Designed & developed with <span className="text-red-500">❤️</span>{" "}
            by Ivory Team
          </p>
          <p className="text-xs text-muted-foreground">
            Follow us on social media for updates, tips, and dental insights.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
