export const metadata = {
  title: "Fikri Notes - Thought And Ideas Of Fikri Mulyana Setiawan",
  description: "Fikri Mulyana Setiawan is a machine learning enthusiast, programmer and front-end developer.",
  verification: {
    google: "JJt8s-bShfClSaIksS6BEHrJq7gFqDScaqKzsULaaH4",
  },
  openGraph: {
    type: "website",
    url: "https://fikrinotes.vercel.app/",
    title: "Fikri Notes - Thought And Ideas Of Fikri Mulyana Setiawan",
    description: "Fikri Mulyana Setiawan is a programmer and front-end developer, and I like to automate everything with my programming skills.",
    images: "https://fikrinotes.netlify.app/metaTag.jpg",
  },
};

export const viewport = {
  themeColor: '#0A192F', // Warna global
};

export default function RootLayout({ children }) {
  return (
    <html lang='id'>
    <head>
    <link rel="icon" href="logo_fix.png" height="250px" />
    </head>
      <body>
        {children}
      </body>
    </html>
  );
}

