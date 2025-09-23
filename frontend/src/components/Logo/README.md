# Composants Logo - MEDIANEG International

Ce dossier contient tous les composants liés au logo de MEDIANEG International.

## 🎨 Composants disponibles

### 1. **Logo.jsx** - Composant principal
Composant flexible pour afficher le logo avec ou sans texte.

```jsx
import Logo from '@/components/Logo/Logo';

// Logo avec texte (défaut)
<Logo href="/" />

// Logo sans texte
<Logo href="/" showText={false} />

// Logo avec dimensions personnalisées
<Logo href="/" width={60} height={60} />

// Logo sans lien
<Logo href={null} />
```

**Props disponibles :**
- `href` : URL du lien (optionnel)
- `width` : Largeur du logo (défaut: 40)
- `height` : Hauteur du logo (défaut: 40)
- `showText` : Afficher le texte "MEDIANEG" (défaut: true)
- `className` : Classes CSS supplémentaires
- `textClassName` : Classes CSS pour le texte
- `priority` : Priorité de chargement (défaut: false)

### 2. **LogoVariants.jsx** - Variantes spécialisées

#### LogoCompact
Pour les espaces restreints (mobile, sidebars, etc.)

```jsx
import { LogoCompact } from '@/components/Logo/LogoVariants';

<LogoCompact href="/" size={32} />
```

#### LogoWithText
Pour les headers et sections principales

```jsx
import { LogoWithText } from '@/components/Logo/LogoVariants';

<LogoWithText 
  href="/" 
  logoSize={48} 
  textSize="text-xl"
  textColor="text-white"
  priority={true}
/>
```

#### LogoCentered
Pour les pages d'erreur, de chargement, ou centrées

```jsx
import { LogoCentered } from '@/components/Logo/LogoVariants';

<LogoCentered size={120} />
```

#### LogoIcon
Pour les favicons, boutons, et icônes

```jsx
import { LogoIcon } from '@/components/Logo/LogoVariants';

<LogoIcon size={24} />
```

## 📁 Fichiers requis

Assurez-vous que le fichier `logo.png` est présent dans :
- `frontend/public/logo.png`

## 🎯 Utilisation dans le projet

### Header
```jsx
import Logo from '@/components/Logo/Logo';

<Logo 
  href="/"
  width={48}
  height={48}
  priority={true}
/>
```

### Footer
```jsx
import Logo from '@/components/Logo/Logo';

<Logo 
  href="/"
  width={40}
  height={40}
  textClassName="text-xl font-bold text-white"
/>
```

### Pages d'erreur
```jsx
import { LogoCentered } from '@/components/Logo/LogoVariants';

<div className="min-h-screen flex items-center justify-center">
  <LogoCentered size={120} />
</div>
```

## 🎨 Personnalisation

### Couleurs du texte
- Header : `text-navy-900` (bleu foncé)
- Footer : `text-white` (blanc)
- Custom : `text-primary-600` (couleur primaire)

### Tailles recommandées
- Header : 48x48px
- Footer : 40x40px
- Mobile : 32x32px
- Pages d'erreur : 120x120px
- Favicon : 24x24px

## 🔧 Optimisations

- Utilisation de `next/image` pour l'optimisation automatique
- `priority={true}` pour le logo du header (chargement prioritaire)
- `object-contain` pour préserver les proportions
- Classes Tailwind pour la responsivité

## 📱 Responsive Design

Les composants s'adaptent automatiquement aux différentes tailles d'écran :
- Desktop : Logo complet avec texte
- Tablet : Logo avec texte réduit
- Mobile : Logo compact sans texte (optionnel)

## 🚀 Performance

- Chargement prioritaire du logo header
- Optimisation automatique des images par Next.js
- Lazy loading pour les logos non prioritaires
- Formats modernes (WebP, AVIF) supportés
