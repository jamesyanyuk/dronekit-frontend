import "@/styles/globals.css";
import type { AppProps } from "next/app";
import localFont from "next/font/local";
import Head from "next/head";
import { useEffect } from "react";

const allianceOne = localFont({
  variable: "--font-alliance-one",
  display: "swap",
  src: [
    {
      path: "../../public/fonts/Alliance/AllianceNo.1-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/Alliance/AllianceNo.1-LightItalic.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../../public/fonts/Alliance/AllianceNo.1-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Alliance/AllianceNo.1-RegularItalic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/Alliance/AllianceNo.1-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Alliance/AllianceNo.1-MediumItalic.otf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../../public/fonts/Alliance/AllianceNo.1-SemiBold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/Alliance/AllianceNo.1-SemiBoldItalic.otf",
      weight: "600",
      style: "italic",
    },
    {
      path: "../../public/fonts/Alliance/AllianceNo.1-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/Alliance/AllianceNo.1-BoldItalic.otf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../../public/fonts/Alliance/AllianceNo.1-ExtraBold.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/fonts/Alliance/AllianceNo.1-ExtraBoldItalic.otf",
      weight: "800",
      style: "italic",
    },
    {
      path: "../../public/fonts/Alliance/AllianceNo.1-Black.otf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../../public/fonts/Alliance/AllianceNo.1-BlackItalic.otf",
      weight: "900",
      style: "italic",
    },
  ],
});

const allianceTwo = localFont({
  variable: "--font-alliance-two",
  display: "swap",
  src: [
    {
      path: "../../public/fonts/Alliance/AllianceNo.2-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/Alliance/AllianceNo.2-LightItalic.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../../public/fonts/Alliance/AllianceNo.2-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Alliance/AllianceNo.2-RegularItalic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/Alliance/AllianceNo.2-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Alliance/AllianceNo.2-MediumItalic.otf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../../public/fonts/Alliance/AllianceNo.2-SemiBold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/Alliance/AllianceNo.2-SemiBoldItalic.otf",
      weight: "600",
      style: "italic",
    },
    {
      path: "../../public/fonts/Alliance/AllianceNo.2-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/Alliance/AllianceNo.2-BoldItalic.otf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../../public/fonts/Alliance/AllianceNo.2-ExtraBold.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/fonts/Alliance/AllianceNo.2-ExtraBoldItalic.otf",
      weight: "800",
      style: "italic",
    },
    {
      path: "../../public/fonts/Alliance/AllianceNo.2-Black.otf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../../public/fonts/Alliance/AllianceNo.2-BlackItalic.otf",
      weight: "900",
      style: "italic",
    },
  ],
});

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    console.log(`
                        @@@@@@@@@@@@@
                        @@@@@@@@@@@@@
                        @@@@@@@@@@@@@
                        @@@@@@@@@@@@@
                        @@@@@@@@@@@@@
          @@@@@@@@@@@@@@@@@@@@@@@@@@@     @@@@@@@@@@@@@
        @@@@@@@@@@@@@@@@@@@@@@@@@@@@@    @@@@@@@@@@@@@
      @@@@@@@@@@@@@@@@@@@@@@@@@@@@@    @@@@@@@@@@@@@
      @@@@@@@@@@@@@   @@@@@@@@@@@@@  @@@@@@@@@@@@@@
      @@@@@@@@@@@@@   @@@@@@@@@@@@@ @@@@@@@@@@@@@@
      @@@@@@@@@@@@@   @@@@@@@@@@@@@  @@@@@@@@@@@@@
      @@@@@@@@@@@@@   @@@@@@@@@@@@@  @@@@@@@@@@@@@
      @@@@@@@@@@@@@   @@@@@@@@@@@@@   @@@@@@@@@@@@@
      @@@@@@@@@@@@@@@@@@@@@@@@@@@@@   @@@@@@@@@@@@@
      @@@@@@@@@@@@@@@@@@@@@@@@@@@@     @@@@@@@@@@@@@
        @@@@@@@@@@@@@@@@@@@@@@@        @@@@@@@@@@@@@

      join the vision: email james@dronekit.com
    `);
  }, []);

  return (
    <>
      <Head>
        <title>DroneKit / modular drone platform</title>
      </Head>

      <style jsx global>{`
        :root {
          --font-alliance-one: ${allianceOne.style.fontFamily};
          --font-alliance-two: ${allianceTwo.style.fontFamily};
        }
      `}</style>

      <Component {...pageProps} />
    </>
  );
}
