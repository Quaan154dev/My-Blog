"use client";
// "use server";
import React, { useCallback, useState, useEffect } from "react";
import { getPageData } from "../action";
import { BannerDataType } from "@/lib/interface";

const useFetchData = ({ url = "", fetchBanner = false }) => {
  const [isLoading, setLoading] = useState(true);
  const [banner, setBanner] = useState<BannerDataType>({
    title: "",
    image: "",
  });
  const getData = useCallback(async () => {
    setLoading(true);
    try {
      const getPageDatas = await getPageData(url);
      if (fetchBanner) setBanner(getPageDatas.bannerData);
    } catch (error) {
      console.log("Error fetching data :", error);
    } finally {
      setLoading(false);
    }
  }, [url]);
  useEffect(() => {
    getData();
  }, [getData]);
  return { isLoading, banner };
};

export default useFetchData;
