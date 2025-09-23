# MEDIANEG International - Site Vitrine Bilingue

Site vitrine bilingue (FR/EN) pour MEDIANEG International, développé avec Next.js et Strapi, prêt pour le déploiement en conteneurs Docker.

## 🚀 Technologies

- **Frontend**: Next.js 14 (App Router) + Tailwind CSS
- **Backend**: Strapi v5 (Headless CMS)
- **Base de données**: PostgreSQL
- **Multilingue**: Strapi i18n plugin + next-i18next
- **Docker**: Conteneurisation complète
- **Design**: Palette blanc + bleu nuit + gris clair

## 📁 Structure du projet

```
MEDIANEG/
├── frontend/                 # Application Next.js
│   ├── src/
│   │   ├── app/             # Pages et layouts
│   │   ├── components/      # Composants réutilisables
│   │   ├── lib/             # Utilitaires et API
│   │   └── public/          # Assets statiques
├── backend/                 # Application Strapi
│   ├── src/api/             # Collections et contrôleurs
│   └── config/              # Configuration
├── docker-compose.yml       # Orchestration Docker
├── Dockerfile.frontend      # Image frontend
├── Dockerfile.backend       # Image backend
└── README.md               # Ce fichier
```

## 🛠️ Installation et Déploiement

### Prérequis

- Docker et Docker Compose
- Node.js 18+ (pour le développement local)

### Déploiement avec Docker (Recommandé)

1. **Cloner le projet**
   ```bash
   git clone <repository-url>
   cd MEDIANEG
   ```

2. **Configurer les variables d'environnement**
   ```bash
   cp env.example .env
   # Modifier les valeurs dans .env selon vos besoins
   ```

3. **Lancer l'application**
   ```bash
   docker-compose up --build -d
   ```

4. **Accéder aux services**
   - Frontend: http://localhost:3000
   - Backend Strapi: http://localhost:1337
   - Base de données: localhost:5432

### Configuration initiale de Strapi

1. Accéder à http://localhost:1337/admin
2. Créer un compte administrateur
3. Configurer les collections :
   - **Presentation**: Contenu de présentation (FR/EN)
   - **Plan Action**: Chronologie du plan d'action (FR/EN)
   - **Contact Message**: Messages de contact

### Développement local

1. **Installer les dépendances**
   ```bash
   npm install
   cd frontend && npm install
   cd ../backend && npm install
   ```

2. **Lancer en mode développement**
   ```bash
   npm run dev
   ```

## 🌐 Fonctionnalités

### Pages disponibles

- **Accueil** (`/`): Page d'accueil avec présentation générale
- **Présentation** (`/presentation`): À propos de MEDIANEG
- **Plan d'action** (`/action-plan`): Timeline des actions
- **Contact** (`/contact`): Formulaire de contact et informations

### Fonctionnalités multilingues

- Support FR/EN avec next-i18next
- Contenu géré via Strapi i18n
- Changement de langue en temps réel

### Design responsive

- Mobile-first design
- Palette de couleurs institutionnelle
- Composants réutilisables
- Animations CSS

## 🔧 Configuration

### Variables d'environnement

| Variable | Description | Défaut |
|----------|-------------|---------|
| `DB_NAME` | Nom de la base de données | `medianeg_db` |
| `DB_USER` | Utilisateur PostgreSQL | `medianeg_user` |
| `DB_PASS` | Mot de passe PostgreSQL | `medianeg_password` |
| `JWT_SECRET` | Clé secrète JWT | Requis |
| `NEXT_PUBLIC_API_URL` | URL de l'API Strapi | `http://localhost:1337` |

### Collections Strapi

#### Presentation
- `title`: Titre (FR/EN)
- `content`: Contenu riche (FR/EN)
- `role`: Rôle de l'organisation (FR/EN)
- `neutrality`: Neutralité (FR/EN)
- `commissions`: Commissions (FR/EN)

#### Plan Action
- `year`: Année (integer)
- `title`: Titre (FR/EN)
- `description`: Description (FR/EN)
- `order`: Ordre d'affichage

#### Contact Message
- `name`: Nom complet
- `email`: Adresse email
- `subject`: Sujet
- `message`: Message
- `isRead`: Message lu (boolean)

## 📝 Utilisation

### Ajouter du contenu

1. Se connecter à l'admin Strapi (http://localhost:1337/admin)
2. Naviguer vers les collections souhaitées
3. Créer/modifier le contenu en FR et EN
4. Publier les modifications

### Personnaliser le design

- Modifier `frontend/tailwind.config.js` pour les couleurs
- Éditer `frontend/src/app/globals.css` pour les styles
- Ajouter des composants dans `frontend/src/components/`

## 🚀 Déploiement en production

### Avec Docker

1. Modifier les URLs dans `.env` pour la production
2. Configurer un reverse proxy (nginx) si nécessaire
3. Déployer avec `docker-compose up -d`

### Avec un hébergeur cloud

- **Frontend**: Vercel, Netlify, ou serveur statique
- **Backend**: Railway, Heroku, ou VPS avec Docker
- **Base de données**: PostgreSQL géré (AWS RDS, etc.)

## 🔒 Sécurité

- Variables d'environnement pour les secrets
- CORS configuré dans Strapi
- Validation des formulaires
- Sanitisation des entrées

## 📞 Support

Pour toute question ou problème :
- Email: contact@medianeg.org
- Documentation: Ce README
- Issues: Utiliser le système de tickets du projet

## 📄 Licence

Ce projet est développé pour MEDIANEG International. Tous droits réservés.

---

**MEDIANEG International** - Promouvoir la paix et la résolution des conflits par la médiation et la négociation.
