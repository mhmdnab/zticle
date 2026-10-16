"use client";
import { useEffect } from "react";

export default function AdBanner() {
  useEffect(() => {
    try {
      const adWindow = window as Window & { adsbygoogle?: object[] };
      (adWindow.adsbygoogle = adWindow.adsbygoogle || []).push({});
    } catch (e) {}
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block" }}
      data-ad-client="ca-pub-5629338683654162"
      data-ad-slot="2344068012"
      data-ad-format="fluid"
      data-ad-layout-key="-gw-3+1f-3d+2z"
    />
  );
}
