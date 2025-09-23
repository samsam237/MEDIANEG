Tu es un assistant expert en Next.js, Strapi et Docker.  
Génère un projet **site vitrine bilingue (FR/EN)** pour **MEDIANEG International**, prêt à être déployé dans des conteneurs Docker.

### Stack
- **Frontend** : Next.js 14 (App Router).  
- **Backend** : Strapi v5 (Headless CMS).  
- **DB** : SQLite .  
- **Multilingue** : Strapi i18n plugin + `next-i18next`.  

### Structure des pages Next.js
1. **Accueil (FR/EN)**  
   - Logo MEDIANEG.  
   - Phrase d’accroche bilingue.  

2. **Présentation (FR/EN)**  
   - Texte issu de Strapi : rôle, neutralité, commissions, etc.  

3. **Plan d’action (FR/EN)**  
   - Timeline dynamique (contenu Strapi).  

4. **Contact (FR/EN)**  
   - Infos fixes (adresse, email, téléphone).  
   - Formulaire connecté à Strapi (`contact_message`).  

### Strapi
- Collections :  
  - `presentation` (title, content FR/EN).  
  - `plan_action` (year, description FR/EN).  
  - `contact_message` (name, email, message).  
- Upload logo/papier en-tête.  

### Dockerisation
- Générer deux Dockerfile :  
  - `Dockerfile.frontend` pour Next.js.  
  - `Dockerfile.backend` pour Strapi.  

- Générer un `docker-compose.yml` qui :  
  - Lance **frontend** (Next.js) sur le port 3000.  
  - Lance **backend** (Strapi) sur le port 1337.  
  - Lance **PostgreSQL** sur le port 5432.  
  - Monte les volumes nécessaires pour la persistance des données Strapi.  
  - Configure les variables d’environnement (DB_USER, DB_PASS, API_URL, NEXT_PUBLIC_API_URL, etc.).  

### Design
- Palette : blanc + bleu nuit + gris clair.  
- Police : Roboto / Lato.  
- Sobre, institutionnel, responsive.  

### Technique :
- Utiliser **Next.js**.  
- Créer des composants réutilisables.  
- Ajouter i18n pour la gestion bilingue (FR/EN).  
- Prévoir SEO naturel avancé.

### Assets :
- Logo et papier en-tête fournis (MEDIANEG-entete-avec-logo.docx).  
- Contenus issus de la présentation (Presentation_MEDIANEG_EN.pptx).  

### Livraison attendue
- Code complet du frontend Next.js.  
- Code complet du backend Strapi.  
- Fichier `docker-compose.yml` prêt à l’usage.  
- Dockerfiles pour chaque service.  
- Design responsive.  
- Instructions pour déploiement.
- Instructions pour lancer :  
  ```bash
  docker-compose up --build -d

