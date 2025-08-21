import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import StickyCTA from '../../../components/StickyCTA';
import SectionTitle from '../../../components/SectionTitle';
import Breadcrumbs from '../../../components/Breadcrumbs';
import Button from '../../../components/Button';
import FaqAccordion from '../../../components/FaqAccordion';
import { getExperienceText } from '../../../lib/utils';

export const metadata = {
  title: "Avocate Droit Commercial à Solliès-Pont | Entreprises, Contrats - Var",
  description: "Avocate spécialisé en droit commercial à Solliès-Pont. Création d'entreprise, contrats commerciaux, litiges, recouvrement. Conseil juridique pour entreprises dans le Var.",
  openGraph: {
    title: "Avocate Droit Commercial à Solliès-Pont | Entreprises, Contrats",
    description: "Expertise en droit commercial : création d'entreprise, contrats, litiges commerciaux. Accompagnement juridique des entreprises.",
  },
};

export default function DroitCommercialPage() {
  const experienceText = getExperienceText();
  const breadcrumbs = [
    { label: 'Accueil', href: '/' },
    { label: 'Domaines', href: '/domaines' },
    { label: 'Droit Commercial' },
  ];

  const services = [
    {
      title: "Création et structuration d'entreprise",
      description: "Accompagnement dans le choix de la forme juridique et la création de votre entreprise.",
      details: [
        "Choix de la forme sociale (SARL, SAS, SA...)",
        "Rédaction des statuts",
        "Formalités de création",
        "Optimisation fiscale et sociale"
      ]
    },
    {
      title: "Contrats commerciaux",
      description: "Rédaction et négociation de tous types de contrats pour sécuriser vos relations d'affaires.",
      details: [
        "Contrats de vente et d'achat",
        "Contrats de distribution",
        "Contrats de prestation de services",
        "Conditions générales de vente"
      ]
    },
    {
      title: "Litiges commerciaux",
      description: "Résolution des conflits entre entreprises et défense de vos intérêts commerciaux.",
      details: [
        "Contentieux contractuels",
        "Concurrence déloyale",
        "Responsabilité professionnelle",
        "Procédures d'urgence (référés)"
      ]
    },
    {
      title: "Recouvrement de créances",
      description: "Récupération efficace de vos créances impayées par voie amiable ou judiciaire.",
      details: [
        "Mise en demeure et relances",
        "Procédures simplifiées",
        "Saisies conservatoires",
        "Injonction de payer"
      ]
    },
    {
      title: "Cession et acquisition d'entreprise",
      description: "Accompagnement dans les opérations de transmission et d'acquisition d'entreprises.",
      details: [
        "Due diligence juridique",
        "Négociation des conditions",
        "Rédaction des actes de cession",
        "Garanties d'actif et de passif"
      ]
    },
    {
      title: "Difficultés d'entreprise",
      description: "Prévention et traitement des difficultés financières pour sauvegarder votre activité.",
      details: [
        "Procédures amiables",
        "Sauvegarde et redressement",
        "Liquidation judiciaire",
        "Responsabilité des dirigeants"
      ]
    }
  ];

  const processus = [
    {
      etape: "1",
      titre: "Audit juridique",
      description: "Analyse de votre situation et identification des enjeux juridiques et commerciaux."
    },
    {
      etape: "2",
      titre: "Conseil stratégique",
      description: "Élaboration d'une stratégie juridique adaptée à vos objectifs business."
    },
    {
      etape: "3",
      titre: "Mise en œuvre",
      description: "Exécution des actions juridiques avec un suivi personnalisé et proactif."
    }
  ];

  const faqData = [
    {
      question: "Quelle forme juridique choisir pour mon entreprise ?",
      answer: "Le choix dépend de nombreux facteurs : nombre d'associés, capital, régime fiscal souhaité, responsabilité. La SARL convient aux PME familiales, la SAS offre plus de souplesse pour les projets de croissance."
    },
    {
      question: "Comment récupérer une facture impayée ?",
      answer: "Commencez par une relance amiable, puis une mise en demeure. Si cela échoue, l'injonction de payer est une procédure rapide et économique pour les créances certaines."
    },
    {
      question: "Qu'est-ce qu'un contrat de distribution ?",
      answer: "C'est un contrat par lequel un fournisseur confie à un distributeur la commercialisation de ses produits sur un territoire donné, avec des obligations réciproques précises."
    },
    {
      question: "Comment se protéger de la concurrence déloyale ?",
      answer: "Il faut prouver des actes de concurrence déloyale (dénigrement, confusion, désorganisation). L'action en justice peut obtenir des dommages-intérêts et l'arrêt des pratiques."
    },
    {
      question: "Que faire en cas de difficultés financières ?",
      answer: "Agissez rapidement ! Les procédures amiables (mandat ad hoc, conciliation) permettent de négocier avec les créanciers. Plus vous attendez, plus les options se réduisent."
    },
    {
      question: "Comment évaluer une entreprise à acquérir ?",
      answer: "L'évaluation combine plusieurs méthodes : patrimoniale, par les flux, par comparaison. Un audit juridique et financier (due diligence) est indispensable avant tout achat."
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
                Avocate en Droit Commercial à Solliès-Pont
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Le droit commercial régit la vie des entreprises et leurs relations d'affaires. 
                J'accompagne les entrepreneurs, PME et grandes entreprises dans tous les aspects 
                juridiques de leur activité, de la création aux difficultés, en passant par le développement.
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
              subtitle="Une expertise complète pour accompagner votre entreprise à chaque étape"
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
                  title="Un partenaire juridique de confiance"
                  subtitle="Expertise et pragmatisme au service de votre réussite"
                />
                <div className="space-y-6 text-gray-600 leading-relaxed">
                  <p>
                    En tant qu'avocate en droit commercial, je comprends les enjeux économiques 
                    de votre entreprise. Mon approche allie rigueur juridique et pragmatisme 
                    business pour vous proposer des solutions concrètes et efficaces.
                  </p>
                  <p>
                    Que vous soyez entrepreneur individuel, dirigeant de PME ou responsable 
                    juridique d'un grand groupe, je m'adapte à vos besoins et contraintes 
                    pour vous accompagner dans vos projets de développement.
                  </p>
                  <p>
                    Ma connaissance approfondie du tissu économique local et {experienceText.myPractice} 
                    me permettent d'anticiper les risques et de sécuriser 
                    vos opérations commerciales.
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-lg p-8 card-shadow">
                <h3 className="text-xl font-serif font-semibold text-neutral-text mb-6">
                  Mes valeurs
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-3 mt-1">
                      <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-text">Pragmatisme</h4>
                      <p className="text-sm text-gray-600">Solutions concrètes adaptées à vos enjeux</p>
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
                      <p className="text-sm text-gray-600">Réponse rapide aux urgences business</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-3 mt-1">
                      <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-text">Proximité</h4>
                      <p className="text-sm text-gray-600">Relation de confiance et suivi personnalisé</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-3 mt-1">
                      <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-text">Excellence</h4>
                      <p className="text-sm text-gray-600">Expertise reconnue et mise à jour constante</p>
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
              subtitle="Une méthode structurée pour sécuriser vos opérations commerciales"
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
              subtitle="Les réponses aux questions les plus courantes en droit commercial"
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
              Votre entreprise a besoin d'un conseil juridique ?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Ne prenez pas de risques juridiques inutiles. Contactez-moi pour sécuriser 
              vos opérations commerciales et développer votre activité en toute sérénité.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" variant="secondary" className="bg-white text-primary hover:bg-gray-100">
                Prendre rendez-vous
              </Button>
              <Button href="tel:+33494135380" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                Appelez maintenant
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
