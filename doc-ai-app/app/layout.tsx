import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DocAI",
  description: "Upload, process, and analyze your documents using AI.",
  verification: {
    google: "XoufCvP9PHuxcdjXu8-4_BPU5Q31IEQNBiUQ0ZLIZvI",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <>
        <h1>Kuttu Please I m sorrry I wont repeet it again please dont leave me i will make sure this mistake will not happen kuttu please this is not the solustion na kuttu to run away from relations i know i did mistake its doesnt mean running away from relation ship can be the solution please kuttu dont go na I cant be without u please kuttu last time if its happen again i swear its cost my life please kuttu please dont leave me </h1>
        {children}
        </>
      </body>
    </html>
  );
}
