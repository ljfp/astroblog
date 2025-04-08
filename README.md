# Personal Website

This is my personal website built with [Astro](https://astro.build), featuring my blog posts, information about me, and showcasing my open-source projects.

## 📚 Site Sections

- **Blog** - Technology posts and personal opinions
- **About Me** - Introduction to who I am
- **Projects** - Showcase of my open-source work

## 🚀 Project Structure

```text
/
├── public/                | Static assets, like images, should go here.
├── src/                   |
│   ├── blog/              | A collection of blog posts, in Markdown format, as defined in content.config.ts
│   ├── components/        | Astro and Preact components go here.
│   ├── layouts/           | HTML layout for different sections of the website. Also composed with Astro.
│   ├── pages/             | Astro  looks for `.astro` or `.md` files here. Each page is exposed as a route based on its file name.
│   ├── scripts/           | Small, plain JS scripts should go here.
│   ├── styles/            | If the style is associated with a UI component, it should go with the component. Otherwise, put it here.
│   └── content.config.ts  | Here I define schemas for the collections. So far there's only one collection: Blogs.
└── package.json           | Dependencies, devDependencies, Scripts (for NPM), and versioning.
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command             | Action                                           |
| :------------------ | :----------------------------------------------- |
| `npm install`       | Installs dependencies                            |
| `npm run dev`       | Starts local dev server at `localhost:4321`      |
| `npm run build`     | Build the production site to `./dist/`           |
| `npm run preview`   | Preview the build locally, before deploying      |
| `npm run pretty`    | Format code with Prettier                        |
| `npm run lint`      | Lint code with ESLint                            |
| `npm run astro ...` | Run CLI commands like `astro add`, `astro check` |

## 🛠️ Technologies

- [Astro](https://astro.build) - Web framework
- [Preact](https://preactjs.com) - UI components
- [Netlify](https://netlify.com) - Deployment platform
