# Cabinet d'Avocat Solliès-Pont - Site Web

Site web premium pour cabinet d'avocat à Solliès-Pont, développé avec Next.js 14 et Tailwind CSS.

## 🚀 Technologies utilisées

- **Framework** : Next.js 14 (App Router)
- **Styling** : Tailwind CSS
- **Language** : JavaScript (pas de TypeScript)
- **Fonts** : Playfair Display (titres) + Inter (texte)
- **Déploiement** : Optimisé pour Vercel

## 🎨 Design System

### Palette de couleurs
- **Vert principal** : `#0E7A5F`
- **Vert foncé** : `#0B5C48`
- **Vert olive** : `#4F7F6A`
- **Gris chaud** : `#F5F5F4`
- **Gris texte** : `#333333`
- **Accent doré** : `#C9A95C` (touches discrètes)

### Typographie
- **Titres** : Playfair Display (serif élégant)
- **Texte** : Inter (lisibilité optimale)

## 📁 Structure du projet

```
cabinet-avocat-sollies/
├── app/
│   ├── page.js                 # Page d'accueil
│   ├── layout.js              # Layout principal
│   ├── sitemap.js             # Sitemap dynamique
│   ├── robots.js              # Robots.txt
│   ├── cabinet/
│   │   └── page.js            # Présentation du cabinet
│   ├── domaines/
│   │   ├── page.js            # Liste des domaines
│   │   └── famille/
│   │       └── page.js        # Droit de la famille
│   ├── contact/
│   │   └── page.js            # Page de contact
│   └── faq/
│       └── page.js            # Questions fréquentes
├── components/
│   ├── Header.js              # Navigation principale
│   ├── Footer.js              # Pied de page
│   ├── ContactForm.js         # Formulaire de contact
│   ├── Button.js              # Composant bouton
│   ├── Card.js                # Cartes de contenu
│   ├── FaqAccordion.js        # Accordéon FAQ
│   ├── SectionTitle.js        # Titres de section
│   ├── Breadcrumbs.js         # Fil d'Ariane
│   ├── StickyCTA.js           # CTA mobile flottant
│   └── Testimonial.js         # Témoignages
└── tailwind.config.js         # Configuration Tailwind
```

## 🛠️ Installation et développement

### Prérequis
- Node.js 18+ 
- npm ou yarn

### Installation
```bash
# Cloner le projet
git clone [url-du-repo]
cd cabinet-avocat-sollies

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Le site sera accessible sur `http://localhost:3000`

### Commandes disponibles
```bash
npm run dev      # Serveur de développement
npm run build    # Build de production
npm run start    # Serveur de production
```

## 📄 Pages créées

### ✅ Pages complètes
- **Accueil** (`/`) - Hero, services, témoignages, CTA
- **Le Cabinet** (`/cabinet`) - Histoire, équipe, valeurs, méthode
- **Domaines** (`/domaines`) - Liste des expertises juridiques
- **Droit de la Famille** (`/domaines/famille`) - Page détaillée avec FAQ
- **Contact** (`/contact`) - Formulaire, coordonnées, plan d'accès
- **FAQ** (`/faq`) - Questions fréquentes complètes

### 🔄 À compléter
- **Domaines manquants** :
  - `/domaines/penal` - Droit pénal
  - `/domaines/travail` - Droit du travail  
  - `/domaines/immobilier` - Droit immobilier
- **Actualités** :
  - `/actualites` - Liste des articles
  - `/actualites/[slug]` - Articles individuels

## 🎯 Fonctionnalités

### ✅ Implémentées
- Design responsive (mobile-first)
- Navigation sticky avec menu mobile
- Formulaires de contact (avec honeypot anti-spam)
- CTA flottant mobile
- Breadcrumbs
- FAQ avec accordéon
- SEO optimisé (metadata, sitemap, robots.txt)
- Accessibilité WCAG AA

### 📋 TODO
- [ ] Compléter les pages domaines manquantes
- [ ] Créer la section actualités
- [ ] Ajouter les vraies photos du cabinet
- [ ] Intégrer Google Maps
- [ ] Connecter le formulaire à un service d'email
- [ ] Ajouter Google Analytics (hook préparé)
- [ ] Créer les pages légales (mentions, confidentialité)

## 📧 Configuration email

Le formulaire de contact est prêt mais nécessite une intégration backend :

```javascript
// Dans components/ContactForm.js - ligne 32
// TODO: Replace with actual form submission logic
// Options : API route Next.js, service tiers (EmailJS, Formspree, etc.)
```

## 🔍 SEO

### Métadonnées
- Titles uniques par page (< 60 caractères)
- Meta descriptions optimisées (< 165 caractères)
- Open Graph et Twitter Cards
- Balises canoniques

### Structure
- URLs propres et stables
- Hiérarchie H1/H2/H3 respectée
- Liens internes optimisés
- Sitemap.xml dynamique

### Mots-clés ciblés
- "avocat Solliès-Pont"
- "cabinet avocats Var"
- "droit famille Solliès-Pont"
- "avocat divorce Var"

## 🎨 Personnalisation

### Couleurs
Modifiez les couleurs dans `tailwind.config.js` :
```javascript
colors: {
  primary: {
    DEFAULT: '#0E7A5F',  // Vert principal
    dark: '#0B5C48',     // Vert foncé
    olive: '#4F7F6A',    // Vert olive
  }
}
```

### Contenu
- Remplacez `[Nom]` par les vrais noms d'avocats
- Ajoutez les vraies coordonnées
- Personnalisez les témoignages
- Ajoutez les photos professionnelles

## 📱 Responsive Design

- **Mobile** : < 768px (design mobile-first)
- **Tablet** : 768px - 1024px
- **Desktop** : > 1024px

Composants adaptatifs :
- Navigation mobile avec menu hamburger
- CTA flottant mobile uniquement
- Grilles responsive
- Images optimisées Next.js

## 🚀 Déploiement

### Vercel (recommandé)
```bash
# Build local
npm run build

# Déployer sur Vercel
npx vercel --prod
```

### Variables d'environnement
Aucune variable requise pour le moment. À ajouter selon les intégrations :
- `NEXT_PUBLIC_GA_ID` - Google Analytics
- `EMAIL_SERVICE_API_KEY` - Service d'email
- `GOOGLE_MAPS_API_KEY` - Google Maps

## 📞 Support

Pour toute question technique ou modification :
- Vérifiez la documentation Next.js 14
- Consultez la documentation Tailwind CSS
- Testez les modifications en local avant déploiement

---

**Note** : Ce site est prêt pour la production mais nécessite quelques ajustements de contenu et l'intégration des services tiers (email, analytics) selon les besoins spécifiques du cabinet.
