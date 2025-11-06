# Using LLMs in Your Work — Training Site

A static website built with [Eleventy](https://www.11ty.dev/) for AI/LLM training resources. Features a clean, minimal design with comprehensive prompt patterns, tools guides, and student starter templates.

**Live Site:** [https://ucm-vista.github.io/ai-training/](https://ucm-vista.github.io/ai-training/)

---

## Features

- **Modern, accessible design** matching training slide aesthetics
- **Comprehensive prompt library** with reusable patterns for writing, research, coding, and data visualization
- **Interactive demos** showing effective LLM usage
- **Student starter templates** for projects and reflection
- **Responsive layout** that works on all devices
- **GitHub Pages deployment** with automatic builds

---

## Quick Start

### Prerequisites

- Node.js 18+ and npm
- Git

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/ucm-vista/ai-training.git
   cd ai-training
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:8080`

The site will automatically reload when you make changes to files in the `src/` directory.

---

## Project Structure

```
.
├── .github/
│   └── workflows/
│       └── pages.yml          # GitHub Actions workflow for deployment
├── src/
│   ├── _data/
│   │   └── site.json          # Site metadata and configuration
│   ├── _includes/
│   │   ├── layout.njk         # Base HTML layout
│   │   ├── page.njk           # Page template
│   │   └── components/
│   │       ├── header.njk     # Site header with navigation
│   │       ├── footer.njk     # Site footer
│   │       └── card.njk       # Reusable card component
│   ├── assets/
│   │   └── styles.css         # Site styles (design system)
│   ├── prompt-library/
│   │   ├── index.md           # Prompt library home
│   │   ├── writing.md         # Writing prompt patterns
│   │   ├── research.md        # Research prompt patterns
│   │   ├── coding.md          # Coding prompt patterns
│   │   └── data-visualization.md  # Data viz patterns
│   ├── student-starters/
│   │   ├── index.md           # Starters home
│   │   ├── prompt-template.md # Prompt structuring template
│   │   ├── project-brief.md   # Project planning template
│   │   └── reflection-template.md  # Post-project reflection
│   ├── index.md               # Home page
│   ├── agenda.md              # Training agenda
│   ├── follow-along.md        # Live session links
│   ├── demos.md               # Example demonstrations
│   └── tools.md               # Tools reference guide
├── .eleventy.js               # Eleventy configuration
├── package.json               # Node dependencies and scripts
└── README.md                  # This file
```

---

## Building

### Development Build

```bash
npm run build
```

This generates the static site in the `_site/` directory.

### Production Deployment

The site automatically deploys to GitHub Pages when you push to the `main` branch. The GitHub Actions workflow:

1. Installs dependencies
2. Builds the site with Eleventy
3. Deploys to the `gh-pages` branch
4. Makes it available at the configured URL

---

## Customization

### Updating Site Metadata

Edit `src/_data/site.json`:

```json
{
  "title": "Your Site Title",
  "description": "Your description",
  "url": "https://yourusername.github.io/yourrepo/",
  "author": "Your Name"
}
```

### Modifying the Design

The design system is defined in `src/assets/styles.css`:

```css
:root {
  --bg: #FAFAF9;          /* Background */
  --text: #1F2937;        /* Primary text */
  --muted: #6B7280;       /* Secondary text */
  --border: #E5E7EB;      /* Borders */
  --lav: #A78BFA;         /* Accent color 1 */
  --teal: #67E8F9;        /* Accent color 2 */
  --radius: 18px;         /* Border radius */
}
```

Adjust these CSS variables to change the color scheme.

### Adding New Pages

1. Create a new `.md` file in the appropriate `src/` directory
2. Add frontmatter:
   ```yaml
   ---
   layout: page.njk
   title: Your Page Title
   subtitle: Optional subtitle
   ---
   ```
3. Write your content in Markdown
4. Add a link to the new page in `src/_includes/components/header.njk` if needed

### Adding Images

1. Place image files in `src/assets/`
2. Reference them in markdown: `![Alt text](/ai-training/assets/your-image.png)`
3. The `src/assets/` folder is copied to the output automatically

**Note:** You need to add the actual hero images:
- `src/assets/intro-abstract-clay.png`
- `src/assets/overview-abstract-glass.png`

These are referenced in the content but not included in this repository.

---

## Adding Content

### Writing in Markdown

All content pages use Markdown. Eleventy converts them to HTML using the templates in `src/_includes/`.

**Supported features:**
- Headings (`#`, `##`, `###`, etc.)
- Lists (ordered and unordered)
- Links and images
- Code blocks (with syntax highlighting)
- Blockquotes
- Tables
- HTML (when needed)

**Example:**

```markdown
---
layout: page.njk
title: My New Page
subtitle: A helpful subtitle
---

## Introduction

Here's some **bold text** and *italic text*.

### Code Example

```python
def hello():
    print("Hello, world!")
```

### Links

Check out the [Prompt Library](/ai-training/prompt-library/).
```

### Using Components

You can use Nunjucks template syntax in Markdown files:

```markdown
<div class="card">

### Card Title

Card content here...

</div>
```

---

## Deployment

### GitHub Pages Setup

1. **Enable GitHub Pages** in your repository settings:
   - Go to Settings → Pages
   - Source: "GitHub Actions"

2. **Push to main branch**:
   ```bash
   git add .
   git commit -m "Your commit message"
   git push origin main
   ```

3. **Check the deployment**:
   - Go to the "Actions" tab in your repository
   - Watch the workflow run
   - Once complete, visit your site URL

### Custom Domain (Optional)

To use a custom domain:

1. Add a `CNAME` file to `src/` with your domain name
2. Configure DNS records with your domain provider
3. Enable custom domain in GitHub Pages settings

---

## Development Tips

### Live Reload

The development server (`npm run dev`) watches for file changes and automatically reloads your browser.

### Checking Build Output

The built site is in `_site/`. You can inspect the generated HTML to debug issues.

### Clearing Cache

If you see stale content:
```bash
rm -rf _site
npm run build
```

### Linting Markdown

Consider installing a Markdown linter for consistent formatting:
```bash
npm install --save-dev markdownlint-cli
```

---

## Accessibility

This site is designed with accessibility in mind:

- ✅ Semantic HTML structure
- ✅ Sufficient color contrast (WCAG AA compliant)
- ✅ Alt text for all images (you must provide this)
- ✅ Keyboard navigation support
- ✅ Focus indicators on interactive elements
- ✅ Responsive design for all screen sizes

When adding content:
- Always include alt text for images
- Use proper heading hierarchy (don't skip levels)
- Ensure links have descriptive text
- Test keyboard navigation

---

## Browser Support

- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome on Android)

---

## Contributing

### Making Changes

1. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. Make your changes and test locally

3. Commit with clear messages:
   ```bash
   git commit -m "Add new prompt pattern for X"
   ```

4. Push and create a pull request:
   ```bash
   git push origin feature/your-feature-name
   ```

### Content Guidelines

- Use clear, concise language
- Include examples for complex concepts
- Maintain consistent formatting
- Add alt text for all images
- Test all links

---

## Troubleshooting

### Build Fails

**Problem:** npm install fails
- **Solution:** Ensure Node.js 18+ is installed: `node --version`

**Problem:** Eleventy build errors
- **Solution:** Check for syntax errors in frontmatter (YAML between `---`)
- **Solution:** Ensure all referenced templates exist

**Problem:** Pages not found (404)
- **Solution:** Check that paths use `/ai-training/` prefix (configured in `.eleventy.js`)
- **Solution:** Verify file exists in `src/` and has proper frontmatter

### Styling Issues

**Problem:** Styles not loading
- **Solution:** Clear cache and rebuild: `rm -rf _site && npm run build`
- **Solution:** Check browser console for errors

**Problem:** Layout broken on mobile
- **Solution:** Test responsive breakpoints in browser dev tools
- **Solution:** Review CSS in `src/assets/styles.css`

### Deployment Issues

**Problem:** GitHub Actions fails
- **Solution:** Check the Actions tab for error messages
- **Solution:** Ensure `package.json` has correct scripts
- **Solution:** Verify Node version in workflow matches local version

**Problem:** Site not updating after push
- **Solution:** Check that push was to `main` branch
- **Solution:** Wait for Actions workflow to complete (check Actions tab)
- **Solution:** Hard refresh browser (Cmd+Shift+R or Ctrl+Shift+R)

---

## Tech Stack

- **[Eleventy](https://www.11ty.dev/)** - Static site generator
- **[Nunjucks](https://mozilla.github.io/nunjucks/)** - Templating engine
- **Vanilla CSS** - Styling (no frameworks)
- **Markdown** - Content authoring
- **[GitHub Pages](https://pages.github.com/)** - Hosting
- **[GitHub Actions](https://github.com/features/actions)** - CI/CD

---

## Resources

- [Eleventy Documentation](https://www.11ty.dev/docs/)
- [Nunjucks Templating](https://mozilla.github.io/nunjucks/templating.html)
- [Markdown Guide](https://www.markdownguide.org/)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)

---

## License

This project is created for educational purposes. Feel free to adapt and modify for your own training materials.

---

## Contact

For questions or suggestions about this training site:
- **GitHub Issues**: [Create an issue](https://github.com/ucm-vista/ai-training/issues)
- **Author**: Emery Silberman

---

## Acknowledgments

Built for the "Using LLMs in Your Work" training session. Special thanks to all participants and contributors!
