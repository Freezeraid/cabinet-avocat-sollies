import Header from '../../components/Header';
import Footer from '../../components/Footer';
import StickyCTA from '../../components/StickyCTA';
import SectionTitle from '../../components/SectionTitle';
import Breadcrumbs from '../../components/Breadcrumbs';
import { getExperienceText } from '../../lib/utils';
import Button from '../../components/Button';
import Image from 'next/image';

export const metadata = {
  title: "Domaines d'Intervention | Cabinet d'Avocat Solliès-Pont - Var",
  description: "Découvrez mes domaines d'expertise : droit de la famille, pénal, travail et immobilier. Cabinet d'Avocat spécialisé à Solliès-Pont dans le Var.",
  openGraph: {
    title: "Domaines d'Intervention | Cabinet d'Avocat Solliès-Pont",
    description: "Expertise juridique complète : droit de la famille, pénal, travail et immobilier. Accompagnement personnalisé dans le Var.",
  },
};

export default function DomainesPage() {
  const experienceText = getExperienceText();
  const breadcrumbs = [
    { label: 'Accueil', href: '/' },
    { label: 'Domaines d\'intervention' },
  ];

  const domaines = [
    {
      title: "Droit de la Famille et des Personnes",
      description: "Mariage, séparation, divorce, pensions alimentaires, prestation compensatoire, droit de visite et d'hébergement, filiation, droits parentaux. Liquidation et partage du régime matrimonial.",
      href: "/domaines/famille",
      icon: (
        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      image: "/images/droit-famille.png",
      specialites: [
        "Mariage et séparation",
        "Divorce (toutes procédures)",
        "Pensions alimentaires",
        "Prestation compensatoire",
        "Droit de visite et d'hébergement",
        "Filiation et droits parentaux",
        "Liquidation du régime matrimonial",
        "Changement de régime matrimonial"
      ]
    },
    {
      title: "Droit du Travail",
      description: "Accompagnement dans tous types de contentieux : négociation de rupture, licenciement, défense de vos droits de salarié ou d'employeur.",
      href: "/domaines/travail",
      icon: (
        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      image: "/images/droit-travail.png",
      specialites: [
        "Négociation de rupture",
        "Licenciement",
        "Rupture conventionnelle",
        "Conseil de prud'hommes",
        "Harcèlement au travail",
        "Accident du travail",
        "Contentieux salariaux"
      ]
    },
    {
      title: "Droit Commercial et des Affaires",
      description: "Acquisition ou vente de fonds de commerce, parts sociales, recouvrement de créances. Accompagnement des entreprises dans leurs démarches juridiques.",
      href: "/domaines/commercial",
      icon: (
        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      image: "/images/droit-commercial.png",
      specialites: [
        "Acquisition de fonds de commerce",
        "Vente de parts sociales",
        "Recouvrement de créances",
        "Contentieux commercial",
        "Conseil aux entreprises",
        "Négociation commerciale"
      ]
    },
    {
      title: "Droit Immobilier et Rural",
      description: "Problèmes de voisinage, servitudes, baux d'habitation et commerciaux, expulsions, impayés, droit rural. Une expertise complète en matière immobilière.",
      href: "/domaines/immobilier",
      icon: (
        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      image: "/images/droit-immobilier.png",
      specialites: [
        "Problèmes de voisinage (bruit, servitudes)",
        "Baux d'habitation",
        "Baux commerciaux",
        "Expulsions et impayés",
        "Déplafonnement et renouvellement",
        "Droit rural",
        "Contentieux immobiliers"
      ]
    }
  ];

  const avantages = [
    {
      title: "Expertise reconnue",
      description: experienceText.inField("mes domaines de spécialisation")
    },
    {
      title: "Approche personnalisée",
      description: "Chaque dossier bénéficie d'une stratégie sur mesure"
    },
    {
      title: "Réactivité",
      description: "Disponibilité 7j/7 pour les situations d'urgence"
    },
    {
      title: "Transparence",
      description: "Honoraires clairs et information régulière sur votre dossier"
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
                Mes domaines d'expertise juridique
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                {experienceText.strongOfExperience}, mon cabinet vous accompagne dans quatre domaines clés du droit.
                Une expertise approfondie et une approche humaine pour défendre au mieux vos intérêts.
              </p>
              <Button href="/contact" size="lg">
                Me contacter
              </Button>
            </div>
          </div>
        </section>

        {/* Domaines détaillés */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="space-y-16">
              {domaines.map((domaine, index) => (
                <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                        {domaine.icon}
                      </div>
                      <h2 className="text-3xl font-serif font-semibold text-neutral-text">
                        {domaine.title}
                      </h2>
                    </div>
                    <p className="text-lg text-gray-600 leading-relaxed mb-6">
                      {domaine.description}
                    </p>
                    <div className="mb-8">
                      <h3 className="text-lg font-semibold text-neutral-text mb-4">
                        Mes spécialités :
                      </h3>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {domaine.specialites.map((specialite, idx) => (
                          <li key={idx} className="flex items-center text-gray-600">
                            <svg className="w-4 h-4 text-primary mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            {specialite}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button href={domaine.href} variant="secondary">
                      En savoir plus
                    </Button>
                  </div>
                  <div className={`rounded-lg p-8 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <div className="aspect-square rounded-lg flex items-center justify-center">
                      <Image
                        src={domaine.image}
                        alt={`Illustration ${domaine.title}`}
                        width={400}
                        height={400}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pourquoi me choisir */}
        <section className="section-padding bg-neutral-warm">
          <div className="container-custom">
            <SectionTitle 
              title="Pourquoi choisir mon cabinet ?"
              subtitle="Des atouts qui font la différence dans la défense de vos intérêts"
              centered
              className="mb-12"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {avantages.map((avantage, index) => (
                <div key={index} className="bg-white rounded-lg card-shadow p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-6 h-6 bg-primary rounded-full"></div>
                  </div>
                  <h3 className="text-lg font-serif font-semibold text-neutral-text mb-3">
                    {avantage.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {avantage.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process d'accompagnement */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <SectionTitle 
              title="Mon processus d'accompagnement étape par étape"
              subtitle="Un processus éprouvé pour vous garantir le meilleur service"
              centered
              className="mb-12"
            />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  1
                </div>
                <h3 className="text-lg font-serif font-semibold text-neutral-text mb-3">
                  Évaluation gratuite
                </h3>
                <p className="text-gray-600 text-sm">
                  Premier contact pour évaluer votre situation et déterminer la stratégie la plus adaptée.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  2
                </div>
                <h3 className="text-lg font-serif font-semibold text-neutral-text mb-3">
                  Analyse approfondie
                </h3>
                <p className="text-gray-600 text-sm">
                  Étude détaillée de votre dossier et proposition d'une stratégie personnalisée.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  3
                </div>
                <h3 className="text-lg font-serif font-semibold text-neutral-text mb-3">
                  Action juridique
                </h3>
                <p className="text-gray-600 text-sm">
                  Mise en œuvre de la stratégie avec un suivi régulier et une information transparente.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  4
                </div>
                <h3 className="text-lg font-serif font-semibold text-neutral-text mb-3">
                  Résolution
                </h3>
                <p className="text-gray-600 text-sm">
                  Accompagnement jusqu'à la résolution complète avec suivi post-dossier si nécessaire.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-primary text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl lg:text-4xl font-serif font-semibold mb-6">
              Quel que soit votre besoin juridique
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Mon expertise dans ces quatre domaines me permet de vous accompagner 
              efficacement dans la plupart des situations juridiques.
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
