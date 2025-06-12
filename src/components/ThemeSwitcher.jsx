import { useState } from 'react'

const ThemeSwitcher = ({ themes, currentTheme, onThemeChange }) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleThemeSelect = (themeKey) => {
    onThemeChange(themeKey)
    setIsOpen(false)
  }

  return (
    <div className="theme-switcher">
      <button
        className="theme-switcher-button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Switch theme"
      >
        🎨 {themes[currentTheme]?.name || 'Theme'}
      </button>

      {isOpen && (
        <div className="theme-switcher-dropdown">
          {Object.entries(themes).map(([key, theme]) => (
            <button
              key={key}
              className={`theme-option ${key === currentTheme ? 'active' : ''}`}
              onClick={() => handleThemeSelect(key)}
            >
              <span
                className="theme-preview"
                style={{ backgroundColor: theme.theme.primaryColor }}
              ></span>
              {theme.name}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default ThemeSwitcher
