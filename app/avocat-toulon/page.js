import Header from '../../components/Header';
import Footer from '../../components/Footer';
import StickyCTA from '../../components/StickyCTA';
import SectionTitle from '../../components/SectionTitle';
import Breadcrumbs from '../../components/Breadcrumbs';
import Button from '../../components/Button';
import { getExperienceText } from '../../lib/utils';

export const metadata = {
  title: "Avocate ToulonPage près de Toulon | Cabinet d'Avocat Solliès-Pont - Var 83",
  description: "Cabinet d'Avocat près de Toulon dans le Var. Spécialisé en droit de la famille, travail, commercial et immobilier. Consultation juridique à Solliès-Pont, proche de Toulon.",
  openGraph: {
    title: "Avocate près de Toulon | Cabinet d'Avocat Solliès-Pont",
    description: "Expertise juridique près de Toulon : droit de la famille, travail, commercial. Cabinet d'Avocat à Solliès-Pont dans le Var.",
  },
  keywords: "avocat Toulon, avocat près Toulon, cabinet avocat Var, avocat Solliès-Pont, droit famille Toulon, avocat travail Toulon, avocat commercial Toulon, consultation juridique Toulon",
  alternates: {
    canonical: 'https://www.avocatsollies.fr/avocat-toulon'
  }
};

