import React from "react";
import { ExperienceSection } from "@components/ExperienceSection";
import { LeadershipSection } from "@components/LeadershipSection";

export default function ExperiencePage() {
  return (
    <div className="pt-[72px] min-h-screen">
      <ExperienceSection />
      <LeadershipSection />
    </div>
  );
}
