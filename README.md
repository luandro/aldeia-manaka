# 🕒 Responsive Timeline

A modern, fully customizable React timeline component built with Vite. Features smooth scroll animations, responsive design, and JSON-based configuration.

![Timeline Preview](https://via.placeholder.com/800x400/67CC8E/ffffff?text=Responsive+Timeline+Preview)

## ✨ Features

- 🎨 **Fully Customizable** - Colors, animations, and content via JSON configuration
- 📱 **Responsive Design** - Adapts beautifully to all screen sizes
- ⚡ **Optimized Performance** - Uses Intersection Observer API for smooth scrolling
- 🎭 **Smooth Animations** - CSS transitions with customizable timing
- 🔧 **Easy Configuration** - JSON-based setup for quick customization
- 🚀 **Modern Stack** - Built with React 19 + Vite
- 📦 **Zero Dependencies** - No jQuery or external animation libraries

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd aldeia-manaka

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:5173` to see your timeline in action!

## 📋 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint for code quality |

## 🎨 Customization

### Separated Content and Themes

The timeline uses a clean separation between content and themes:

**Content** (`src/data/timeline-content.json`):
```json
{
  "title": "Your Timeline Title",
  "items": [
    {
      "id": "unique-id",
      "year": "2024",
      "title": "Event Title",
      "content": "Event description..."
    }
  ]
}
```

**Theme** (`src/data/timeline-config.json`):
```json
{
  "name": "Theme Name",
  "theme": {
    "primaryColor": "#67CC8E",
    "secondaryColor": "#56BC83",
    "backgroundColor": "#faf8eb",
    "textColor": "#ffffff",
    "headerBackground": "#3d9e67"
  },
  "animation": {
    "duration": "0.7s",
    "easing": "ease",
    "staggerDelay": "100"
  }
}
```

### Theme Options

| Property | Description | Default |
|----------|-------------|---------|
| `primaryColor` | Main timeline color | `#67CC8E` |
| `secondaryColor` | Gradient secondary color | `#56BC83` |
| `backgroundColor` | Timeline background | `#faf8eb` |
| `textColor` | Text color | `#ffffff` |
| `headerBackground` | Header background color | `#3d9e67` |

### Animation Options

| Property | Description | Default |
|----------|-------------|---------|
| `duration` | Animation duration | `0.7s` |
| `easing` | CSS easing function | `ease` |
| `staggerDelay` | Delay between items (ms) | `100` |

### Timeline Items

Each timeline item supports:

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `id` | string | No | Unique identifier |
| `year` | string | Yes | Display year/date |
| `title` | string | No | Optional title |
| `content` | string | Yes | Main content text |

## 🏗️ Project Structure

```
src/
├── components/
│   ├── Timeline.jsx          # Main timeline component
│   ├── TimelineItem.jsx      # Individual timeline item
│   └── ThemeSwitcher.jsx     # Theme switcher button
├── data/
│   ├── timeline-content.json # Timeline content (title, items)
│   ├── timeline-config.json  # Default theme configuration
│   ├── dark-theme-config.json # Dark theme
│   └── colorful-theme-config.json # Colorful theme
├── App.jsx                   # Root component with theme management
├── App.css                   # Timeline & theme switcher styles
├── index.css                 # Global styles
└── main.jsx                  # App entry point
```

## 🎯 Performance Optimizations

- **Intersection Observer API**: Replaces scroll event listeners for better performance
- **CSS Custom Properties**: Enables dynamic theming without JavaScript
- **Optimized Animations**: Uses CSS transitions instead of JavaScript animations
- **Component Memoization**: Prevents unnecessary re-renders
- **Lazy Loading**: Timeline items animate in only when visible

## 📱 Responsive Breakpoints

| Breakpoint | Description | Changes |
|------------|-------------|---------|
| `> 1020px` | Desktop | Full width timeline items (450px) |
| `700px - 1020px` | Tablet | Responsive width (41vw) |
| `< 700px` | Mobile | Single column layout, full width |

## 🎨 Custom Themes

### Creating a Custom Theme

1. Modify `src/data/timeline-config.json`
2. Update the `theme` object with your colors
3. Save and see changes instantly with hot reload

### Example: Dark Theme

```json
{
  "theme": {
    "primaryColor": "#2d3748",
    "secondaryColor": "#4a5568",
    "backgroundColor": "#1a202c",
    "textColor": "#e2e8f0",
    "headerBackground": "#2b6cb0"
  }
}
```

### Example: Colorful Theme

```json
{
  "theme": {
    "primaryColor": "#ed64a6",
    "secondaryColor": "#f687b3",
    "backgroundColor": "#fef5e7",
    "textColor": "#ffffff",
    "headerBackground": "#d53f8c"
  }
}
```

## 🔧 Advanced Configuration

### Custom Animation Timing

```json
{
  "animation": {
    "duration": "1.2s",
    "easing": "cubic-bezier(0.4, 0, 0.2, 1)",
    "staggerDelay": "200"
  }
}
```

### Loading Data from API

Replace the static JSON import in `App.jsx`:

```jsx
useEffect(() => {
  fetch('/api/timeline-config')
    .then(response => response.json())
    .then(data => setConfig(data))
}, [])
```

### Built-in Theme Switcher

The timeline includes a beautiful theme switcher button in the top-right corner:

- **🎨 Visual theme preview** with color dots
- **Smooth transitions** between themes
- **Mobile responsive** design
- **3 built-in themes**: Default Green, Dark, Colorful Pink
- **Easy to extend** with more themes

The theme switcher automatically:
- Preserves timeline content across theme changes
- Applies smooth CSS transitions
- Updates all theme variables instantly
- Maintains responsive behavior

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

The `dist` folder contains the optimized production build.

### Deploy to Vercel

```bash
npm install -g vercel
vercel --prod
```

### Deploy to Netlify

```bash
npm run build
# Upload dist folder to Netlify
```

### Deploy to GitHub Pages

This project includes automated GitHub Pages deployment via GitHub Actions.

**Automatic Deployment:**
- Push to `main` branch triggers automatic deployment
- No manual setup required after initial configuration
- Built files are automatically deployed to GitHub Pages

**Manual Setup (if needed):**
1. Go to your repository Settings → Pages
2. Set Source to "GitHub Actions"
3. Push to main branch to trigger deployment

**Manual Deployment:**
```bash
npm install --save-dev gh-pages
npm run build
npx gh-pages -d dist
```

## 🧪 Testing

### Running Tests

```bash
# Install testing dependencies
npm install --save-dev @testing-library/react @testing-library/jest-dom vitest

# Run tests
npm run test
```

### Example Test

```jsx
import { render, screen } from '@testing-library/react'
import Timeline from './components/Timeline'

test('renders timeline title', () => {
  const config = { title: 'Test Timeline', items: [] }
  render(<Timeline config={config} />)
  expect(screen.getByText('Test Timeline')).toBeInTheDocument()
})
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE.txt) file for details.

## 🙏 Acknowledgments

- Original timeline design inspiration from CodePen community
- React team for the amazing framework
- Vite team for the lightning-fast build tool
- Intersection Observer API for smooth performance

## 📞 Support

- 📧 Email: your-email@example.com
- 🐛 Issues: [GitHub Issues](https://github.com/luandro/aldeia-manaka/issues)
- 💬 Discussions: [GitHub Discussions](https://github.com/luandro/aldeia-manaka/discussions)

## 🚀 Quick Customization Examples

### Add Your Timeline Content
```json
// src/data/timeline-content.json
{
  "title": "My Company Timeline",
  "items": [
    {
      "id": "founding",
      "year": "2020",
      "title": "Company Founded",
      "content": "Started our journey with a vision to change the world."
    },
    {
      "id": "growth",
      "year": "2023",
      "title": "Major Growth",
      "content": "Expanded to 50+ employees and launched new products."
    }
  ]
}
```

### Create Custom Theme
```json
// src/data/ocean-theme-config.json
{
  "name": "Ocean Blue",
  "theme": {
    "primaryColor": "#0ea5e9",
    "secondaryColor": "#0284c7",
    "backgroundColor": "#f0f9ff",
    "textColor": "#ffffff",
    "headerBackground": "#0369a1"
  },
  "animation": {
    "duration": "0.9s",
    "easing": "ease-out",
    "staggerDelay": "120"
  }
}
```

### Add Theme to App
```jsx
// src/App.jsx - Add your custom theme
import oceanTheme from './data/ocean-theme-config.json'

const themes = {
  default: defaultTheme,
  dark: darkTheme,
  colorful: colorfulTheme,
  ocean: oceanTheme  // Your new theme
}
```

---

Made with ❤️ and React
