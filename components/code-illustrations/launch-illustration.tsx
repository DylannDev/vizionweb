import { CardStack } from "@/components/ui/card-stack";
import TerminalIllustration from "./terminal-illustration";
import WebsiteIllustration from "./website-illustration";

const cards = [
  {
    id: 1,
    content: <TerminalIllustration />,
  },
  {
    id: 2,
    content: <WebsiteIllustration />,
  },
];

export default function LaunchIllustration() {
  return (
    <section
      aria-labelledby="launch-illustration-heading"
      className="relative max-w-[350px] mx-auto h-[360px]"
    >
      <h2 id="launch-illustration-heading" className="sr-only">
        Illustration: Lancement
      </h2>

      <CardStack items={cards} />
    </section>
  );
}
