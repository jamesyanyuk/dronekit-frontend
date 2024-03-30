import { LogoMark } from "@/icons/LogoMark";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
    <main className="flex min-h-dvh flex-col font-mono text-[13px] text-neutral-400">
      <div className="m-auto">
        <LogoMark className="size-10 flex-none" />
        <p className="mt-1.5 w-full min-w-64">modular drone platform</p>
        <code className="mt-6 block whitespace-pre-line rounded-lg bg-neutral-800 p-4 ring-1 ring-neutral-700">
          <TypeAnimation
            sequence={[
              "# vertically integrated",
              1000,
              "# software & hardware",
              1000,
              "# plug & play",
              1000,
              "# made in the usa",
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </code>
      </div>

      <footer className="bottom-0 inline-flex w-full flex-none p-6 text-neutral-400">
        <span>(c) {new Date().getFullYear()} DroneKit</span>
        <a
          href="https://discord.gg/nkzPH2bnRB"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-auto no-underline hover:text-white"
        >
          discord
        </a>
      </footer>
    </main>
  );
}
