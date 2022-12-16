import type { MetaFunction } from "@remix-run/node";
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

import styles from "./styles/app.css";

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

/*
  <meta name="title" content="The DeadSafe">
  <meta name="description" content="The DeadSafe, Dead are coming, the safe is waiting...
        Collect the key to open the vault.">

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://the-deadsafe.com/">
  <meta property="og:title" content="The DeadSafe">
  <meta property="og:description" content="The DeadSafe, Dead are coming, the safe is waiting...
        Collect the key to open the vault.">
  <meta property="og:image" content="/social.png">

  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image">
  <meta property="twitter:url" content="https://the-deadsafe.com/">
  <meta property="twitter:title" content="The DeadSafe">
  <meta property="twitter:description" content="The DeadSafe, Dead are coming, the safe is waiting...
        Collect the key to open the vault.">
  <meta property="twitter:image" content="/social.png">
 */

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

export default function App() {
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
      </body>
    </html>
  );
}
