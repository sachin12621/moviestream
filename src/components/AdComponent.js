import { useEffect } from "react";

const AdComponent = () => {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error("AdSense error:", e);
    }
  }, []);

  return (
    <div className="adsense">
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-7403056135149608"  // Your AdSense Publisher ID
        data-ad-slot="4575182597"  // Replace with your Ad Slot ID
        data-ad-format="auto"
      ></ins>
    </div>
  );
};

export default AdComponent;
