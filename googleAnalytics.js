// google-analytics.js

(function () {
  const script = document.createElement('script');
  script.async = true;
  script.src = '"https://www.googletagmanager.com/gtag/js?id=G-9W7X2LGTDB"';
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }

  window.gtag = gtag;

  gtag('js', new Date());
  gtag('config', 'G-9W7X2LGTDB');
})();
