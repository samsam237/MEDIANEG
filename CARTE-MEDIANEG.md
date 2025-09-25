# 🗺️ Configuration de la Carte MEDIANEG

## 📍 **Localisation Intégrée**

La carte interactive Google Maps a été intégrée avec succès dans le site MEDIANEG avec les coordonnées exactes du bureau.

## 🎯 **Coordonnées GPS**

- **Adresse** : Grand-Rue 1A, 2000 Neuchâtel, Suisse
- **Latitude** : 46.991968
- **Longitude** : 6.9289264
- **Place ID** : ChIJ[PlaceID] (Google Maps)

## 🗺️ **Intégration Google Maps**

### Iframe Embed
```html
<iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2721.45857963227!2d6.9289264!3d46.991968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478e0a11baad4ecd%3A0x684cf9e8172b428d!2sGrand-Rue%201A%2C%202000%20Neuch%C3%A2tel%2C%20Suisse!5e0!3m2!1sfr!2scm!4v1758818822040!5m2!1sfr!2scm"
  width="100%"
  height="100%"
  style="border:0;"
  allowfullscreen=""
  loading="lazy"
  referrerpolicy="no-referrer-when-downgrade"
/>
```

## 📁 **Fichiers Modifiés**

### 1. Page Contact (`frontend/src/pages/contact.js`)
- ✅ Remplacement du placeholder par la vraie carte
- ✅ Mise à jour de l'adresse dans les informations de contact
- ✅ Import du composant InteractiveMap

### 2. Footer (`frontend/src/components/Layout/Footer.jsx`)
- ✅ Mise à jour de l'adresse : "Grand-Rue 1A, 2000 Neuchâtel, Suisse"

### 3. Section Contact (`frontend/src/components/Sections/ContactSection.jsx`)
- ✅ Mise à jour de l'adresse dans les informations de contact

### 4. SEO (`frontend/src/components/SEO/SEOHead.jsx`)
- ✅ Mise à jour des données structurées avec la nouvelle adresse
- ✅ Pays changé de "FR" à "CH"
- ✅ Code postal et ville mis à jour

### 5. Nouveau Composant (`frontend/src/components/Map/InteractiveMap.jsx`)
- ✅ Composant réutilisable pour la carte
- ✅ Options de personnalisation (hauteur, titre, etc.)
- ✅ Informations supplémentaires (accès transport public)

## 🎨 **Fonctionnalités de la Carte**

### Caractéristiques
- ✅ **Carte interactive** : Zoom, déplacement, street view
- ✅ **Localisation précise** : Marqueur sur l'adresse exacte
- ✅ **Responsive** : S'adapte à tous les écrans
- ✅ **Accessibilité** : Titre descriptif pour les lecteurs d'écran
- ✅ **Performance** : Chargement lazy pour optimiser les performances

### Informations Affichées
- **Adresse complète** : Grand-Rue 1A, 2000 Neuchâtel, Suisse
- **Marqueur Google Maps** : Position exacte du bureau
- **Accès transport** : Indication d'accès facile en transport public
- **Langue** : Interface en français

## 🔧 **Utilisation du Composant**

### Dans la Page Contact
```jsx
<InteractiveMap 
  height="h-96"
  showTitle={false}
/>
```

### Options Disponibles
```jsx
<InteractiveMap 
  className="custom-class"           // Classes CSS supplémentaires
  height="h-64"                     // Hauteur (h-64, h-96, etc.)
  showTitle={true}                  // Afficher le titre
  title="Titre personnalisé"        // Titre de la carte
  subtitle="Sous-titre"             // Sous-titre
/>
```

## 📱 **Responsive Design**

### Breakpoints
- **Mobile** : Carte adaptée aux petits écrans
- **Tablet** : Hauteur optimisée pour les tablettes
- **Desktop** : Pleine largeur avec informations supplémentaires

### Optimisations
- **Lazy Loading** : Chargement différé pour les performances
- **Referrer Policy** : Sécurité optimisée
- **Loading** : Indicateur de chargement

## 🌐 **SEO et Accessibilité**

### Données Structurées
```json
{
  "@type": "PostalAddress",
  "streetAddress": "Grand-Rue 1A",
  "addressLocality": "Neuchâtel",
  "postalCode": "2000",
  "addressCountry": "CH"
}
```

### Accessibilité
- ✅ **Titre descriptif** : "Localisation MEDIANEG International"
- ✅ **Alt text** : Description de la carte
- ✅ **Navigation clavier** : Support complet
- ✅ **Lecteurs d'écran** : Informations accessibles

## 🚀 **Avantages**

### Pour les Utilisateurs
- **Navigation facile** : Trouver le bureau rapidement
- **Informations complètes** : Adresse, transport, horaires
- **Interface intuitive** : Carte Google Maps familière
- **Mobile-friendly** : Fonctionne sur tous les appareils

### Pour le Business
- **Crédibilité** : Localisation physique visible
- **Accessibilité** : Facilité pour les clients de nous trouver
- **SEO** : Données structurées pour Google
- **Professionalisme** : Intégration soignée

## 📊 **Métriques de Performance**

### Optimisations Implémentées
- ✅ **Lazy Loading** : Améliore le temps de chargement initial
- ✅ **Responsive** : Pas de problème d'affichage mobile
- ✅ **Accessibilité** : Score d'accessibilité élevé
- ✅ **SEO** : Données structurées complètes

---

**La carte interactive est maintenant parfaitement intégrée avec les coordonnées exactes du bureau MEDIANEG à Neuchâtel !** 🎉

Les utilisateurs peuvent maintenant facilement localiser le bureau, obtenir des directions et accéder à toutes les informations nécessaires pour nous rendre visite.
