# raymondsotto.dev

A modern portfolio website built with React and TypeScript, showcasing my projects, skills, and professional experience.

## 🚀 Tech Stack

- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: Modern CSS with responsive design
- **Deployment**: Optimized for modern web standards

## 🌟 Features

- Clean, professional design
- Responsive layout for all devices
- Interactive project showcases
- Contact information and social links
- Fast loading and optimized performance

## 🛠️ Development

### Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Project Structure

```
src/
├── components/     # Reusable UI components
├── pages/         # Page components (Home, About, Projects, Contact)
├── features/      # Feature-specific components
├── hooks/         # Custom React hooks
├── services/      # API services and external integrations
├── styles/        # Global styles and themes
├── types/         # TypeScript type definitions
└── utils/         # Utility functions
```

## 📧 Contact

Feel free to reach out for collaborations or opportunities!

---

Built with ❤️ by Raymond Joseph Sotto
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
