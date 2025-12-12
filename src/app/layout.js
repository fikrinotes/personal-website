import { Geist, Geist_Mono } from "next/font/google";



export default function RootLayout({ children }) {
  return (
    <html lang='id'>
    {/* Global site tag (gtag.js) - Google Analytics */}
    <head>
    <link rel="icon" href="logo_fix.png" height="250px" />
    <meta
      name="google-site-verification"
      content="JJt8s-bShfClSaIksS6BEHrJq7gFqDScaqKzsULaaH4"
    />
    <meta charSet="utf-8" />
    <meta name="theme-color" content="#4E5054" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    {/* Primary Meta Tags */}
    <title>Fikri Notes - Thought And Ideas Of Fikri Mulyana Setiawan</title>
    <meta
      name="title"
      content="Fikri Notes - Though And Ideas Of Fikri Mulyana Setiawan"
    />
    <meta
      name="description"
      content="Fikri Mulyana Setiawan is a programmer and front-end developer, and I like to automate everything with my programming skills."
    />
    {/* Open Graph / Facebook */}
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://fikrinotes.netlify.app/" />
    <meta
      property="og:title"
      content="Fikri Notes - Thought And Ideas Of Fikri Mulyana Setiawan "
    />
    <meta
      property="og:description"
      content="Fikri Mulyana Setiawan is a programmer and front-end developer, and I like to automate everything with my programming skills."
    />
    <meta
      property="og:image"
      content="https://fikrinotes.netlify.app/metaTag.jpg"
    />
    {/* Twitter */}
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://fikrinotes.netlify.app/" />
    <meta
      property="twitter:title"
      content="Fikri Notes - Thought And Ideas Of Fikri Mulyana Setiawan"
    />
    <meta
      property="twitter:description"
      content="Fikri Mulyana Setiawan is a programmer and front-end developer, and I like to automate everything with my programming skills."
    />
    <meta
      property="twitter:image"
      content="https://fikrinotes.netlify.app/metaTag.jpg"
    />
    
    </head>
      <body>
        {children}
      </body>
    </html>
  );
}
