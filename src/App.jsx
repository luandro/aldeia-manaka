import { useState, useEffect } from 'react'
import Timeline from './components/Timeline'
import ThemeSwitcher from './components/ThemeSwitcher'
import timelineContent from './data/timeline-content.json'
import defaultTheme from './data/timeline-config.json'
import darkTheme from './data/dark-theme-config.json'
import colorfulTheme from './data/colorful-theme-config.json'
import './App.css'

function App() {
  const [content, setContent] = useState(null)
  const [currentTheme, setCurrentTheme] = useState('default')

  const themes = {
    default: defaultTheme,
    dark: darkTheme,
    colorful: colorfulTheme
  }

  useEffect(() => {
    // Load content (in a real app, this could be from an API)
    setContent(timelineContent)
  }, [])

  const handleThemeChange = (themeKey) => {
    setCurrentTheme(themeKey)
  }

  if (!content) {
    return <div>Loading...</div>
  }

  const config = {
    title: content.title,
    items: content.items,
    theme: themes[currentTheme].theme,
    animation: themes[currentTheme].animation
  }

  return (
    <div>
      <ThemeSwitcher
        themes={themes}
        currentTheme={currentTheme}
        onThemeChange={handleThemeChange}
      />
      <Timeline config={config} />
    </div>
  )
}

export default App
