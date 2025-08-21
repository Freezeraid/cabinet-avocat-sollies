import "./globals.css";

export const metadata = {
  title: "Cabinet d'Avocat à Solliès-Pont | MaîtreCécile Brun - Droit de la Famille, Pénal, Travail",
  description: "Cabinet d'Avocat expérimenté à Solliès-Pont dans le Var. Spécialisé en droit de la famille, pénal et du travail. Consultation sur rendez-vous. Contactez-moi au [téléphone].",
  keywords: "avocat Solliès-Pont, cabinet avocats Var, droit famille, droit pénal, droit travail",
  authors: [{ name: "Cabinet d'Avocat Solliès-Pont" }],
  creator: "Cabinet d'Avocat Solliès-Pont",
  publisher: "Cabinet d'Avocat Solliès-Pont",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://www.avocatsollies.fr",
    siteName: "Cabinet d'Avocat Solliès-Pont",
    title: "Cabinet d'Avocat à Solliès-Pont | Expertise juridique dans le Var",
    description: "Cabinet d'Avocat expérimenté à Solliès-Pont. Droit de la famille, pénal, travail. Accompagnement personnalisé et confidentiel.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cabinet d'Avocat à Solliès-Pont",
    description: "Expertise juridique dans le Var - Droit de la famille, pénal, travail",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <link rel="canonical" href="https://www.avocatsollies.fr" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0E7A5F" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
