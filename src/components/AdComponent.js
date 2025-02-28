import { useEffect, useRef } from "react";

const AdComponent = () => {
  const adRef = useRef(null);

  useEffect(() => {
    try {
      if (window.adsbygoogle && adRef.current) {
        // Check if the ad slot has been initialized
        if (!adRef.current.hasAttribute("data-adsbygoogle-status")) {
          window.adsbygoogle.push({});
        }
      }
    } catch (e) {
      console.error("AdSense error:", e);
    }
  }, []);

  return (
    <ins
      ref={adRef}
      className="adsbygoogle"
      style={{ display: "block", minWidth: "300px", minHeight: "250px" }} // Ensure it's visible
      data-ad-client="ca-pub-7403056135149608"
      data-ad-slot="1234567890"
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>
  );
};

export default AdComponent;
