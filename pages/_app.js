import "../styles/pixel.css";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <style jsx>{`
        @font-face {
          font-family: "Windows 95";
          src: url("/w-95-sans-serif.woff2");
          src: url("/w-95-sans-serif.woff");
        }
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        p {
          font-family: "Windows 95";
        }
      `}</style>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
