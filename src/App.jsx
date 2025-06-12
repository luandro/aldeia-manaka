import { useState, useEffect } from 'react'
import Timeline from './components/Timeline'
import ThemeSwitcher from './components/ThemeSwitcher'
import HeroSection from './components/HeroSection'
import TeamsSection from './components/TeamsSection'
import MilestonesTable from './components/MilestonesTable'
import RisksTable from './components/RisksTable'
import BudgetSection from './components/BudgetSection'
import SectionDivider from './components/SectionDivider'
import aldeiaContent from './data/aldeia-maiaca-content.json'
import defaultTheme from './data/timeline-config.json'
import darkTheme from './data/dark-theme-config.json'
import colorfulTheme from './data/colorful-theme-config.json'
import aldeiaTheme from './data/aldeia-maiaca-theme.json'
import './App.css'

function App() {
  const [content, setContent] = useState(null)
  const [currentTheme, setCurrentTheme] = useState('aldeia')

  const themes = {
    default: defaultTheme,
    dark: darkTheme,
    colorful: colorfulTheme,
    aldeia: aldeiaTheme
  }

  useEffect(() => {
    // Load content (in a real app, this could be from an API)
    setContent(aldeiaContent)
  }, [])

  const handleThemeChange = (themeKey) => {
    setCurrentTheme(themeKey)
  }

  if (!content) {
    return <div>Loading...</div>
  }

  const timelineConfig = {
    title: 'Cronograma do Projeto',
    items: content.timeline,
    theme: themes[currentTheme].theme,
    animation: themes[currentTheme].animation
  }

  return (
    <div className="app">
      <ThemeSwitcher
        themes={themes}
        currentTheme={currentTheme}
        onThemeChange={handleThemeChange}
      />
      <HeroSection project={content.project} />
      <SectionDivider type="wave" color="#f4f4f4" />
      <TeamsSection teams={content.teams} />
      <SectionDivider type="curve" color="#ffffff" flip={true} />
      <Timeline config={timelineConfig} />
      <SectionDivider type="triangle" color="#f4f4f4" />
      <MilestonesTable milestones={content.milestones} />
      <SectionDivider type="wave" color="#ffffff" flip={true} />
      <RisksTable risks={content.risks} />
      <SectionDivider type="curve" color="#f4f4f4" />
      <BudgetSection budget={content.budget} />
    </div>
  )
}

export default App
