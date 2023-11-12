import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-monteserrat)"],
      },
      colors: {
        primary: {
          DEFAULT: "rgb(var(--color-primary) / <alpha-value>)",
          focus: "rgb(var(--color-primary-focus) / <alpha-value>)",
          content: "rgb(var(--color-primary-content) / <alpha-value>)",
        },
        secondary: {
          DEFAULT: "rgb(var(--color-secondary) / <alpha-value>)",
          focus: "rgb(var(--color-secondary-focus) / <alpha-value>)",
          content: "rgb(var(--color-secondary-content) / <alpha-value>)",
        },
        neutral: {
          DEFAULT: "rgb(var(--color-neutral) / <alpha-value>)",
          focus: "rgb(var(--color-neutral-focus) / <alpha-value>)",
          200: "rgb(var(--color-neutral-200) / <alpha-value>)",
          content: "rgb(var(--color-neutral-content) / <alpha-value>)",
        },
        base: {
          100: "rgb(var(--color-base-100) / <alpha-value>)",
          200: "rgb(var(--color-base-200) / <alpha-value>)",
          300: "rgb(var(--color-base-300) / <alpha-value>)",
          content: "rgb(var(--color-base-content) / <alpha-value>)",
        },
      },
      fontSize: {
        nav: ["15px", { fontWeight: "400", lineHeight: "15px" }],
        navMobile: [
          "18px",
          { fontWeight: "400", lineHeight: "18px", letterSpacing: "2px" },
        ],
        bodyL: ["22px", { fontWeight: "400", lineHeight: "40px" }],
        bodyLMobile: ["18px", { fontWeight: "400", lineHeight: "26px" }],
        bodyM: [
          "15px",
          { fontWeight: "400", lineHeight: "26px", letterSpacing: ".8px" },
        ],
        bodyMMobile: ["14px", { fontWeight: "400", lineHeight: "23px" }],
        bodyS: ["13px", { fontWeight: "400", lineHeight: "18px" }],
        bodySMobile: ["11px", { fontWeight: "400", lineHeight: "14px" }],
        headingXL: ["72px", { fontWeight: "400", lineHeight: "70px" }],
        headingXLMobile: ["32px", { fontWeight: "400", lineHeight: "38px" }],
        headingL: ["38px", { lineHeight: "53px", fontWeight: "700" }],
        headingLMobile: ["30px", { lineHeight: "100%", fontWeight: "700" }],
        headingM: ["28px", { lineHeight: "39px", fontWeight: "400" }],
        headingMMobile: ["24px", { lineHeight: "30px", fontWeight: "400" }],
        headingS: ["24px", { lineHeight: "34px" }],
        headingSMobile: ["18px", { lineHeight: "25px" }],
        headingXS: ["21px", { lineHeight: "29px", fontWeight: "400" }],
        headingXSMobile: ["19px", { lineHeight: "25px", fontWeight: "400" }],
      },
      boxShadow: {
        themeContainer: "0 0 5px rgba(0,0,0,.15)",
        themeHover: "0 0 5px 1px rgba(0,0,0, .2)",
      },
      backgroundColor: {
        "neutral-gradient":
          "linear-gradient(45deg, var(--color-neutral) , var(--color-neutral-focus))",
      },
    },
  },
  plugins: [],
};
export default config;
