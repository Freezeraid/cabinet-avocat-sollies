import Header from '../components/Header';
import Footer from '../components/Footer';
import StickyCTA from '../components/StickyCTA';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import Card from '../components/Card';
import Testimonial from '../components/Testimonial';
import { getExperienceText } from '../lib/utils';
import ContactForm from '../components/ContactForm';

export const metadata = {
  title: "Cabinet d'Avocat à Solliès-Pont | Votre défense, mon engagement",
  description: "Cabinet d'Avocat expérimenté à Solliès-Pont dans le Var. Spécialisé en droit de la famille, pénal et du travail. Accompagnement personnalisé et confidentiel. Prenez rendez-vous.",
  openGraph: {
    title: "Cabinet d'Avocat à Solliès-Pont | Votre défense, mon engagement",
    description: "Expertise juridique dans le Var - Droit de la famille, pénal, travail. Accompagnement personnalisé.",
  },
};

export default function HomePage() {
  const experienceText = getExperienceText();
  const domaines = [
    {
      title: "Droit de la Famille",
      description: "Divorce, pensions alimentaires, droit de visite, filiation. Un accompagnement humain dans les moments difficiles de votre vie familiale.",
      href: "/domaines/famille",
      icon: (
        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: "Droit du Travail",
      description: "Licenciement, rupture conventionnelle, prud'hommes. Défendez vos droits de salarié ou d'employeur.",
      href: "/domaines/travail",
      icon: (
        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0H8m8 0v6a2 2 0 01-2 2H10a2 2 0 01-2-2V6m8 0V4a2 2 0 00-2-2H10a2 2 0 00-2 2v2" />
        </svg>
      )
    },
    {
      title: "Droit Commercial",
      description: "Fonds de commerce, parts sociales, recouvrement de créances. Accompagnement des entreprises.",
      href: "/domaines/commercial",
      icon: (
        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      title: "Droit Immobilier",
      description: "Baux, voisinage, expulsions, droit rural. Une expertise complète en matière immobilière.",
      href: "/domaines/immobilier",
      icon: (
        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    }
  ];

  const preuves = [
    {
      title: experienceText.withExperience,
      description: "Une expertise reconnue au service de vos droits"
    },
    {
      title: "Accompagnement personnalisé",
      description: "Chaque dossier est unique, mon approche aussi"
    },
    {
      title: "Confidentialité absolue",
      description: "Secret professionnel et discrétion garantis"
    },
  ];

  const testimonials = [
    {
      quote: "MaîtreCécile Brun m'a accompagnée avec beaucoup d'humanité lors de mon divorce. Ses conseils ont été précieux et j'ai pu retrouver sérénité.",
      author: "Marie D.",
      role: "Droit de la famille"
    },
    {
      quote: "Professionnel, réactif et efficace. Grâce à son intervention, j'ai pu obtenir gain de cause aux prud'hommes rapidement.",
      author: "Pierre M.",
      role: "Droit du travail"
    },
    {
      quote: "Une défense remarquable qui m'a permis d'éviter le pire. Je recommande vivement ce cabinet pour sa compétence.",
      author: "Jean-Luc R.",
      role: "Droit pénal"
    }
  ];

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-neutral-warm to-white section-padding">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              {/* Photo et nom de l'avocate */}
              <div className="mb-8">
                <div className="w-48 h-48 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden">
                  <img 
                    src="/images/cecile-brun.webp"
                    alt="Maître Cécile Brun - Avocate"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h2 className="text-2xl text-primary font-serif font-semibold mb-2">
                Maître Cécile Brun
                </h2>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-serif font-bold text-neutral-text mb-6 text-balance">
                Votre défense, mon engagement
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed text-balance">
                Avocate à Solliès-Pont spécialisé en droit de la famille, du travail et commercial. 
                Un accompagnement juridique de qualité, proche de vous dans le Var.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
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

        {/* Preuves de confiance */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <SectionTitle 
              title="Pourquoi me choisir ?"
              subtitle="Des valeurs fortes et une expertise reconnue pour vous accompagner dans vos démarches juridiques"
              centered
              className="mb-12"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {preuves.map((preuve, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-8 h-8 bg-primary rounded-full"></div>
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-neutral-text mb-2">
                    {preuve.title}
                  </h3>
                  <p className="text-gray-600">
                    {preuve.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Domaines d'intervention */}
        <section className="section-padding bg-neutral-warm">
          <div className="container-custom">
            <SectionTitle 
              title="Mes domaines d'expertise"
              subtitle="Une approche spécialisée pour répondre à tous vos besoins juridiques avec compétence et réactivité"
              className="mb-12"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {domaines.map((domaine, index) => (
                <Card
                  key={index}
                  title={domaine.title}
                  description={domaine.description}
                  href={domaine.href}
                  icon={domaine.icon}
                  buttonText="Découvrir"
                />
              ))}
            </div>
          </div>
        </section>

        {/* Process de prise de contact */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <SectionTitle 
              title="Comment ça marche ?"
              subtitle="Un processus simple et transparent pour bénéficier de mes services juridiques"
              centered
              className="mb-12"
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-serif font-semibold text-neutral-text mb-3">
                  Premier contact
                </h3>
                <p className="text-gray-600">
                  Appelez-moi ou remplissez le formulaire. J'évalue rapidement votre situation et fixe un rendez-vous.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-serif font-semibold text-neutral-text mb-3">
                  Consultation
                </h3>
                <p className="text-gray-600">
                  Analyse approfondie de votre dossier, conseil juridique personnalisé et proposition de stratégie adaptée.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-serif font-semibold text-neutral-text mb-3">
                  Accompagnement
                </h3>
                <p className="text-gray-600">
                  Suivi régulier de votre affaire, information transparente sur l'avancement et défense de vos intérêts.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Témoignages */}
        {/* <section className="section-padding bg-neutral-warm">
          <div className="container-custom">
            <SectionTitle 
              title="Ils me font confiance"
              subtitle="Découvrez les témoignages de mes clients satisfaits"
              centered
              className="mb-12"
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Testimonial
                  key={index}
                  quote={testimonial.quote}
                  author={testimonial.author}
                  role={testimonial.role}
                />
              ))}
            </div>
          </div>
        </section> 
      */}

        {/* Contact express */}
        <section className="section-padding bg-primary text-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl lg:text-4xl font-serif font-semibold mb-6">
                    Besoin d'un conseil juridique ?
                  </h2>
                  <p className="text-xl mb-6 opacity-90">
                    N'attendez pas que la situation se complique. Contactez-moi dès maintenant pour une première évaluation de votre dossier.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button href="/contact" variant="secondary" className="bg-white text-primary hover:bg-gray-100">
                      Prendre rendez-vous
                    </Button>
              <Button href="tel:+33494135380" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                04 94 13 53 80
              </Button>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <h3 className="text-xl font-serif font-semibold mb-4">
                    Contact rapide
                  </h3>
                  <ContactForm isFooter={true} />
                </div>
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
