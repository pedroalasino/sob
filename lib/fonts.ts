import localFont from "next/font/local"

export const fraunces = localFont({
  src: [
    { path: "../app/fonts/Fraunces-Variable.ttf", weight: "300 700", style: "normal" },
    { path: "../app/fonts/Fraunces-Italic-Variable.ttf", weight: "300 700", style: "italic" },
  ],
  variable: "--font-fraunces",
  display: "swap",
})

export const libreFranklin = localFont({
  src: [
    { path: "../app/fonts/LibreFranklin-Variable.ttf", weight: "100 900", style: "normal" },
    { path: "../app/fonts/LibreFranklin-Italic-Variable.ttf", weight: "100 900", style: "italic" },
  ],
  variable: "--font-libre-franklin",
  display: "swap",
})
