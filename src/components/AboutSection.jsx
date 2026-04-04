import React from 'react'
import useWindowSize from '../hooks/useWindowSize'

function AboutSection() {

  // screen size 
  const screenWidth = useWindowSize()

  const isMobileView = screenWidth < 768
  const isTabletView = screenWidth >= 768 && screenWidth < 1024

  return (
    <section
      id="about"
      style={{
        padding: isMobileView 
          ? '70px 24px' 
          : isTabletView 
          ? '80px 40px' 
          : '100px 80px',
        background: '#0f0f1f',
      }}
    >
      <div style={{
        display: 'flex',

        // stack on mobile
        flexDirection: isMobileView ? 'column' : 'row',

        alignItems: 'flex-start',
        gap: isMobileView ? '36px' : '60px',
        maxWidth: '1000px',
        margin: '0 auto',
      }}>



        {/* photo on the left ....if i want to add pic here again here under... */}
        



        {/* text on the right */}
        <div style={{ textAlign: 'left', width: '100%' }}>

          <h2 style={{
            fontSize: isMobileView 
              ? '28px' 
              : isTabletView 
              ? '32px' 
              : '36px',
            fontWeight: '700',
            marginBottom: '20px',
          }}>
            About <span style={{ color: '#a855f7' }}>Me</span>
          </h2>

          {/* short intro about me */}
          <p style={{
            color: '#ccc',
            fontSize: isMobileView ? '14px' : '15px',
            lineHeight: '1.8',
            marginBottom: '16px',
            textAlign: 'justify'
          }}>
            I'm Alyssa, an IT student and UI/UX designer committed to creating stunning, user-first digital experiences.
            I create interfaces that combine creative expression with practical design, reflecting from my background
            in digital art and my studies in technology.
          </p>

          {/* second paragraph (more personal thoughts) */}
          <p style={{
            color: '#ccc',
            fontSize: isMobileView ? '14px' : '15px',
            lineHeight: '1.8',
            textAlign: 'justify'
          }}>
            For me, design is about creating emotion and connection through every interaction. I aim to craft
            meaningful, impactful, and enjoyable digital experiences while continually growing and designing with purpose.
          </p>

        </div>

      </div>
    </section>
  )
}

export default AboutSection