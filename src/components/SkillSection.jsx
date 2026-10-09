import React from 'react'
import useWindowSize from '../hooks/useWindowSize'

function SkillSection() {

  //screen size 
  const screenWidth = useWindowSize()

  const isMobileView = screenWidth < 768
  const isTabletView = screenWidth >= 768 && screenWidth < 1024

  // my skills list under heree
  const skillsList = [
    'Adobe Illustrator',
    'Sketch',
    'Prototyping',
    'Figma',
    'Wireframing',
    'HTML & CSS',
    'React',
    'JavaScript',
    'Figma',
    'Logo Designing',
  ]

  return (
    <section
      id="skill"
      style={{
        padding: isMobileView
          ? '70px 24px'
          : isTabletView
          ? '80px 40px'
          : '100px 80px',
        background: '#0d0d1a',
        textAlign: 'center',
      }}
    >

      <h2 style={{
        fontSize: isMobileView
          ? '28px'
          : isTabletView
          ? '32px'
          : '36px',
        fontWeight: '700',
        marginBottom: '40px',



      }}>
        My <span style={{ color: '#a855f7' }}>Skills</span>
      </h2>




      {/* the box that holds all skill tags */}
      <div style={{
        // Updated border and added box-shadow for a permanent glow
        border: '1px solid #7c3aed',
        boxShadow: '0 0 25px rgba(124, 58, 237, 0.2)',
        borderRadius: '12px',

        padding: isMobileView
          ? '30px 20px'
          : isTabletView
          ? '40px'
          : '50px 60px',

        maxWidth: '700px',
        margin: '0 auto',

        display: 'flex',
        flexWrap: 'wrap',
        gap: '14px',
        justifyContent: 'center',
      }}>

        {/* looping skills */}
        {skillsList.map((skillName) => (
          <span
            key={skillName}
            style={{
              padding: isMobileView ? '8px 16px' : '10px 22px',
              border: '1px solid #7c3aed',
              borderRadius: '25px',
              fontSize: isMobileView ? '13px' : '14px',
              color: '#fff',
              cursor: 'default',
              transition: 'all 0.2s',
            }}
            // simple hover effect 
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#7c3aed'
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'transparent'
            }}
          >
            {skillName}
          </span>
        ))}

      </div>
    </section>
  )
}

export default SkillSection