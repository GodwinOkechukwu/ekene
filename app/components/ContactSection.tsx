import { ArrowUpRight, Mail, MessageCircle } from "lucide-react";
import Reveal from "./motion/Reveal";
import ButtonLink from "./ui/ButtonLink";
import Section from "./ui/Section";
import SectionHeader from "./ui/SectionHeader";
import { profile, whatsappUrl } from "../data/profile";

export default function ContactSection() {
  return (
    <Section id="contact">
      <SectionHeader
        index="05"
        label="Contact"
        title={
          <>
            Let&apos;s create something{" "}
            <span className="text-gradient">impactful.</span>
          </>
        }
        description="I'm open to new opportunities, collaborations and interesting problems. If you have something in mind, let's talk."
      />

      <Reveal delay={0.2} className="flex flex-wrap gap-3">
        <ButtonLink href={whatsappUrl}>
          <MessageCircle className="h-4 w-4" aria-hidden="true" />
          Chat on WhatsApp
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </ButtonLink>
        <ButtonLink href={`mailto:${profile.email}`} variant="ghost">
          <Mail className="h-4 w-4" aria-hidden="true" />
          {profile.email}
        </ButtonLink>
      </Reveal>
    </Section>
  );
}
