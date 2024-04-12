import { DroneKitPlatform } from "@/icons/DroneKitPlatform";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
    <main className="flex min-h-dvh flex-col text-base text-neutral-400">
      <div className="m-auto p-6">
        <DroneKitPlatform className="flex h-6 text-white" />
        <p className="mt-6 w-full min-w-64 font-alliance-two">
          Vertically-integrated, modular, and open-source drone ecosystem.
        </p>
        <code className="mt-6 block whitespace-pre-line rounded-lg bg-neutral-900 p-4 text-neutral-500 ring-1 ring-neutral-800">
          <TypeAnimation
            sequence={[
              "# flight controllers",
              1000,
              "# flight control software",
              1000,
              "# camera-based autopilot",
              1000,
              "# developer ecosystem",
              1000,
              "# operations platform",
              1000,
              "# made in the usa",
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="font-mono text-sm"
          />
        </code>
        <p className="mt-3 max-w-72 text-xs text-neutral-600">
          Manufactured in the US, compliant with S.473 (
          <a
            className="text-neutral-500 no-underline hover:text-neutral-400"
            href="https://www.congress.gov/bill/118th-congress/senate-bill/473"
            target="_blank"
            rel="noopener noreferrer"
          >
            American Security Drone Act of 2023
          </a>
          ).
        </p>
      </div>

      <footer className="flex w-full flex-none px-6 pt-6 text-neutral-500 pb-safe-offset-6">
        <span>© {new Date().getFullYear()} DroneKit</span>
        <a
          href="https://discord.gg/nkzPH2bnRB"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-auto no-underline hover:text-neutral-400"
        >
          Discord
        </a>
      </footer>
    </main>
  );
}
