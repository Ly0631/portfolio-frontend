import React, { useState, useEffect } from 'react'
import useWindowSize from '../hooks/useWindowSize'

function Navbar() {

  //screen size (same as other components)
  const screenWidth = useWindowSize()

  const isMobileView = screenWidth < 768
  const isTabletView = screenWidth >= 768 && screenWidth < 1024

  // menu for mobile
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // for active section highlight
  const [currentSection, setCurrentSection] = useState('home')

  // nav links list
  const menuLinks = ['Home', 'About', 'Skill', 'Projects', 'Contact']


  // Helper function to safely get DOM element ID
  const getSectionId = (item) => {
    const lower = item.toLowerCase()
    if (lower === 'skill') return document.getElementById('skills') ? 'skills' : 'skill'
    if (lower === 'projects') return document.getElementById('projects') ? 'projects' : 'project'
    return lower
  }


  useEffect(() => {

  
    const handleSections = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setCurrentSection(entry.target.id)
        }
      })
    }

    const observer = new IntersectionObserver(handleSections, {
      root: null,
      threshold: 0.2, 
    })

    
    menuLinks.forEach((item) => {
      const sectionId = getSectionId(item)
      const sectionElement = document.getElementById(sectionId)
      if (sectionElement) {
        observer.observe(sectionElement)
      }
    })

    return () => observer.disconnect()

  }, [])


  // scroll to section when clicked
  function goToSection(sectionName) {
    const id = getSectionId(sectionName)
    const element = document.getElementById(id)

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }

    // close menu after click in mbile
    setIsMenuOpen(false)
  }

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: isMobileView
        ? '16px 24px'
        : isTabletView
        ? '18px 40px'
        : '20px 80px',
      backgroundColor: 'rgba(13, 13, 26, 0.9)',
      backdropFilter: 'blur(10px)',
      zIndex: 100,
    }}>

      {/* logo */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <span style={{
          fontSize: isMobileView ? '18px' : '22px',
          fontWeight: '700',
          color: '#fff'
        }}>
          LyPortfolio<span style={{ color: '#a855f7' }}>.</span>
        </span>
      </div>


      {/* this on mobile only */}
      {isMobileView && (
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'column',
            gap: '5px',
            padding: '4px',
          }}
        >
          {/* simple 3line icon for mobilre */}
          <span style={{ width: '24px', height: '2px', backgroundColor: '#fff' }} />
          <span style={{ width: '24px', height: '2px', backgroundColor: '#fff' }} />
          <span style={{ width: '24px', height: '2px', backgroundColor: '#fff' }} />
        </button>
      )}


      {/* desktop and tablet links */}
      {!isMobileView && (
        <ul style={{
          display: 'flex',
          gap: isTabletView ? '24px' : '35px',
          listStyle: 'none'
        }}>
          {menuLinks.map((item) => {

            const sectionId = getSectionId(item)
            const isActive = currentSection === sectionId || currentSection === item.toLowerCase()

            return (
              <li key={item}>
                <button
                  onClick={() => goToSection(item)}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: isActive ? '#a855f7' : '#ccc',
                    fontSize: isTabletView ? '14px' : '15px',
                    cursor: 'pointer',
                    fontWeight: isActive ? '600' : '400',
                    fontFamily: 'Poppins, sans-serif',
                    transition: 'color 0.3s ease',
                    position: 'relative'
                  }}
                  // hover effect (basic lang muna)
                  onMouseEnter={(e) => e.target.style.color = '#a855f7'}
                  onMouseLeave={(e) => {
                    e.target.style.color = isActive ? '#a855f7' : '#ccc'
                  }}
                >
                  {item}

                  {/* an underline to know where/what section is */}
                  {isActive && (
                    <span style={{
                      position: 'absolute',
                      bottom: '-5px',
                      left: '0',
                      width: '100%',
                      height: '2px',
                      backgroundColor: '#a855f7',
                      borderRadius: '2px'
                    }} />
                  )}
                </button>
              </li>
            )
          })}
        </ul>
      )}


      {/* mobille dropdown menu */}
      {isMobileView && isMenuOpen && (
        <div style={{
          position: 'absolute',
          top: '60px',
          left: 0,
          width: '100%',
          backgroundColor: 'rgba(13, 13, 26, 0.97)',
          display: 'flex',
          flexDirection: 'column',
          padding: '16px 0',
          borderTop: '1px solid #2d1b69',
        }}>
          {menuLinks.map((item) => {

            const sectionId = getSectionId(item)
            const isActive = currentSection === sectionId || currentSection === item.toLowerCase()

            return (
              <button
                key={item}
                onClick={() => goToSection(item)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: isActive ? '#a855f7' : '#ccc',
                  fontSize: '16px',
                  cursor: 'pointer',
                  fontFamily: 'Poppins, sans-serif',
                  padding: '12px 24px',
                  textAlign: 'left',
                  transition: 'color 0.2s',
                  backgroundColor: isActive
                    ? 'rgba(168, 85, 247, 0.05)'
                    : 'transparent'
                }}
                onMouseEnter={(e) => e.target.style.color = '#a855f7'}
                onMouseLeave={(e) => {
                  e.target.style.color = isActive ? '#a855f7' : '#ccc'
                }}
              >
                {item}
              </button>
            )
          })}
        </div>
      )}

    </nav>
  )
}

export default Navbar