import type { MetaFunction } from "@vercel/remix";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Analytics } from "@vercel/analytics/react";
import { json } from "@vercel/remix";
import { useLoaderData } from "@remix-run/react";

import styles from "./styles/app.css";

type EnvironmentData = {
  NODE_ENV: string;
  VERCEL_ANALYTICS_ID: string;
};

type LoaderData = {
  ENV: EnvironmentData;
};

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "The DeadSafe",
  viewport: "width=device-width,initial-scale=1",
  description:
    "The DeadSafe, Dead are coming, the safe is waiting... Collect the key to open the vault.",
  "og:type": "website",
  "og:url": "https://the-deadsafe.com/",
  "og:title": "The DeadSafe",
  "og:description":
    "The DeadSafe, Dead are coming, the safe is waiting... Collect the key to open the vault.",
  "og:image": "/social.png",

  "twitter:card": "summary_large_image",
  "twitter:url": "https://the-deadsafe.com/",
  "twitter:title": "The DeadSafe",
  "twitter:description":
    "The DeadSafe, Dead are coming, the safe is waiting... Collect the key to open the vault.",
  "twitter:image": "/social.png",
});

export const loader = () => {
  const env = {
    NODE_ENV: process.env.NODE_ENV,
    VERCEL_ANALYTICS_ID: process.env.VERCEL_ANALYTICS_ID!,
  };

  return json<LoaderData>({ ENV: env });
};

export default function App() {
  const { ENV } = useLoaderData<LoaderData>();

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="bg-base text-base-content">
        <Navbar />
        <Outlet />
        <Footer />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />

        <Analytics />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.ENV = ${JSON.stringify(ENV)}`,
          }}
        />
      </body>
    </html>
  );
}
