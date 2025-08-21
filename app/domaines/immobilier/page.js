import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import StickyCTA from '../../../components/StickyCTA';
import SectionTitle from '../../../components/SectionTitle';
import Breadcrumbs from '../../../components/Breadcrumbs';
import Button from '../../../components/Button';
import FaqAccordion from '../../../components/FaqAccordion';
import { getExperienceText } from '../../../lib/utils';

export const metadata = {
  title: "Avocate Droit Immobilier à Solliès-Pont | Vente, Location, Copropriété - Var",
  description: "Avocate spécialisée en droit immobilier à Solliès-Pont. Vente, achat, location, copropriété, construction. Conseil juridique immobilier pour particuliers et professionnels dans le Var.",
  openGraph: {
    title: "Avocate Droit Immobilier à Solliès-Pont | Vente, Location, Copropriété",
    description: "Expertise en droit immobilier : vente, achat, location, copropriété. Accompagnement juridique pour tous vos projets immobiliers.",
  },
};

export default function DroitImmobilierPage() {
  const experienceText = getExperienceText();
  const breadcrumbs = [
    { label: 'Accueil', href: '/' },
    { label: 'Domaines', href: '/domaines' },
    { label: 'Droit Immobilier' },
  ];

  const services = [
    {
      title: "Vente et acquisition immobilière",
      description: "Sécurisation juridique de vos transactions immobilières, de la promesse à l'acte authentique.",
      details: [
        "Vérification des titres de propriété",
        "Négociation des conditions suspensives",
        "Rédaction des avant-contrats",
        "Accompagnement jusqu'à la signature"
      ]
    },
    {
      title: "Droit de la location",
      description: "Conseil et contentieux locatifs pour propriétaires bailleurs et locataires.",
      details: [
        "Rédaction de baux commerciaux et d'habitation",
        "Révision et renouvellement de baux",
        "Expulsion et recouvrement de loyers",
        "Dépôt de garantie et état des lieux"
      ]
    },
    {
      title: "Copropriété et syndic",
      description: "Résolution des conflits en copropriété et accompagnement des syndics.",
      details: [
        "Assemblées générales de copropriété",
        "Travaux et charges de copropriété",
        "Conflits entre copropriétaires",
        "Responsabilité du syndic"
      ]
    },
    {
      title: "Droit de la construction",
      description: "Accompagnement dans vos projets de construction et rénovation.",
      details: [
        "Contrats de construction (CCMI)",
        "Malfaçons et garanties décennales",
        "Permis de construire et urbanisme",
        "Expertise technique et judiciaire"
      ]
    },
    {
      title: "Servitudes et mitoyenneté",
      description: "Résolution des conflits de voisinage et questions de servitudes.",
      details: [
        "Servitudes de passage et de vue",
        "Troubles anormaux de voisinage",
        "Bornage et délimitation",
        "Murs mitoyens et clôtures"
      ]
    },
    {
      title: "Investissement immobilier",
      description: "Conseil juridique pour optimiser vos investissements immobiliers.",
      details: [
        "Montages juridiques (SCI, LMNP)",
        "Défiscalisation immobilière",
        "Gestion de patrimoine immobilier",
        "Transmission et succession"
      ]
    }
  ];

  const processus = [
    {
      etape: "1",
      titre: "Diagnostic immobilier",
      description: "Analyse complète de votre situation et identification des risques juridiques."
    },
    {
      etape: "2",
      titre: "Stratégie personnalisée",
      description: "Élaboration d'une approche sur-mesure adaptée à vos objectifs immobiliers."
    },
    {
      etape: "3",
      titre: "Accompagnement complet",
      description: "Suivi de A à Z avec une expertise technique et une approche humaine."
    }
  ];

  const faqData = [
    {
      question: "Quelles vérifications faire avant d'acheter un bien immobilier ?",
      answer: "Il faut vérifier les titres de propriété, l'absence d'hypothèques, la conformité urbanistique, les diagnostics techniques obligatoires, et s'assurer de l'absence de servitudes cachées."
    },
    {
      question: "Comment expulser un locataire qui ne paie plus son loyer ?",
      answer: "La procédure commence par un commandement de payer, puis une assignation devant le tribunal. L'expulsion nécessite un titre exécutoire et l'intervention d'un huissier. Comptez 6 à 18 mois selon les cas."
    },
    {
      question: "Qu'est-ce que la garantie décennale en construction ?",
      answer: "C'est l'obligation pour les constructeurs de garantir pendant 10 ans les dommages qui compromettent la solidité de l'ouvrage ou le rendent impropre à sa destination."
    },
    {
      question: "Comment contester une décision d'assemblée générale de copropriété ?",
      answer: "Vous disposez de 2 mois pour contester une décision devant le tribunal judiciaire. Il faut prouver un vice de forme, de fond, ou que la décision lèse vos intérêts."
    },
    {
      question: "Peut-on annuler une vente immobilière après signature ?",
      answer: "Oui, dans certains cas : vice caché, erreur sur la substance, dol du vendeur, ou non-respect du délai de rétractation de 10 jours pour les particuliers."
    },
    {
      question: "Comment créer une SCI pour investir dans l'immobilier ?",
      answer: "La SCI permet de détenir un patrimoine immobilier à plusieurs, facilite la transmission et peut offrir des avantages fiscaux. Les statuts doivent être rédigés avec soin selon vos objectifs."
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
                Avocate en Droit Immobilier à Solliès-Pont
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                L'immobilier représente souvent le patrimoine le plus important d'une vie. 
                Je vous accompagne dans tous vos projets immobiliers avec l'expertise nécessaire 
                pour sécuriser vos transactions et protéger vos investissements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="/contact" size="lg">
                  Prendre rendez-vous
                </Button>
                <Button href="tel:+33494135380" variant="secondary" size="lg">
                  Urgence : 04 94 13 53 80
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Mes services */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <SectionTitle 
              title="Mes domaines d'intervention"
              subtitle="Une expertise complète pour tous vos besoins en droit immobilier"
              className="mb-12"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-neutral-warm rounded-lg p-6 card-shadow">
                  <h3 className="text-xl font-serif font-semibold text-neutral-text mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-600">
                        <svg className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mon approche */}
        <section className="section-padding bg-neutral-warm">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <SectionTitle 
                  title="Votre patrimoine immobilier en sécurité"
                  subtitle="Expertise technique et accompagnement personnalisé"
                />
                <div className="space-y-6 text-gray-600 leading-relaxed">
                  <p>
                    Le droit immobilier est un domaine technique qui nécessite une connaissance 
                    approfondie des règles juridiques, fiscales et urbanistiques. {experienceText.strongOfYears}, 
                    je maîtrise tous les aspects de cette matière complexe.
                  </p>
                  <p>
                    Que vous soyez particulier ou professionnel, investisseur ou simple propriétaire, 
                    je vous accompagne dans vos projets avec la rigueur nécessaire pour éviter 
                    les pièges et sécuriser vos opérations immobilières.
                  </p>
                  <p>
                    Ma connaissance du marché immobilier local et des spécificités régionales 
                    me permet de vous conseiller efficacement et d'anticiper les difficultés 
                    pour protéger vos intérêts.
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-lg p-8 card-shadow">
                <h3 className="text-xl font-serif font-semibold text-neutral-text mb-6">
                  Mes garanties
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-3 mt-1">
                      <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-text">Sécurisation juridique</h4>
                      <p className="text-sm text-gray-600">Vérifications approfondies et due diligence</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-3 mt-1">
                      <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-text">Expertise locale</h4>
                      <p className="text-sm text-gray-600">Connaissance du marché régional</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-3 mt-1">
                      <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-text">Accompagnement global</h4>
                      <p className="text-sm text-gray-600">De la négociation à la signature</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-3 mt-1">
                      <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-text">Réactivité</h4>
                      <p className="text-sm text-gray-600">Respect des délais et urgences</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Processus */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <SectionTitle 
              title="Comment je vous accompagne"
              subtitle="Une méthode rigoureuse pour sécuriser vos projets immobiliers"
              centered
              className="mb-12"
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {processus.map((etape, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    {etape.etape}
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-neutral-text mb-3">
                    {etape.titre}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {etape.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-padding bg-neutral-warm">
          <div className="container-custom">
            <SectionTitle 
              title="Questions fréquentes"
              subtitle="Les réponses aux questions les plus courantes en droit immobilier"
              centered
              className="mb-12"
            />
            <div className="max-w-4xl mx-auto">
              <FaqAccordion faqs={faqData} />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-primary text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl lg:text-4xl font-serif font-semibold mb-6">
              Un projet immobilier en vue ?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Ne prenez pas de risques avec votre patrimoine. Contactez-moi pour sécuriser 
              votre transaction immobilière et protéger vos investissements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" variant="secondary" className="bg-white text-primary hover:bg-gray-100">
                Prendre rendez-vous
              </Button>
              <Button href="tel:+33494135380" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                Appel d'urgence
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
