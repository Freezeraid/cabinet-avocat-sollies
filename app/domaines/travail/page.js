import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import StickyCTA from '../../../components/StickyCTA';
import SectionTitle from '../../../components/SectionTitle';
import Breadcrumbs from '../../../components/Breadcrumbs';
import Button from '../../../components/Button';
import FaqAccordion from '../../../components/FaqAccordion';
import { getExperienceText } from '../../../lib/utils';

export const metadata = {
  title: "Avocate Droit du Travail à Solliès-Pont | Licenciement, Harcèlement - Var",
  description: "Avocate spécialisé en droit du travail à Solliès-Pont. Licenciement abusif, harcèlement, rupture conventionnelle, prud'hommes. Défense des salariés et employeurs dans le Var.",
  openGraph: {
    title: "Avocate Droit du Travail à Solliès-Pont | Licenciement, Harcèlement",
    description: "Expertise en droit du travail : licenciement, harcèlement, prud'hommes. Défense efficace des droits des salariés et employeurs.",
  },
};

export default function DroitTravailPage() {
  const experienceText = getExperienceText();
  const breadcrumbs = [
    { label: 'Accueil', href: '/' },
    { label: 'Domaines', href: '/domaines' },
    { label: 'Droit du Travail' },
  ];

  const services = [
    {
      title: "Licenciement et rupture du contrat",
      description: "Contestation des licenciements abusifs et accompagnement dans les procédures de rupture.",
      details: [
        "Licenciement pour motif personnel",
        "Licenciement économique",
        "Rupture conventionnelle",
        "Calcul des indemnités"
      ]
    },
    {
      title: "Harcèlement et discrimination",
      description: "Protection contre le harcèlement moral, sexuel et toutes formes de discrimination au travail.",
      details: [
        "Harcèlement moral et sexuel",
        "Discrimination à l'embauche",
        "Inégalités de traitement",
        "Constitution de dossier de preuves"
      ]
    },
    {
      title: "Conseil aux Prud'hommes",
      description: "Représentation devant le Conseil de Prud'hommes pour défendre vos droits de salarié.",
      details: [
        "Procédure prud'homale",
        "Référé prud'homal",
        "Négociation et conciliation",
        "Exécution des jugements"
      ]
    },
    {
      title: "Temps de travail et rémunération",
      description: "Réclamation des heures supplémentaires et respect du droit du temps de travail.",
      details: [
        "Heures supplémentaires impayées",
        "Temps de travail effectif",
        "Repos compensateur",
        "Bulletins de paie litigieux"
      ]
    },
    {
      title: "Accident du travail et maladie",
      description: "Accompagnement lors d'accidents du travail et de maladies professionnelles.",
      details: [
        "Reconnaissance accident du travail",
        "Maladie professionnelle",
        "Inaptitude et reclassement",
        "Indemnisation des préjudices"
      ]
    },
    {
      title: "Conseil aux employeurs",
      description: "Accompagnement juridique des entreprises dans la gestion des relations sociales.",
      details: [
        "Rédaction de contrats de travail",
        "Procédures disciplinaires",
        "Restructuration d'entreprise",
        "Prévention des risques juridiques"
      ]
    }
  ];

  const processus = [
    {
      etape: "1",
      titre: "Analyse de la situation",
      description: "Étude approfondie de votre dossier et évaluation de vos droits et recours possibles."
    },
    {
      etape: "2",
      titre: "Stratégie juridique",
      description: "Élaboration d'une stratégie adaptée privilégiant la négociation ou la procédure selon le contexte."
    },
    {
      etape: "3",
      titre: "Action et suivi",
      description: "Mise en œuvre des actions juridiques avec un suivi régulier et une information transparente."
    }
  ];

  const faqData = [
    {
      question: "Quels sont les délais pour contester un licenciement ?",
      answer: "Vous disposez de 12 mois à compter de la notification du licenciement pour saisir le Conseil de Prud'hommes. Il est recommandé d'agir rapidement pour préserver vos droits."
    },
    {
      question: "Comment prouver un harcèlement moral au travail ?",
      answer: "Il faut constituer un faisceau d'indices : témoignages de collègues, emails, courriers, certificats médicaux, arrêts maladie. Je vous aide à rassembler les preuves nécessaires."
    },
    {
      question: "Qu'est-ce qu'une rupture conventionnelle ?",
      answer: "C'est un mode de rupture du contrat de travail d'un commun accord entre l'employeur et le salarié, donnant droit aux allocations chômage et à des indemnités."
    },
    {
      question: "Combien de temps dure une procédure prud'homale ?",
      answer: "En moyenne 12 à 18 mois, mais cela peut varier selon la complexité du dossier et l'encombrement du tribunal. Une procédure de référé peut être plus rapide (2-3 mois)."
    },
    {
      question: "Puis-je récupérer mes heures supplémentaires non payées ?",
      answer: "Oui, vous pouvez réclamer vos heures supplémentaires sur les 3 dernières années. Il faut pouvoir prouver leur réalisation (badges, emails, témoignages)."
    },
    {
      question: "L'aide juridictionnelle est-elle possible pour les prud'hommes ?",
      answer: "Oui, selon vos revenus. De plus, en cas de victoire, l'employeur peut être condamné à rembourser vos frais d'avocat (article 700 du CPC)."
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
                Avocate en Droit du Travail à Solliès-Pont
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Le droit du travail protège les salariés et encadre les relations professionnelles. 
                Je défends vos droits avec détermination, que vous soyez salarié ou employeur, 
                pour faire respecter la législation sociale et obtenir les réparations dues.
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
              subtitle="Une expertise complète pour toutes vos problématiques de droit du travail"
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
                  title="Une défense efficace de vos droits"
                  subtitle="Expertise et détermination au service de la justice sociale"
                />
                <div className="space-y-6 text-gray-600 leading-relaxed">
                  <p>
                    Le droit du travail est un domaine complexe en constante évolution. 
                    {experienceText.strongOfYears}, je maîtrise parfaitement cette 
                    matière pour vous offrir une défense efficace et adaptée à votre situation.
                  </p>
                  <p>
                    Que vous soyez victime d'un licenciement abusif, de harcèlement, 
                    ou que vous souhaitiez faire valoir vos droits, je mets tout en œuvre 
                    pour obtenir la reconnaissance de vos préjudices et leur juste indemnisation.
                  </p>
                  <p>
                    J'accompagne également les employeurs dans la gestion de leurs 
                    relations sociales, en privilégiant la prévention des conflits 
                    et le respect de la réglementation.
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-lg p-8 card-shadow">
                <h3 className="text-xl font-serif font-semibold text-neutral-text mb-6">
                  Mes atouts
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-3 mt-1">
                      <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-text">Expertise reconnue</h4>
                      <p className="text-sm text-gray-600">{experienceText.inField('droit social')}</p>
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
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-3 mt-1">
                      <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-text">Négociation</h4>
                      <p className="text-sm text-gray-600">Recherche de solutions amiables</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-3 mt-1">
                      <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-text">Pugnacité</h4>
                      <p className="text-sm text-gray-600">Défense ferme de vos intérêts</p>
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
              subtitle="Une méthode éprouvée pour défendre efficacement vos droits"
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
              subtitle="Les réponses aux questions les plus courantes en droit du travail"
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
              Vos droits de salarié sont-ils respectés ?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Ne laissez pas vos droits être bafoués. Contactez-moi pour une analyse 
              de votre situation et la défense de vos intérêts professionnels.
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
