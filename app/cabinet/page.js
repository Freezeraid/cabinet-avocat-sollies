import Header from '../../components/Header';
import Footer from '../../components/Footer';
import StickyCTA from '../../components/StickyCTA';
import SectionTitle from '../../components/SectionTitle';
import Breadcrumbs from '../../components/Breadcrumbs';
import Button from '../../components/Button';
import { getExperienceText } from '../../lib/utils';

export default function CabinetPage() {
  const experienceText = getExperienceText();

  const metadata = {
    title: "Le Cabinet d'Avocat | Présentation et Valeurs - Solliès-Pont",
    description: `Découvrez mon Cabinet d'Avocat à Solliès-Pont : mon histoire, mes valeurs et mon approche personnalisée du droit. ${experienceText.withExperience} à votre service.`,
    openGraph: {
      title: "Le Cabinet d'Avocat | Présentation et Valeurs - Solliès-Pont",
      description: "Cabinet d'Avocat expérimenté à Solliès-Pont. Découvrez mon parcours et mes valeurs.",
    },
  };
  const breadcrumbs = [
    { label: 'Accueil', href: '/' },
    { label: 'Le Cabinet' },
  ];

  const valeurs = [
    {
      title: "Écoute et Empathie",
      description: "Chaque situation est unique. Je prends le temps de comprendre vos préoccupations et vos objectifs pour vous proposer la stratégie juridique la plus adaptée."
    },
    {
      title: "Expertise et Rigueur",
      description: "Ma formation continue et ma veille juridique permanente me permettent de vous offrir des conseils précis et actualisés dans tous mes domaines d'intervention."
    },
    {
      title: "Transparence",
      description: "Honoraires clairs dès le premier rendez-vous, information régulière sur l'avancement de votre dossier, explications pédagogiques des enjeux juridiques."
    },
    {
      title: "Disponibilité",
      description: "Je m'engage à être présente quand vous en avez besoin, avec une réactivité particulière pour les situations d'urgence."
    }
  ];

  const methode = [
    {
      etape: "1",
      titre: "Premier rendez-vous",
      description: "Analyse approfondie de votre situation, évaluation des enjeux juridiques et présentation des différentes options qui s'offrent à vous."
    },
    {
      etape: "2",
      titre: "Stratégie personnalisée",
      description: "Élaboration d'une stratégie sur mesure, adaptée à vos objectifs et à votre budget, avec un calendrier prévisionnel des actions à mener."
    },
    {
      etape: "3",
      titre: "Mise en œuvre",
      description: "Exécution de la stratégie définie avec un suivi régulier, une information transparente et une adaptation si nécessaire selon l'évolution du dossier."
    },
    {
      etape: "4",
      titre: "Suivi et accompagnement",
      description: "Accompagnement jusqu'à la résolution complète de votre affaire, avec un suivi post-dossier si nécessaire pour s'assurer de la bonne exécution des décisions."
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
                Un cabinet à votre écoute {experienceText.since}
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Installée au cœur de Solliès-Pont, je vous accompagne avec expertise et humanité 
                dans tous vos défis juridiques. Une approche personnalisée pour des solutions durables.
              </p>
              <Button href="/contact" size="lg">
                Prendre rendez-vous
              </Button>
            </div>
          </div>
        </section>

        {/* Histoire du cabinet */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <SectionTitle 
                  title="Mon histoire"
                  subtitle="Un engagement de longue date au service de la justice"
                />
                <div className="space-y-6 text-gray-600 leading-relaxed">
                  <p>
                    Fondé en 2003, mon cabinet s'est construit sur des valeurs fortes : l'excellence juridique, 
                    l'écoute attentive et l'accompagnement humain. Depuis plus de deux décennies, j'ai eu 
                    l'honneur de défendre et conseiller des centaines de clients dans le Var et au-delà.
                  </p>
                  <p>
                    Mon implantation à Solliès-Pont me permet d'être proche de mes clients tout en bénéficiant 
                    d'un accès privilégié aux juridictions de Toulon et Draguignan. Cette proximité géographique 
                    se double d'une proximité humaine qui fait la force de mon cabinet.
                  </p>
                  <p>
                    Au fil des années, j'ai développé une expertise reconnue dans mes domaines de prédilection, 
                    tout en conservant cette approche personnalisée qui caractérise les cabinets à taille humaine.
                  </p>
                </div>
              </div>
              <div className="bg-neutral-warm rounded-lg p-8">
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-4xl font-serif font-bold text-primary mb-2">2003</div>
                    <p className="text-gray-600">Création du cabinet</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-serif font-bold text-primary mb-2">500+</div>
                    <p className="text-gray-600">Clients accompagnés</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-serif font-bold text-primary mb-2">21</div>
                    <p className="text-gray-600">Années d'expérience</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-serif font-bold text-primary mb-2">4</div>
                    <p className="text-gray-600">Domaines d'expertise</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Présentation de l'avocat */}
        <section className="section-padding bg-neutral-warm">
          <div className="container-custom">
            <SectionTitle 
              title="Qui suis-je ?"
              centered
              className="mb-12"
            />
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="text-center lg:text-left">
                  <div className="w-48 h-48 bg-gray-200 rounded-full mx-auto lg:mx-0 mb-6 overflow-hidden">
                    <img 
                      src="/images/cecile-brun.webp"
                      alt="Maître Cécile Brun - Avocate"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-3xl font-serif font-semibold text-neutral-text mb-2">
                    Maître Cécile BRUN
                  </h3>
                  <p className="text-primary font-medium text-lg mb-6">Avocate au Barreau de Toulon</p>
                  
                  <div className="bg-white rounded-lg p-6 text-left">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                      <div>
                        <strong className="text-neutral-text">Barreau :</strong><br />
                        <span className="text-gray-600">Toulon depuis 2003</span>
                      </div>
                      <div>
                        <strong className="text-neutral-text">Expérience :</strong><br />
                        <span className="text-gray-600">{experienceText.practice}</span>
                      </div>
                      <div>
                        <strong className="text-neutral-text">Formation :</strong><br />
                        <span className="text-gray-600">DEA en droit de la famille</span>
                      </div>
                      <div>
                        <strong className="text-neutral-text">Juridictions :</strong><br />
                        <span className="text-gray-600">Toulon, Draguignan, Aix, Marseille</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Avocate au barreau de Toulon, titulaire d'un diplôme d'études approfondies en droit de la famille,
                      {experienceText.practiceIn('le droit de la famille et des personnes')} devant toutes les juridictions
                      de la région PACA : Toulon, Draguignan, Aix, Marseille...
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Ma formation et mon expérience m'ont permis d'acquérir une expertise certaine en droit des personnes 
                      et droit du travail, mais pas seulement. Mes domaines de compétences visent également les actes 
                      d'acquisition ou de vente de fonds de commerce, les problèmes de voisinage, le recouvrement de créances, 
                      et le droit rural.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      Exerçant à titre libéral, dans un cabinet de taille humaine, j'attache beaucoup d'importance à l'écoute 
                      et au respect mutuel. Conseiller, assister, représenter et défendre dans un climat de confiance réciproque 
                      et de transparence est mon crédo.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mes valeurs */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <SectionTitle 
              title="Mes valeurs"
              centered
              className="mb-12"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {valeurs.map((valeur, index) => (
                <div key={index} className="bg-neutral-warm rounded-lg p-6">
                  <h3 className="text-xl font-serif font-semibold text-neutral-text mb-4">
                    {valeur.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {valeur.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* mon méthode */}
        <section className="section-padding bg-neutral-warm">
          <div className="container-custom">
            <SectionTitle 
              title="Ma méthode de travail"
              centered
              className="mb-12"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {methode.map((etape, index) => (
                <div key={index} className="bg-white rounded-lg card-shadow p-6 text-center">
                  <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    {etape.etape}
                  </div>
                  <h3 className="text-lg font-serif font-semibold text-neutral-text mb-3">
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

        {/* CTA Section */}
        <section className="section-padding bg-primary text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl lg:text-4xl font-serif font-semibold mb-6">
              Prêt à me confier votre dossier ?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Bénéficiez de mon expertise et de mon accompagnement personnalisé. 
              Contactez-moi dès aujourd'hui pour une première consultation.
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
