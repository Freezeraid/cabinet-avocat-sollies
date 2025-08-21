import Header from '../../components/Header';
import Footer from '../../components/Footer';
import StickyCTA from '../../components/StickyCTA';
import SectionTitle from '../../components/SectionTitle';
import Breadcrumbs from '../../components/Breadcrumbs';
import ContactForm from '../../components/ContactForm';
import LeafletMap from '../../components/LeafletMap';

export const metadata = {
  title: "Contact | Cabinet d'Avocat Solliès-Pont - Prendre Rendez-vous",
  description: "Contactez mon Cabinet d'Avocat à Solliès-Pont. Prise de rendez-vous, consultation juridique. Adresse, téléphone, horaires. Réponse rapide garantie.",
  openGraph: {
    title: "Contact | Cabinet d'Avocat Solliès-Pont - Prendre Rendez-vous",
    description: "Contactez mon Cabinet d'Avocat à Solliès-Pont pour une consultation juridique. Réponse rapide garantie.",
  },
};

export default function ContactPage() {
  const breadcrumbs = [
    { label: 'Accueil', href: '/' },
    { label: 'Contact' },
  ];

  const coordonnees = [
    {
      title: "Adresse",
      content: "20 Faubourg Notre Dame\nPassage Romain Laureri\n83210 Solliès-Pont",
      icon: (
        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      title: "Téléphone",
      content: "04 94 13 53 80",
      link: "tel:+33494135380",
      icon: (
        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      )
    },
    {
      title: "Email",
      content: "cecile.brun@avocatsollies.fr",
      link: "mailto:cecile.brun@avocatsollies.fr",
      icon: (
        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    }
  ];

  const horaires = [
    { jour: "Lundi", heures: "8h30 - 18h00" },
    { jour: "Mardi", heures: "8h30 - 18h00" },
    { jour: "Mercredi", heures: "8h30 - 18h00" },
    { jour: "Jeudi", heures: "8h30 - 18h00" },
    { jour: "Vendredi", heures: "8h30 - 18h00" },
    { jour: "Samedi - Dimanche", heures: "Fermé" }
  ];

  const acces = [
    {
      title: "En voiture",
      description: "Parking gratuit disponible devant le cabinet. Accès facile depuis l'A57 (sortie Solliès-Pont)."
    },
    {
      title: "En transport en commun",
      description: "Ligne de bus 67 (arrêt République). Gare SNCF de Solliès-Pont à 5 minutes à pied."
    },
    {
      title: "Accessibilité",
      description: "Cabinet accessible aux personnes à mobilité réduite. Ascenseur disponible."
    }
  ];

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-neutral-warm to-white section-padding">
          <div className="container-custom">
            <Breadcrumbs items={breadcrumbs} />
            <div className="max-w-4xl">
              <h1 className="text-4xl lg:text-5xl font-serif font-bold text-neutral-text mb-6 text-balance">
                Contactez mon cabinet
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Besoin d'un conseil juridique ou d'une représentation ? Contactez-moi dès maintenant. 
                Je vous recontacterai rapidement et vous proposerai un rendez-vous dans les meilleurs délais.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:+33494135380" className="btn-primary">
                  Appeler maintenant
                </a>
                <a href="mailto:cecile.brun@avocatsollies.fr" className="btn-secondary">
                  Envoyer un email
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Coordonnées et formulaire */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Informations de contact */}
              <div>
                <SectionTitle 
                  title="Mes coordonnées"
                  className="mb-8"
                />
                
                <div className="space-y-6 mb-8">
                  {coordonnees.map((coord, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                        {coord.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-neutral-text mb-1">
                          {coord.title}
                        </h3>
                        {coord.link ? (
                          <a 
                            href={coord.link} 
                            className="text-gray-600 hover:text-primary transition-colors whitespace-pre-line"
                          >
                            {coord.content}
                          </a>
                        ) : (
                          <p className="text-gray-600 whitespace-pre-line">
                            {coord.content}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Horaires */}
                <div className="bg-neutral-warm rounded-lg p-6">
                  <h3 className="text-xl font-serif font-semibold text-neutral-text mb-4">
                    Horaires d'ouverture
                  </h3>
                  <div className="space-y-2">
                    {horaires.map((horaire, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-gray-600">{horaire.jour}</span>
                        <span className={`font-medium ${horaire.heures === 'Fermé' ? 'text-gray-400' : 'text-neutral-text'}`}>
                          {horaire.heures}
                        </span>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-gray-500 mt-4">
                    * Consultations sur rendez-vous uniquement
                  </p>
                  <p className="text-sm text-gray-500">
                    * Urgences : me contacter par téléphone
                  </p>
                </div>
              </div>

              {/* Formulaire de contact */}
              <div>
                <SectionTitle 
                  title="Formulaire de contact"
                  subtitle="Décrivez-moi votre situation, je vous recontacterai rapidement"
                  className="mb-8"
                />
                <div className="bg-neutral-warm rounded-lg p-6">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Plan et accès */}
        <section className="section-padding bg-neutral-warm">
          <div className="container-custom">
            <SectionTitle 
              title="Plan et accès"
              centered
              className="mb-12"
            />
            
            <div className="max-w-5xl mx-auto">
              {/* Carte interactive */}
              <div className="bg-white rounded-xl card-shadow overflow-hidden mb-8">
                <div className="aspect-video">
                  <LeafletMap 
                    address="20 Faubourg Notre Dame, Passage Romain Laureri, 83210 Solliès-Pont, France"
                    lat={43.1897}
                    lng={6.0378}
                    zoom={16}
                  />
                </div>
              </div>
              
              {/* Informations d'accès */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white rounded-xl card-shadow p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mr-3">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-serif font-semibold text-neutral-text">
                      Adresse du cabinet
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    20 Faubourg Notre Dame<br />
                    Passage Romain Laureri<br />
                    83210 Solliès-Pont, France
                  </p>
                </div>
                
                <div className="bg-white rounded-xl card-shadow p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mr-3">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-serif font-semibold text-neutral-text">
                      Obtenir l'itinéraire
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Cliquez sur le bouton ci-dessous pour obtenir l'itinéraire depuis votre position via Google Maps.
                  </p>
                  <a 
                    href="https://www.google.com/maps/dir/?api=1&destination=20+Faubourg+Notre+Dame,+Passage+Romain+Laureri,+83210+Solliès-Pont,+France" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex items-center gap-2 w-full justify-center"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                    Obtenir l'itinéraire
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Urgences */}
        <section className="section-padding bg-primary text-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-serif font-semibold mb-6">
                Situation d'urgence ?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                En cas d'urgence juridique (garde à vue, référé, etc.), 
                n'hésitez pas à me contacter immédiatement par téléphone.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+33494135380" className="btn-secondary bg-white text-primary hover:bg-gray-100">
                  Appelez maintenant : 04 94 13 53 80
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Informations pratiques */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <SectionTitle 
              title="Informations pratiques"
              centered
              className="mb-12"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-serif font-semibold text-neutral-text mb-3">
                  Premier rendez-vous
                </h3>
                <p className="text-gray-600 text-sm">
                  Durée : 45 minutes à 1h<br />
                  Déductible des honoraires si mandat
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-serif font-semibold text-neutral-text mb-3">
                  Documents à apporter
                </h3>
                <p className="text-gray-600 text-sm">
                  Pièce d'identité<br />
                  Tous documents relatifs à votre affaire<br />
                  Correspondances reçues
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <h3 className="text-lg font-serif font-semibold text-neutral-text mb-3">
                  Modalités de paiement
                </h3>
                <p className="text-gray-600 text-sm">
                  Espèces, chèque, virement<br />
                  Paiement échelonné possible<br />
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <StickyCTA />
    </>
  );
}
