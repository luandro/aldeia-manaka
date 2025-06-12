import { useState, useEffect } from 'react'
import Timeline from './components/Timeline'
import HeroSection from './components/HeroSection'
import TeamsSection from './components/TeamsSection'
import MilestonesTable from './components/MilestonesTable'
import RisksTable from './components/RisksTable'
import BudgetSection from './components/BudgetSection'
import SectionDivider from './components/SectionDivider'
import ErrorBoundary from './components/ErrorBoundary'
import Footer from './components/Footer'
import aldeiaContent from './data/aldeia-maiaca-content.json'
import aldeiaTheme from './data/aldeia-maiaca-theme.json'
import './App.css'

function App() {
  const [content, setContent] = useState(null)

  useEffect(() => {
    // Load content (in a real app, this could be from an API)
    setContent(aldeiaContent)
  }, [])

  if (!content) {
    return <div>Loading...</div>
  }

  const timelineConfig = {
    title: 'Cronograma do Projeto',
    items: content.timeline || [],
    theme: aldeiaTheme.theme,
    animation: aldeiaTheme.animation
  }

  return (
    <ErrorBoundary>
      <div className="app">
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
        <Footer />
      </div>
    </ErrorBoundary>
  )
}

export default App
