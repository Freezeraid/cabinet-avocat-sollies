import Link from 'next/link';
import ContactForm from './ContactForm';

export default function Footer() {
  const quickLinks = [
    { name: 'Le Cabinet', href: '/cabinet' },
    { name: 'Domaines d\'intervention', href: '/domaines' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact', href: '/contact' },
  ];

  const legalLinks = [
    { name: 'Mentions légales', href: '/mentions-legales' },
    { name: 'Politique de confidentialité', href: '/politique-confidentialite' },
  ];

  return (
    <footer className="bg-neutral-text text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Cabinet Info */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-serif font-semibold mb-4">
              Cabinet d'Avocat
            </h3>
            <div className="space-y-3 text-gray-300">
              <div>
                <p className="font-medium">Adresse :</p>
                <p>20 Faubourg Notre Dame<br />Passage Romain Laureri<br />83210 Solliès-Pont</p>
              </div>
              <div>
                <p className="font-medium">Téléphone :</p>
                <a href="tel:+33494135380" className="text-white font-medium hover:text-accent transition-colors underline decoration-1 underline-offset-2">
                  04 94 13 53 80
                </a>
              </div>
              <div>
                <p className="font-medium">Email :</p>
                <a href="mailto:cecile.brun@avocatsollies.fr" className="text-white font-medium hover:text-accent transition-colors underline decoration-1 underline-offset-2 break-all">
                  cecile.brun@avocatsollies.fr
                </a>
              </div>
            </div>
          </div>

          {/* Horaires */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-serif font-semibold mb-4">
              Horaires d'ouverture
            </h3>
            <div className="space-y-2 text-gray-300">
              <div className="flex justify-between">
                <span>Lundi - Vendredi</span>
                <span>8h30 - 18h</span>
              </div>
              <div className="flex justify-between">
                <span>Samedi - Dimanche</span>
                <span>Fermé</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-serif font-semibold mb-4">
              Liens rapides
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white font-medium transition-colors focus-visible underline decoration-1 underline-offset-2 decoration-transparent hover:decoration-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact rapide */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-serif font-semibold mb-4">
              Contact rapide
            </h3>
            <ContactForm isFooter={true} />
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-600 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              <div>© {new Date().getFullYear()} Cabinet d'Avocat Solliès-Pont. Tous droits réservés.</div>
              <div className="mt-1">
                Site web créé par{' '}
                <a 
                  href="https://killiandoubre.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors underline"
                  title="Développeur web freelance - Création de sites internet professionnels"
                >
                  Killian DOUBRE
                </a>
              </div>
            </div>
            <div className="flex space-x-6">
              {legalLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-white text-sm transition-colors focus-visible"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
