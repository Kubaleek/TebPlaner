"use client";

import FacebookPost from "@/components/ui/facebook";
import InstagramPost from "@/components/ui/instagram";
import { useState, useEffect } from "react";

const SwapperAds = () => {
  const [showPost, setShowPost] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowPost((prev) => !prev);
    }, 8000);

    return () => clearInterval(interval);
  }, []); 

  return <div className="h-full">{showPost ? <FacebookPost /> : <InstagramPost />}</div>;
};

export default function Ads() {
  return <SwapperAds />;
}
