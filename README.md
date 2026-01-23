# Bloomy Website

Site vitrine pour l'application Bloomy — une app de bien-être minimaliste.

## Structure

```
bloomy-website/
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Layout global (Header + Footer)
│   │   ├── page.tsx        # Landing page (/)
│   │   ├── globals.css     # Styles globaux
│   │   ├── privacy/        # /privacy - Politique de confidentialité
│   │   ├── terms/          # /terms - Conditions d'utilisation
│   │   └── support/        # /support - Page de support
│   └── components/
│       ├── Header.tsx
│       ├── Footer.tsx
│       └── BloomyMark.tsx  # Composant signature Bloomy
├── public/                 # Assets statiques
├── next.config.js          # Config Next.js (export statique)
└── package.json
```

## Développement local

### Prérequis

- Node.js 18+
- npm ou yarn

### Installation

```bash
# Cloner ou se placer dans le dossier
cd bloomy-website

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Le site sera accessible sur [http://localhost:3000](http://localhost:3000)

### Build

```bash
# Créer le build de production
npm run build
```

Les fichiers statiques seront générés dans le dossier `out/`.

## Déploiement

### Option 1 : Vercel (Recommandé)

1. Créer un compte sur [vercel.com](https://vercel.com)
2. Connecter votre repo GitHub/GitLab
3. Importer le projet `bloomy-website`
4. Vercel détectera automatiquement Next.js
5. Cliquer sur "Deploy"

**Configuration du domaine :**
1. Dans le dashboard Vercel, aller dans "Settings" > "Domains"
2. Ajouter `bloomy.app`
3. Configurer les DNS chez votre registrar :
   - Type A : `76.76.21.21`
   - Ou CNAME : `cname.vercel-dns.com`

### Option 2 : Netlify

1. Créer un compte sur [netlify.com](https://netlify.com)
2. "Add new site" > "Import an existing project"
3. Connecter votre repo
4. Configuration du build :
   - Build command: `npm run build`
   - Publish directory: `out`
5. Cliquer sur "Deploy"

**Configuration du domaine :**
1. Dans le dashboard Netlify, aller dans "Domain settings"
2. Ajouter `bloomy.app` comme domaine custom
3. Configurer les DNS :
   - CNAME : `[votre-site].netlify.app`

### Option 3 : Export statique manuel

```bash
npm run build
```

Uploader le contenu du dossier `out/` sur n'importe quel hébergement statique (AWS S3, GitHub Pages, etc.).

## Configuration du domaine bloomy.app

### Étapes générales

1. **Acheter le domaine** chez un registrar (Namecheap, Gandi, Google Domains, etc.)

2. **Configurer les DNS** selon votre hébergeur :

   **Pour Vercel :**
   ```
   Type    Name    Value
   A       @       76.76.21.21
   CNAME   www     cname.vercel-dns.com
   ```

   **Pour Netlify :**
   ```
   Type    Name    Value
   CNAME   @       [votre-site].netlify.app
   CNAME   www     [votre-site].netlify.app
   ```

3. **Activer HTTPS** (automatique sur Vercel/Netlify)

4. **Vérifier la propagation** (peut prendre jusqu'à 48h)

## Personnalisation

### Couleurs

Les couleurs sont définies dans `src/app/globals.css` :

```css
:root {
  --sage-green: rgb(157, 180, 160);    /* Couleur Bloomy */
  --bg-primary: rgb(252, 250, 247);    /* Fond principal */
  --text-primary: rgb(30, 30, 30);     /* Texte principal */
}
```

### Liens TestFlight

Remplacer les `href="#testflight"` par le vrai lien TestFlight :

```tsx
<a href="https://testflight.apple.com/join/XXXXX" className="btn btn-primary">
  Join TestFlight
</a>
```

### Screenshots

Ajouter les screenshots dans `public/` et les référencer dans la page d'accueil.

## TODO

- [ ] Ajouter les vrais screenshots de l'app
- [ ] Remplacer les liens TestFlight placeholder
- [ ] Ajouter le favicon et les icônes
- [ ] Configurer les métadonnées Open Graph avec de vraies images
- [ ] Ajouter Google Analytics (optionnel)
- [ ] Traduire en français (version bilingue)

## License

Proprietary - Bloomy © 2025
