import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import StickyCTA from '../../../components/StickyCTA';
import SectionTitle from '../../../components/SectionTitle';
import Breadcrumbs from '../../../components/Breadcrumbs';
import Button from '../../../components/Button';
import FaqAccordion from '../../../components/FaqAccordion';
import { getExperienceText } from '../../../lib/utils';

export const metadata = {
  title: "Avocate Droit de la Famille à Solliès-Pont | Divorce, Garde d'Enfants - Var",
  description: "Avocate spécialisée en droit de la famille à Solliès-Pont. Divorce, garde d'enfants, pension alimentaire, succession. Accompagnement humain et professionnel dans le Var.",
  openGraph: {
    title: "Avocate Droit de la Famille à Solliès-Pont | Divorce, Garde d'Enfants",
    description: "Expertise en droit de la famille : divorce, garde d'enfants, pension alimentaire. Accompagnement personnalisé à Solliès-Pont.",
  },
};

export default function DroitFamillePage() {
  const experienceText = getExperienceText();
  const breadcrumbs = [
    { label: 'Accueil', href: '/' },
    { label: 'Domaines', href: '/domaines' },
    { label: 'Droit de la Famille' },
  ];

  const services = [
    {
      title: "Divorce par consentement mutuel",
      description: "Procédure simplifiée et rapide pour les couples d'accord sur les modalités de leur séparation.",
      details: [
        "Rédaction de la convention de divorce",
        "Accompagnement dans les négociations",
        "Finalisation en quelques semaines",
        "Coûts maîtrisés"
      ]
    },
    {
      title: "Divorce contentieux",
      description: "Défense de vos intérêts lors de divorces conflictuels nécessitant l'intervention du juge.",
      details: [
        "Divorce pour faute",
        "Divorce pour altération du lien conjugal",
        "Divorce accepté",
        "Protection de vos droits patrimoniaux"
      ]
    },
    {
      title: "Garde d'enfants et droit de visite",
      description: "Organisation de la résidence des enfants et des droits de visite dans l'intérêt de l'enfant.",
      details: [
        "Résidence alternée ou chez un parent",
        "Droits de visite et d'hébergement",
        "Modification des modalités",
        "Médiation familiale"
      ]
    },
    {
      title: "Pension alimentaire",
      description: "Fixation et révision des pensions alimentaires pour enfants et ex-conjoints.",
      details: [
        "Calcul selon les revenus",
        "Révision en cas de changement",
        "Recouvrement des impayés",
        "Saisie sur salaire si nécessaire"
      ]
    },
    {
      title: "Succession et testament",
      description: "Accompagnement dans les successions et rédaction de testaments pour protéger vos proches.",
      details: [
        "Règlement de succession",
        "Rédaction de testament",
        "Donation entre époux",
        "Contestation de testament"
      ]
    },
    {
      title: "Adoption et filiation",
      description: "Procédures d'adoption et questions de filiation pour sécuriser les liens familiaux.",
      details: [
        "Adoption simple et plénière",
        "Reconnaissance de paternité",
        "Contestation de filiation",
        "Adoption internationale"
      ]
    }
  ];

  const processus = [
    {
      etape: "1",
      titre: "Premier entretien",
      description: "Écoute attentive de votre situation familiale et évaluation des enjeux juridiques et humains."
    },
    {
      etape: "2",
      titre: "Stratégie adaptée",
      description: "Élaboration d'une approche personnalisée privilégiant la négociation quand c'est possible."
    },
    {
      etape: "3",
      titre: "Accompagnement",
      description: "Suivi régulier avec une attention particulière aux aspects humains et à la protection des enfants."
    }
  ];

  const faqData = [
    {
      question: "Combien de temps dure une procédure de divorce ?",
      answer: "La durée varie selon le type de divorce : 1 à 3 mois pour un divorce par consentement mutuel, 6 mois à 2 ans pour un divorce contentieux selon la complexité du dossier."
    },
    {
      question: "Quels documents dois-je apporter pour un divorce ?",
      answer: "Livret de famille, contrat de mariage, relevés bancaires, bulletins de salaire, justificatifs de patrimoine, et tout document relatif aux enfants (certificats de scolarité, frais médicaux, etc.)."
    },
    {
      question: "Comment est calculée la pension alimentaire ?",
      answer: "Elle est calculée selon les revenus des parents, les besoins de l'enfant, et le mode de garde. Une table de référence existe mais le juge peut s'en écarter selon les circonstances."
    },
    {
      question: "Peut-on modifier la garde des enfants après le divorce ?",
      answer: "Oui, en cas de changement de circonstances (déménagement, nouveau travail, etc.), il est possible de demander une modification au juge aux affaires familiales."
    },
    {
      question: "Que faire en cas de non-paiement de pension alimentaire ?",
      answer: "Plusieurs solutions existent : paiement direct par l'employeur, saisie sur compte bancaire, ou intervention de la CAF. Je vous accompagne dans ces démarches."
    },
    {
      question: "L'aide juridictionnelle est-elle possible en droit de la famille ?",
      answer: "Oui, selon vos revenus, vous pouvez bénéficier d'une prise en charge totale ou partielle des frais d'avocat. Je vous aide à constituer votre dossier."
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
                Avocate en Droit de la Famille à Solliès-Pont
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Les questions familiales nécessitent une approche à la fois juridique et humaine. 
                Je vous accompagne avec empathie et professionnalisme dans tous les aspects 
                du droit de la famille, en privilégiant toujours l'intérêt des enfants.
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
              subtitle="Une expertise complète pour toutes vos problématiques familiales"
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
                  title="Une approche humaine du droit"
                  subtitle="Parce que derrière chaque dossier, il y a une famille"
                />
                <div className="space-y-6 text-gray-600 leading-relaxed">
                  <p>
                    Le droit de la famille touche aux aspects les plus intimes de votre vie. 
                    C'est pourquoi je privilégie une approche empathique et respectueuse, 
                    en prenant le temps de comprendre votre situation unique.
                  </p>
                  <p>
                    Mon objectif est de trouver des solutions durables qui préservent 
                    l'intérêt des enfants et permettent à chacun de se reconstruire. 
                    Je favorise la négociation et la médiation quand c'est possible, 
                    tout en étant fermes dans la défense de vos droits.
                  </p>
                  <p>
                    Avec {experienceText.withMore} d'expérience en droit de la famille, j'ai
                    accompagné des centaines de familles dans leurs moments difficiles, 
                    toujours avec la même exigence de confidentialité et de respect.
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-lg p-8 card-shadow">
                <h3 className="text-xl font-serif font-semibold text-neutral-text mb-6">
                  Mes engagements
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-3 mt-1">
                      <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-text">Écoute attentive</h4>
                      <p className="text-sm text-gray-600">Je prends le temps de comprendre votre situation</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-3 mt-1">
                      <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-text">Confidentialité absolue</h4>
                      <p className="text-sm text-gray-600">Secret professionnel et discrétion garantis</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-3 mt-1">
                      <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-text">Disponibilité</h4>
                      <p className="text-sm text-gray-600">Réactivité pour les situations urgentes</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-3 mt-1">
                      <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-text">Transparence</h4>
                      <p className="text-sm text-gray-600">Honoraires clairs et information régulière</p>
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
              subtitle="Un processus pensé pour vous rassurer et vous guider"
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
              subtitle="Les réponses aux questions les plus courantes en droit de la famille"
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
              Vous traversez une période difficile ?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Ne restez pas seul face à vos problèmes familiaux. 
              Contactez-moi pour un premier entretien confidentiel et sans engagement.
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
