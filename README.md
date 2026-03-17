<div align="center">
  <img src="public/readme_icon.png" alt="eWybory logo" width="120" />
  <h1>eWybory</h1>
  <p><strong>Polish Election Reference Application</strong></p>

  <p>
    <img src="https://img.shields.io/badge/Vue.js-3.x-4FC08D?logo=vue.js&logoColor=white" alt="Vue 3" />
    <img src="https://img.shields.io/badge/TypeScript-4.5-3178C6?logo=typescript&logoColor=white" alt="TypeScript" />
    <img src="https://img.shields.io/badge/SCSS-Sass-CC6699?logo=sass&logoColor=white" alt="SCSS" />
    <img src="https://img.shields.io/badge/PWA-enabled-5A0FC8?logo=pwa&logoColor=white" alt="PWA" />
    <img src="https://img.shields.io/badge/license-MIT-blue" alt="License" />
  </p>
</div>

---

## 📖 About

**eWybory** *(Polish: "Elections")* is a lightweight, single-page web application for browsing Polish election candidates and results. It displays election data organized by year and election type, showing candidate names alongside their affiliated political parties with visual party branding (colors and logos).

The application supports four election categories:

| Code | Polish | English |
|------|--------|---------|
| `0` | samorządowe | Local / Municipal |
| `1` | europejskie | European Parliament |
| `2` | prezydenckie | Presidential |
| `3` | parlamentarne | Parliamentary |

---

## ✨ Features

- 🗳️ **Election browser** — View candidates grouped by election year and type
- 🎨 **Party branding** — Color-coded cards with party logos for quick recognition
- 📱 **Progressive Web App** — Installable with offline support via service workers
- 🔒 **Private data support** — Personal voting history stored in a local, gitignored file
- ⚡ **Fast & lightweight** — Static data, no backend required

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| [Vue.js](https://vuejs.org/) | 3.2 | Frontend framework |
| [Vue Router](https://router.vuejs.org/) | 4.0 | Client-side routing |
| [Vuex](https://vuex.vuejs.org/) | 4.0 | State management |
| [TypeScript](https://www.typescriptlang.org/) | 4.5 | Type-safe JavaScript |
| [SCSS / Sass](https://sass-lang.com/) | 1.x | Styling |
| [Vue CLI](https://cli.vuejs.org/) | 5.0 | Build tooling |
| [ESLint](https://eslint.org/) + [Prettier](https://prettier.io/) | — | Linting & formatting |

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) **≥ 14**
- **npm** (bundled with Node.js)

### Installation

```bash
# Clone the repository
git clone https://github.com/mslotwinski-dev/eWybory.git
cd eWybory

# Install dependencies
npm install
```

### Running in Development

```bash
npm run start
```

Open [http://localhost:8080](http://localhost:8080) in your browser. The app hot-reloads on file changes.

### Building for Production

```bash
npm run build
```

The optimized build is output to the `dist/` directory.

---

## 📜 Available Scripts

| Command | Description |
|---|---|
| `npm run start` | Start local dev server with hot-reload |
| `npm run build` | Compile & minify for production |
| `npm run lint` | Lint and auto-fix source files |
| `npm run format` | Format all source files with Prettier |

---

## 🗂️ Project Structure

```
eWybory/
├── public/                   # Static assets & HTML template
│   ├── index.html
│   └── img/                  # PWA icons
├── src/
│   ├── assets/
│   │   └── parties/          # Party logo images (PiS, PO, P2050, PSL, …)
│   ├── components/
│   │   ├── Elect.vue         # Election card (party logo, name, color)
│   │   └── Navbar.vue        # Top navigation bar
│   ├── views/
│   │   └── Home.vue          # Main page — lists all elections
│   ├── router/index.ts       # Vue Router configuration
│   ├── store/index.ts        # Vuex store
│   ├── static/
│   │   ├── types.ts          # ElecType enum
│   │   ├── parties.ts        # Party definitions (name, icon, color)
│   │   ├── choices.ts        # Election data (public)
│   │   └── private.ts        # Personal voting data (gitignored)
│   ├── styles/
│   │   ├── theme.scss        # Color variables & theme helpers
│   │   ├── root.scss         # Global resets & base styles
│   │   └── fonts.scss        # Google Fonts imports
│   ├── App.vue               # Root component
│   └── main.ts               # Application entry point
├── .eslintrc.js
├── .prettierrc.json
├── tsconfig.json
├── vue.config.js
└── package.json
```

---

## ➕ Adding Election Data

Election data lives in `src/static/choices.ts`. Each entry follows this shape:

```typescript
import parties from './parties'
import { ElecType } from './types'

export default [
  {
    year: 2025,
    type: ElecType.President,   // Local | European | President | Parliamentary
    elections: [
      {
        party: parties.PO,      // Reference a party from parties.ts
        person: 'Jan Kowalski', // Candidate full name
        comment: 'Prezydent',   // Office / additional note
      },
    ],
  },
]
```

To keep personal voting history private, add your sensitive entries to `src/static/private.ts` (already listed in `.gitignore`).

---

## 🎨 Supported Parties

| Key | Full Name | Color |
|---|---|---|
| `None` | Niezależny (Independent) | ![#7B8991](https://placehold.co/12x12/7B8991/7B8991.png) `#7B8991` |
| `PiS` | Prawo i Sprawiedliwość | ![#073A76](https://placehold.co/12x12/073A76/073A76.png) `#073A76` |
| `PO` | Platforma Obywatelska | ![#F79528](https://placehold.co/12x12/F79528/F79528.png) `#F79528` |
| `P2050` | Polska 2050 | ![#FBC314](https://placehold.co/12x12/FBC314/FBC314.png) `#FBC314` |
| `PSL` | Polskie Stronnictwo Ludowe | ![#1BB100](https://placehold.co/12x12/1BB100/1BB100.png) `#1BB100` |

New parties can be added to `src/static/parties.ts` and their logos placed in `src/assets/parties/`.

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/my-feature`
3. Commit your changes: `git commit -m 'feat: add my feature'`
4. Push to your fork: `git push origin feature/my-feature`
5. Open a Pull Request

Make sure your code passes linting before submitting:

```bash
npm run lint
npm run format
```

---

## 📄 License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

<div align="center">
  Made with ❤️ by <a href="https://github.com/mslotwinski-dev">mslotwinski-dev</a>
</div>
