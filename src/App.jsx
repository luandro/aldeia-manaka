import { useState, useEffect } from 'react'
import Timeline from './components/Timeline'
import ThemeSwitcher from './components/ThemeSwitcher'
import HeroSection from './components/HeroSection'
import TeamsSection from './components/TeamsSection'
import MilestonesTable from './components/MilestonesTable'
import RisksTable from './components/RisksTable'
import BudgetSection from './components/BudgetSection'
import SectionDivider from './components/SectionDivider'
import ErrorBoundary from './components/ErrorBoundary'
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
    items: content.timeline || [],
    theme: themes[currentTheme].theme,
    animation: themes[currentTheme].animation
  }

  return (
    <ErrorBoundary>
      <div className="app">
        <ThemeSwitcher
          themes={themes}
          currentTheme={currentTheme}
          onThemeChange={handleThemeChange}
        />
        <ErrorBoundary>
          <HeroSection project={content.project || {}} />
        </ErrorBoundary>
        <SectionDivider type="wave" color="#f4f4f4" />
        <ErrorBoundary>
          <TeamsSection teams={content.teams || []} />
        </ErrorBoundary>
        <SectionDivider type="curve" color="#ffffff" flip={true} />
        <ErrorBoundary>
          <Timeline config={timelineConfig} />
        </ErrorBoundary>
        <SectionDivider type="triangle" color="#f4f4f4" />
        <ErrorBoundary>
          <MilestonesTable milestones={content.milestones || []} />
        </ErrorBoundary>
        <SectionDivider type="wave" color="#ffffff" flip={true} />
        <ErrorBoundary>
          <RisksTable risks={content.risks || []} />
        </ErrorBoundary>
        <SectionDivider type="curve" color="#f4f4f4" />
        <ErrorBoundary>
          <BudgetSection budget={content.budget || []} />
        </ErrorBoundary>
      </div>
    </ErrorBoundary>
  )
}

export default App
