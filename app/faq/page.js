import Header from '../../components/Header';
import Footer from '../../components/Footer';
import StickyCTA from '../../components/StickyCTA';
import SectionTitle from '../../components/SectionTitle';
import Breadcrumbs from '../../components/Breadcrumbs';
import FaqAccordion from '../../components/FaqAccordion';
import Button from '../../components/Button';

export const metadata = {
  title: "FAQ - Questions Fréquentes | Cabinet d'Avocat Solliès-Pont",
  description: "Trouvez les réponses aux questions les plus fréquentes sur mes services juridiques : délais, procédures, coûts, aide juridictionnelle. Cabinet d'Avocat Solliès-Pont.",
  openGraph: {
    title: "FAQ - Questions Fréquentes | Cabinet d'Avocat Solliès-Pont",
    description: "Réponses aux questions fréquentes sur mes services juridiques à Solliès-Pont. Délais, procédures, coûts.",
  },
};

export default function FaqPage() {
  const breadcrumbs = [
    { label: 'Accueil', href: '/' },
    { label: 'FAQ' },
  ];

  const faqData = [
    {
      question: "Comment prendre rendez-vous ?",
      answer: (
        <div>
          <p>Vous pouvez prendre rendez-vous de plusieurs façons :</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Par téléphone au 04 94 13 53 80 (du lundi au vendredi, 9h-18h)</li>
            <li>Par email à cecile.brun@avocatsollies.fr</li>
            <li>Via mon formulaire de contact en ligne</li>
            <li>En vous présentant directement au cabinet (sur rendez-vous de préférence)</li>
          </ul>
          <p className="mt-2">Je vous proposerai un rendez-vous dans les 48h suivant votre demande.</p>
        </div>
      )
    },
    {
      question: "Combien coûte une consultation d'avocat ?",
      answer: "Le premier rendez-vous de consultation dure entre 45 minutes et 1 heure. Ce montant est déductible des honoraires si vous me confiez votre dossier. J'accepte les paiements en espèces, par chèque ou virement bancaire."
    },
    {
      question: "Puis-je bénéficier de l'aide juridictionnelle ?",
      answer: (
        <div>
          <p>Oui, mon cabinet accepte l'aide juridictionnelle. Vous pouvez en bénéficier si vos revenus ne dépassent pas certains plafonds :</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Aide juridictionnelle totale : revenus inférieurs à 1 043€/mois</li>
            <li>Aide juridictionnelle partielle : revenus entre 1 043€ et 1 565€/mois</li>
          </ul>
          <p className="mt-2">Je vous aide à constituer votre dossier de demande d'aide juridictionnelle.</p>
        </div>
      )
    },
    {
      question: "Quels documents dois-je apporter lors du premier rendez-vous ?",
      answer: (
        <div>
          <p>Pour optimiser notre premier entretien, apportez :</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Une pièce d'identité en cours de validité</li>
            <li>Tous les documents relatifs à votre affaire (contrats, courriers, jugements, etc.)</li>
            <li>Les correspondances échangées avec la partie adverse</li>
            <li>Vos justificatifs de revenus si vous souhaitez l'aide juridictionnelle</li>
            <li>Tout élément de preuve (photos, témoignages, expertises, etc.)</li>
          </ul>
        </div>
      )
    },
    {
      question: "Combien de temps dure une procédure juridique ?",
      answer: "La durée varie considérablement selon le type d'affaire et la juridiction. Par exemple : un divorce par consentement mutuel prend 1 à 3 mois, un divorce contentieux 6 mois à 2 ans, une procédure aux prud'hommes 12 à 18 mois. Je vous donne une estimation réaliste dès le premier rendez-vous."
    },
    {
      question: "Comment sont calculés les honoraires d'avocat ?",
      answer: (
        <div>
          <p>Mes honoraires peuvent être calculés selon différentes modalités :</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li><strong>Forfait :</strong> montant fixe défini à l'avance (divorce amiable, rédaction d'actes)</li>
            <li><strong>Horaire :</strong> facturation au temps passé (entre 200€ et 400€ HT/heure selon la complexité)</li>
            <li><strong>Résultat :</strong> honoraires liés au succès de l'affaire (sous conditions légales)</li>
          </ul>
          <p className="mt-2">Une convention d'honoraires est systématiquement signée avant le début de mon intervention.</p>
        </div>
      )
    },
    {
      question: "L'avocat est-il tenu au secret professionnel ?",
      answer: "Absolument. Le secret professionnel de l'avocat est absolu et perpétuel. Je ne peux divulguer aucune information concernant votre affaire, même après la fin de ma mission. Ce secret couvre tous mes échanges, documents et confidences."
    },
    {
      question: "Puis-je régler mes honoraires en plusieurs fois ?",
      answer: "Oui, je propose des facilités de paiement adaptées à votre situation. Un échéancier peut être mis en place, notamment pour les gros dossiers. N'hésitez pas à me faire part de vos contraintes financières dès le premier rendez-vous."
    },
    {
      question: "Comment se déroule une médiation ?",
      answer: "La médiation est un mode alternatif de résolution des conflits. Un médiateur neutre aide les parties à trouver un accord. C'est plus rapide et moins coûteux qu'un procès. Je peux vous accompagner en médiation ou vous orienter vers des médiateurs qualifiés selon votre situation."
    },
    {
      question: "Puis-je consulter mon dossier à tout moment ?",
      answer: "Oui, vous avez un droit d'accès permanent à votre dossier. Vous pouvez prendre rendez-vous pour le consulter au cabinet ou demander des copies des pièces. Je me tiens également informé régulièrement de l'évolution de votre affaire."
    },
    {
      question: "Comment contester une décision de justice ?",
      answer: "Selon la décision, vous disposez de différents recours : appel (dans un délai d'un mois généralement), pourvoi en cassation, ou opposition. Les délais sont stricts et ne peuvent être prolongés. Contactez-moi rapidement après réception d'une décision pour étudier les recours possibles."
    },
  ];

  const categories = [
    {
      title: "Première consultation",
      description: "Tout savoir sur votre premier rendez-vous",
      icon: (
        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Procédures et délais",
      description: "Comprendre le déroulement des procédures",
      icon: (
        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Coûts et paiement",
      description: "Informations sur les tarifs et modalités",
      icon: (
        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      )
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
                Questions fréquentes
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Trouvez rapidement les réponses aux questions les plus courantes concernant mes services juridiques, 
                les procédures, les tarifs et le fonctionnement de mon cabinet.
              </p>
              <Button href="/contact" size="lg">
                Poser une question
              </Button>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <SectionTitle 
              title="Thématiques principales"
              centered
              className="mb-12"
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {categories.map((category, index) => (
                <div key={index} className="bg-neutral-warm rounded-lg p-6 text-center card-shadow">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-serif font-semibold text-neutral-text mb-2">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {category.description}
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
              title="Toutes vos questions"
              centered
              className="mb-12"
            />
            <div className="max-w-4xl mx-auto">
              <FaqAccordion faqs={faqData} />
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="section-padding bg-primary text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl lg:text-4xl font-serif font-semibold mb-6">
              Vous ne trouvez pas la réponse à votre question ?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Je suis est là pour vous aider. Contactez-moi directement 
              pour obtenir des réponses personnalisées à vos questions juridiques.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" variant="secondary" className="bg-white text-primary hover:bg-gray-100">
                Me contacter
              </Button>
              <Button href="tel:+33494135380" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                04 94 13 53 80
              </Button>
            </div>
          </div>
        </section>

        {/* Informations utiles */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <SectionTitle 
              title="Informations utiles"
              centered
              className="mb-12"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-neutral-warm rounded-lg p-6">
                <h3 className="text-lg font-serif font-semibold text-neutral-text mb-3">
                  Urgences
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  En cas d'urgence juridique, contactez-moi immédiatement. 
                </p>
                <a href="tel:+33494135380" className="text-primary font-medium text-sm hover:underline">
                  Appelez maintenant →
                </a>
              </div>
              
              <div className="bg-neutral-warm rounded-lg p-6">
                <h3 className="text-lg font-serif font-semibold text-neutral-text mb-3">
                  Délais de recours
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Attention aux délais ! Beaucoup de recours ont des délais stricts. 
                  Contactez-moi rapidement après réception d'une décision.
                </p>
                <Button href="/contact" variant="ghost" size="sm" className="p-0 h-auto text-sm">
                  Vérifier un délai →
                </Button>
              </div>
              
              <div className="bg-neutral-warm rounded-lg p-6">
                <h3 className="text-lg font-serif font-semibold text-neutral-text mb-3">
                  Aide juridictionnelle
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Vous pouvez peut-être bénéficier d'une prise en charge totale 
                  ou partielle de vos frais d'avocat selon vos revenus.
                </p>
                <Button href="/contact" variant="ghost" size="sm" className="p-0 h-auto text-sm">
                  Vérifier mon éligibilité →
                </Button>
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