export default function AvocatToulonPage() {
  const experienceText = getExperienceText();
  
  const breadcrumbs = [
    { label: 'Accueil', href: '/' },
    { label: 'Avocate près de Toulon' },
  ];

  const villes = [
    {
      nom: "Toulon",
      distance: "15 km",
      description: "Préfecture du Var, facilement accessible depuis Solliès-Pont"
    },
    {
      nom: "La Seyne-sur-Mer",
      distance: "20 km", 
      description: "Commune limitrophe de Toulon, dans ma zone d'intervention"
    },
    {
      nom: "Hyères",
      distance: "12 km",
      description: "Proche de Solliès-Pont, consultations régulières"
    },
    {
      nom: "La Garde",
      distance: "10 km",
      description: "Commune voisine, déplacements fréquents"
    },
    {
      nom: "Le Pradet",
      distance: "18 km",
      description: "Zone d'intervention fréquente du cabinet"
    },
    {
      nom: "Carqueiranne",
      distance: "15 km",
      description: "Clients réguliers dans cette commune"
    }
  ];

  const juridictions = [
    {
      nom: "Tribunal Judiciaire de Toulon",
      adresse: "Place Gabriel Péri, 83000 Toulon",
      specialites: ["Droit de la famille", "Droit civil", "Droit commercial"]
    },
    {
      nom: "Conseil de Prud'hommes de Toulon", 
      adresse: "Rue Emile Ollivier, 83000 Toulon",
      specialites: ["Droit du travail", "Contentieux prud'homal"]
    },
    {
      nom: "Tribunal de Commerce de Toulon",
      adresse: "Place d'Armes, 83000 Toulon", 
      specialites: ["Droit commercial", "Procédures collectives"]
    }
  ];

  const avantagesLocalisation = [
    {
      titre: "Proximité de Toulon",
      description: "À seulement 15 minutes de Toulon, mon cabinet offre tous les avantages d'un avocat local sans les contraintes du centre-ville.",
      icone: "📍"
    },
    {
      titre: "Disponibilité renforcée",
      description: "Plus de temps consacré à chaque client grâce à une localisation stratégique près de Toulon.",
      icone: "⏰"
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
                Avocate près de Toulon - Cabinet à Solliès-Pont
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Vous cherchez une expertise juridique près de Toulon ? Mon cabinet situé à Solliès-Pont 
                vous offre une expertise juridique de qualité à proximité immédiate de Toulon. 
                {experienceText.withExperience} au service des particuliers et entreprises du Var.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="/contact" size="lg">
                  Prendre rendez-vous
                </Button>
                <Button href="tel:+33494135380" variant="secondary" size="lg">
                  04 94 13 53 80
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Pourquoi choisir unr avocatr près de Toulon */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <SectionTitle 
              title="Pourquoi choisir une avocate près de Toulon ?"
              subtitle="Les avantages de mon cabinet à Solliès-Pont pour les clients de Toulon et environs"
              className="mb-12"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {avantagesLocalisation.map((avantage, index) => (
                <div key={index} className="bg-neutral-warm rounded-lg p-6 card-shadow">
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-4">{avantage.icone}</span>
                    <h3 className="text-xl font-serif font-semibold text-neutral-text">
                      {avantage.titre}
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {avantage.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Zone d'intervention */}
        <section className="section-padding bg-neutral-warm">
          <div className="container-custom">
            <SectionTitle 
              title="Ma zone d'intervention près de Toulon"
              subtitle="Un Cabinet d'Avocat au cœur du Var, proche de toutes les communes"
              centered
              className="mb-12"
            />
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-lg card-shadow p-8 mb-8">
                <h3 className="text-2xl font-serif font-semibold text-neutral-text mb-6 text-center">
                  Solliès-Pont : Idéalement situé près de Toulon
                </h3>
                <p className="text-gray-600 leading-relaxed text-center mb-8">
                  Mon cabinet est stratégiquement situé à Solliès-Pont, 
                  permettant un accès facile depuis Toulon et toutes les communes environnantes. 
                  Cette localisation me permet de servir efficacement une large clientèle 
                  tout en maintenant une approche personnalisée.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {villes.map((ville, index) => (
                  <div key={index} className="bg-white rounded-lg card-shadow p-6 text-center">
                    <h4 className="text-lg font-semibold text-neutral-text mb-2">
                      {ville.nom}
                    </h4>
                    <div className="text-primary font-medium mb-3">
                      📍 {ville.distance}
                    </div>
                    <p className="text-sm text-gray-600">
                      {ville.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Juridictions */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <SectionTitle 
              title="Juridictions de Toulon"
              subtitle="Une connaissance approfondie des tribunaux de Toulon et du Var"
              className="mb-12"
            />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {juridictions.map((juridiction, index) => (
                <div key={index} className="bg-neutral-warm rounded-lg p-6 card-shadow">
                  <h3 className="text-xl font-serif font-semibold text-neutral-text mb-4">
                    {juridiction.nom}
                  </h3>
                  <div className="mb-4">
                    <p className="text-sm text-gray-600 mb-2">
                      📍 {juridiction.adresse}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-text mb-2">Spécialités :</h4>
                    <ul className="space-y-1">
                      {juridiction.specialites.map((specialite, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-center">
                          <svg className="w-3 h-3 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {specialite}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
                {experienceText.strongOfExperience} devant les juridictions de Toulon, 
                je maîtrise parfaitement les procédures et les spécificités locales. 
                Cette connaissance approfondie me permet de vous offrir une représentation 
                efficace et adaptée aux pratiques des tribunaux toulonnais.
              </p>
            </div>
          </div>
        </section>

        {/* Domaines d'expertise */}
        <section className="section-padding bg-neutral-warm">
          <div className="container-custom">
            <SectionTitle 
              title="Expertise juridique près de Toulon"
              subtitle="Tous les domaines du droit pour les clients de Toulon et du Var"
              centered
              className="mb-12"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white rounded-lg card-shadow p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-serif font-semibold text-neutral-text mb-3">
                  Droit de la Famille
                </h3>
                <p className="text-sm text-gray-600">
                  Divorce, garde d'enfants, pensions alimentaires pour les familles de Toulon
                </p>
              </div>
              
              <div className="bg-white rounded-lg card-shadow p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0H8m8 0v6a2 2 0 01-2 2H10a2 2 0 01-2-2V6m8 0V4a2 2 0 00-2-2H10a2 2 0 00-2 2v2" />
                  </svg>
                </div>
                <h3 className="text-lg font-serif font-semibold text-neutral-text mb-3">
                  Droit du Travail
                </h3>
                <p className="text-sm text-gray-600">
                  Licenciements, prud'hommes, défense des salariés et employeurs toulonnais
                </p>
              </div>
              
              <div className="bg-white rounded-lg card-shadow p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-lg font-serif font-semibold text-neutral-text mb-3">
                  Droit Commercial
                </h3>
                <p className="text-sm text-gray-600">
                  Accompagnement des entreprises de Toulon et du Var
                </p>
              </div>
              
              <div className="bg-white rounded-lg card-shadow p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <h3 className="text-lg font-serif font-semibold text-neutral-text mb-3">
                  Droit Immobilier
                </h3>
                <p className="text-sm text-gray-600">
                  Transactions immobilières, baux, copropriété dans le Var
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Témoignages clients Toulon */}
        {/* <section className="section-padding bg-white">
          <div className="container-custom">
            <SectionTitle 
              title="Clients satisfaits près de Toulon"
              subtitle="Témoignages de clients de Toulon et des communes environnantes"
              centered
              className="mb-12"
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-neutral-warm rounded-lg p-6 card-shadow">
                <div className="mb-4">
                  <div className="flex text-yellow-400 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-600 italic mb-4">
                    "Excellent avocat près de Toulon. Très professionnel et à l'écoute. 
                    Le cabinet est facilement accessible depuis Toulon avec un parking gratuit."
                  </p>
                </div>
                <div className="text-sm">
                  <p className="font-semibold text-neutral-text">Marie L.</p>
                  <p className="text-gray-500">Toulon - Droit de la famille</p>
                </div>
              </div>
              
              <div className="bg-neutral-warm rounded-lg p-6 card-shadow">
                <div className="mb-4">
                  <div className="flex text-yellow-400 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-600 italic mb-4">
                    "Parfait pour les entreprises toulonnaises. Conseils juridiques de qualité 
                    et tarifs plus avantageux qu'en centre-ville de Toulon."
                  </p>
                </div>
                <div className="text-sm">
                  <p className="font-semibold text-neutral-text">Pierre M.</p>
                  <p className="text-gray-500">La Seyne-sur-Mer - Droit commercial</p>
                </div>
              </div>
              
              <div className="bg-neutral-warm rounded-lg p-6 card-shadow">
                <div className="mb-4">
                  <div className="flex text-yellow-400 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-600 italic mb-4">
                    "Très satisfaite de l'accompagnement pour mon divorce. 
                    Plus pratique qu'un avocat en centre-ville de Toulon."
                  </p>
                </div>
                <div className="text-sm">
                  <p className="font-semibold text-neutral-text">Sophie D.</p>
                  <p className="text-gray-500">Hyères - Droit de la famille</p>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* CTA Section */}
        <section className="section-padding bg-primary text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl lg:text-4xl font-serif font-semibold mb-6">
              Vous habitez près de Toulon ?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Bénéficiez de l'expertise d'une avocate expérimentée à proximité de Toulon à Solliès-Pont. 
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" variant="secondary" className="bg-white text-primary hover:bg-gray-100">
                Prendre rendez-vous
              </Button>
              <Button href="tel:+33494135380" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                04 94 13 53 80
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <StickyCTA />
    </>
  );
}
