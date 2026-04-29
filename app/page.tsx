import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { ProjectsOverview } from "@/components/projects-overview"
import { HeorthFeature } from "@/components/heorth-feature"
import { KithLedgerFeature } from "@/components/kithledger-feature"
import { PhilosophySection } from "@/components/philosophy-section"
import { CommunitySection } from "@/components/community-section"
import { SiteFooter } from "@/components/site-footer"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <HeroSection />
      <ProjectsOverview />
      <HeorthFeature />
      <KithLedgerFeature />
      <PhilosophySection />
      <CommunitySection />
      <SiteFooter />
    </main>
  )
}
