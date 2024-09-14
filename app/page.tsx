"use client";
import LandingPage from "@/components/LandingPage/page";
import { useEffect } from "react";
import { getPageData } from "./action";
import useFetchData from "./hooks/useFetchData";

export default function Home() {
  const { isLoading, banner } = useFetchData({
    url: "home",
    fetchBanner: true,
  });
  return (
    <main className="flex min-h-screen flex-col items-center ">
      <LandingPage></LandingPage>
    </main>
  );
}
