import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { PageTransition } from "./PageTransition";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground overflow-x-hidden">
      <Header />
      <main id="main-content" className="flex-1" tabIndex={-1}>
        <PageTransition>{children}</PageTransition>
      </main>
      <Footer />
    </div>
  );
}
