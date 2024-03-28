import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useEffect } from "react";

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

      <Component {...pageProps} />
    </>
  );
}
