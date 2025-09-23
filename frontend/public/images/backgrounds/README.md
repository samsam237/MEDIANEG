# Images d'arrière-plan

Ce répertoire contient les images d'arrière-plan utilisées dans les zones visuelles du site MEDIANEG.

## Structure

- `image 1.png` à `image 10.png` - Images d'agriculteurs et plantations (photos réelles)
- `farmer-field.svg` - Image d'agriculteur travaillant dans un champ (placeholder)
- `plantation-crops.svg` - Image de plantation et cultures agricoles (placeholder)

## Utilisation

Ces images sont utilisées de deux manières :

### 1. Zones d'images statiques
Utilisées par le composant `BackgroundImageZone` pour créer des sections visuelles attrayantes.

### 2. Carousel d'images
Utilisées par le composant `ImageCarousel` pour créer un diaporama automatique avec les images 5 à 10.

## Configuration du carousel

Le carousel est configuré dans `frontend/src/pages/index.js` avec les images 5 à 10 :

```javascript
const carouselImages = [
  {
    src: '/images/backgrounds/image 5.png',
    alt: 'Agriculture et développement rural',
    title: 'Développement Rural',
    description: 'Accompagnement des communautés agricoles'
  },
  // ... autres images
];
```

## Remplacement des images

Pour remplacer les images par vos propres photos :

1. **Images statiques** : Remplacez `image 1.png` à `image 4.png`
2. **Images du carousel** : Remplacez `image 5.png` à `image 10.png`
3. **Mise à jour des références** dans `frontend/src/pages/index.js` si nécessaire

## Formats recommandés

- **Format** : JPG, PNG, WebP
- **Résolution** : 1920x1080 minimum (Full HD)
- **Taille** : Optimisée pour le web (< 500KB)
- **Ratio** : 16:9 ou 4:3 pour une meilleure adaptation

## Optimisation

Les images sont automatiquement optimisées par Next.js Image, mais vous pouvez pré-optimiser vos images pour de meilleures performances.
