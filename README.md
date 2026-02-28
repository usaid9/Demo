# MERN Stack Developer Portfolio

A modern, responsive single-page portfolio built with **React + Vite + Tailwind CSS**.

![Portfolio Preview](https://github.com/user-attachments/assets/c22598b2-0f92-4883-9f86-31924089c1b4)

## Sections

- **Hero** – Name, title, CTA buttons, social links
- **About** – Bio, location, resume download, stats
- **Skills** – Categorised skill bars (Frontend / Backend / DB & DevOps) + tech badge cloud
- **Projects** – 6 project cards with tags, live demo & source links
- **Contact** – Contact form (submit-ready), contact info, social links
- **Footer** – Nav links, social icons, copyright

## Tech Stack

| Layer | Technology |
|-------|-----------|
| UI Framework | React 19 |
| Build Tool | Vite 7 |
| Styling | Tailwind CSS v4 |
| Icons | Lucide React |

## Getting Started

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

## Customisation

All placeholder data lives in the component files under `src/components/`:

| File | What to edit |
|------|-------------|
| `Hero.jsx` | Name, title, tagline, social links |
| `AboutSection.jsx` | Bio, location, email, stats |
| `Skills.jsx` | Skill categories, levels, tech badges |
| `Projects.jsx` | Project cards (title, description, tags, links) |
| `Contact.jsx` | Contact info, form action (wire up to backend API) |
| `Navbar.jsx` / `Footer.jsx` | Brand name, nav links |

