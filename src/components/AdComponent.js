const AdComponent = () => (
    <div>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="YOUR-AD-CLIENT-ID"
        data-ad-slot="YOUR-AD-SLOT-ID"
        data-ad-format="auto"
      ></ins>
      <script>
        (adsbygoogle = window.adsbygoogle || []).push({});
      </script>
    </div>
  );
  
  export default AdComponent;
  