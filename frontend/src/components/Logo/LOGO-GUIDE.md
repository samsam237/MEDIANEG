# Guide du Logo MEDIANEG - Version avec Texte Intégré

## 🎨 **Logo MEDIANEG avec texte intégré**

Le logo MEDIANEG contient déjà le nom de l'organisation, donc nous n'affichons plus de texte supplémentaire.

## 📏 **Tailles recommandées**

### Header (Navigation principale)
- **Desktop**: 128x64px (`w-32 h-16`)
- **Mobile**: 96x48px (`w-24 h-12`)
- **Hauteur header**: 80px (`h-20`) pour accommoder le logo plus grand

### Footer
- **Taille**: 100x50px
- **Couleur**: Blanc sur fond sombre

### Pages d'erreur (404, etc.)
- **Taille**: 150x75px
- **Centré**: Avec flexbox

### Favicon et icônes
- **Taille**: 24x24px ou 32x32px
- **Usage**: Boutons, liens, etc.

## 🧩 **Composant LogoWithText**

Composant optimisé pour les logos avec texte intégré :

```jsx
import LogoWithText from '@/components/Logo/LogoWithText';

// Header
<LogoWithText 
  href="/"
  width={120}
  height={60}
  className="w-24 h-12 md:w-32 md:h-16"
  priority={true}
/>

// Footer
<LogoWithText 
  href="/"
  width={100}
  height={50}
/>

// Page d'erreur
<LogoWithText 
  href="/"
  width={150}
  height={75}
  priority={true}
/>
```

## 📱 **Responsive Design**

### Classes Tailwind utilisées
```css
/* Mobile */
.w-24.h-12  /* 96x48px */

/* Desktop */
.md:w-32.md:h-16  /* 128x64px */
```

### Hauteur du header
```css
.h-20  /* 80px - accommoder le logo plus grand */
```

## 🎯 **Avantages de cette approche**

1. **Simplicité**: Pas de texte en double
2. **Cohérence**: Logo unique et reconnaissable
3. **Impact visuel**: Logo plus grand et visible
4. **Performance**: Un seul élément à charger
5. **Maintenance**: Plus facile à gérer

## 🔧 **Optimisations techniques**

- **Next.js Image**: Optimisation automatique
- **Priority loading**: Pour le header (LCP)
- **Object-contain**: Préserve les proportions
- **Hover effects**: Opacité réduite au survol
- **Alt text**: "MEDIANEG International"

## 📊 **Comparaison avant/après**

| Aspect | Avant | Après |
|--------|-------|-------|
| Taille header | 48x48px | 128x64px |
| Taille footer | 40x40px | 100x50px |
| Texte supplémentaire | ✅ "MEDIANEG" | ❌ Supprimé |
| Hauteur header | 64px | 80px |
| Impact visuel | Faible | Fort |

## 🚀 **Utilisation dans le projet**

### Header
```jsx
// Responsive avec classes Tailwind
<LogoWithText 
  href="/"
  width={120}
  height={60}
  className="w-24 h-12 md:w-32 md:h-16"
  priority={true}
/>
```

### Footer
```jsx
// Taille fixe
<LogoWithText 
  href="/"
  width={100}
  height={50}
/>
```

### Pages d'erreur
```jsx
// Centré et grand
<div className="flex justify-center">
  <LogoWithText 
    href="/"
    width={150}
    height={75}
    priority={true}
  />
</div>
```

## 🎨 **Couleurs et contrastes**

- **Header**: Logo sur fond blanc
- **Footer**: Logo blanc sur fond sombre
- **Pages d'erreur**: Logo sur fond gris clair
- **Hover**: Opacité réduite à 80%

## 📝 **Notes importantes**

1. Le logo contient déjà le texte "MEDIANEG"
2. Pas besoin d'ajouter du texte supplémentaire
3. Tailles plus grandes pour un meilleur impact visuel
4. Header agrandi pour accommoder le logo
5. Responsive design avec classes Tailwind
