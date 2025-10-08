import Navbar from "@/components/Navbar";
import { PricingTable } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import { CrownIcon } from "lucide-react";
import { redirect } from "next/navigation";

async function ProPage() {
  const user = await currentUser();

  if (!user) redirect("/");

  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-8 pt-24">
        {/* Hero Section */}
        <div className="relative mb-12 overflow-hidden">
          {/* Background Orbs */}
          <div className="absolute -top-12 -left-12 w-44 h-44 bg-primary/20 rounded-full blur-3xl animate-pulse-slow pointer-events-none" />
          <div className="absolute -bottom-12 -right-12 w-52 h-52 bg-primary/10 rounded-full blur-2xl animate-pulse-slow pointer-events-none" />
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-10 left-1/4 w-2 h-2 bg-primary rounded-full animate-bounce-slow opacity-50" />
            <div className="absolute bottom-20 right-1/3 w-1.5 h-1.5 bg-primary rounded-full animate-bounce-slower opacity-40" />
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 bg-gradient-to-br from-primary/10 to-background/60 rounded-3xl p-8 border border-primary/20 shadow-xl hover:shadow-2xl transition-shadow duration-500">
            {/* Left Content */}
            <div className="space-y-4 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full border border-primary/20 backdrop-blur-md">
                <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
                <span className="text-sm font-medium text-primary">
                  Upgrade to Ivory Pro
                </span>
              </div>

              <div>
                <h1 className="text-4xl md:text-5xl font-extrabold mb-2 bg-gradient-to-r from-foreground to-primary/80 bg-clip-text text-transparent">
                  Unlock Premium AI Care with Ivory
                </h1>
                <p className="text-muted-foreground text-lg md:text-xl max-w-md leading-relaxed">
                  Unlimited AI consultations, advanced features, and priority
                  support for your dental health.
                </p>
              </div>
            </div>

            {/* Right Crown Icon */}
            <div className="hidden lg:flex items-center justify-center w-36 h-36 bg-gradient-to-br from-primary/25 to-primary/10 rounded-full shadow-lg hover:shadow-2xl transition-shadow duration-500 animate-fadeIn">
              <CrownIcon className="w-16 h-16 text-primary" />
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              Choose Your Ivory Plan
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg md:text-xl">
              Pick the best plan for your dental care. All Ivory plans include
              secure access and encryption.
            </p>
          </div>

          {/* Clerk PricingTable */}
          <div className="flex justify-center">
            <PricingTable />
          </div>
        </div>
      </div>
    </>
  );
}

export default ProPage;
