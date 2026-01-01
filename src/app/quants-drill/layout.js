export const metadata = {
  metadataBase: new URL('https://fikrinotes.vercel.app'),
  title: 'Quant Drill - Fikri Notes',
  description: 'Train your quantitative thinking speeds',
  openGraph: {
    type: "website",
    url: "https://fikrinotes.vercel.app/quants-drill",
    title: "Quant Drill - Fikri Notes",
    description: "Train your quantitative thinking speeds",
    images: "/img/quant-drill.png",
  }
};

export const viewport = {
  themeColor: '#050505' // Warna global
};

export default function QuantsDrillLayout({ children }) {
  return children;
}

