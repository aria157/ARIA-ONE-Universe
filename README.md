# ARIA-ONE-Universe

ARIA ONE Universe: A monorepo containing three interconnected websites - ARIA ONE, KikiX, and AURX FreQ.

## 🌟 Projects

### ARIA ONE
Welcome to the ARIA ONE Universe - the central hub of our ecosystem.

### KikiX
Experience the Future of Innovation with KikiX.

### AURX FreQ
Tune into the Frequency of Tomorrow with AURX FreQ.

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm

### Installation

```bash
# Clone the repository
git clone https://github.com/aria157/ARIA-ONE-Universe.git
cd ARIA-ONE-Universe

# Install dependencies for all apps
cd apps/aria-one && npm install && cd ../..
cd apps/kikix && npm install && cd ../..
cd apps/aurx-freq && npm install && cd ../..
```

### Development

Run individual apps in development mode:

```bash
# ARIA ONE
npm run dev:aria-one

# KikiX
npm run dev:kikix

# AURX FreQ
npm run dev:aurx-freq
```

The apps will be available at:
- ARIA ONE: http://localhost:3000
- KikiX: http://localhost:3001
- AURX FreQ: http://localhost:3002

**Note:** Each app runs on a different port to avoid conflicts. Configure the ports in each app's `package.json` dev script if needed.

### Building

Build all applications:

```bash
npm run build:all
```

Or build individually:

```bash
npm run build:aria-one
npm run build:kikix
npm run build:aurx-freq
```

### Linting

Lint all applications:

```bash
npm run lint:all
```

## 📦 Project Structure

```
ARIA-ONE-Universe/
├── apps/
│   ├── aria-one/       # ARIA ONE website
│   ├── kikix/          # KikiX website
│   └── aurx-freq/      # AURX FreQ website
├── package.json        # Root package.json with monorepo scripts
├── vercel.json         # Vercel deployment configuration
└── README.md
```

## 🌐 Deployment

This project is configured for deployment on Vercel.

### Main Deployment

The **ARIA ONE** app serves as the main landing page for the ARIA ONE Universe and includes links to the other projects. Simply connect this repository to Vercel, and it will automatically deploy the ARIA ONE app.

Visit the live site at: [https://aria-one-universe.vercel.app](https://aria-one-universe.vercel.app)

### Individual App Deployments

Each app can also be deployed individually to its own Vercel project:

1. **ARIA ONE**: Deploy from `apps/aria-one`
2. **KikiX**: Deploy from `apps/kikix` → [kikix.vercel.app](https://kikix.vercel.app)
3. **AURX FreQ**: Deploy from `apps/aurx-freq` → [aurx-freq.vercel.app](https://aurx-freq.vercel.app)

To deploy an individual app:
1. Create a new project in Vercel
2. Set the **Root Directory** to the app's folder (e.g., `apps/kikix`)
3. Vercel will automatically detect the Next.js framework
4. Deploy!

## 🛠 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Deployment**: Vercel

## 📄 License

MIT

