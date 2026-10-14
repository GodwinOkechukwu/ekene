import { profile } from "../data/profile";

const fallback = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "http://localhost:3000";

export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? fallback).replace(
  /\/$/,
  "",
);

export const siteTitle = `${profile.displayName} Godwin | ${profile.role}`;
export const siteDescription =
  "Frontend engineer building fast, accessible and polished web products with React, Next.js and TypeScript.";
