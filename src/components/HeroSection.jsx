import React, { useState, useEffect } from 'react'
import useWindowSize from '../hooks/useWindowSize'
import Particles from './Particles/Particles'



const TypingAnimation = () => {

  const textList = ["Alyssa Marie Agarrado", "UI/UX Designer"]

  const [wordIndex, setWordIndex] = useState(0)
  const [letterIndex, setLetterIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {

    // after finished typing, wait then delete
    if (letterIndex === textList[wordIndex].length + 1 && !isDeleting) {
      const wait = setTimeout(() => setIsDeleting(true), 1500)
      return () => clearTimeout(wait)
    }

    // '' deleting, go to next word
    if (letterIndex === 0 && isDeleting) {
      setIsDeleting(false)
      setWordIndex((prev) => (prev + 1) % textList.length)
      return
    }

    const typingSpeed = isDeleting ? 50 : 100

    const timer = setTimeout(() => {
      setLetterIndex((prev) => prev + (isDeleting ? -1 : 1))
    }, typingSpeed)

    return () => clearTimeout(timer)

  }, [letterIndex, wordIndex, isDeleting])

  const textColor = wordIndex === 0 ? '#f0f0f0' : '#7c3aed'

  return (
    <span style={{
      color: textColor,
      borderRight: '3px solid #7c3aed',
      paddingRight: '5px'
    }}>
      {textList[wordIndex].substring(0, letterIndex)}
    </span>
  )
}


//social icon
const SocialIcon = ({ href, label, pathD }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    style={{
      color: '#7c3aed',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '44px',
      height: '44px',
      border: '2px solid #7c3aed',
      borderRadius: '50%',
      textDecoration: 'none',
      transition: 'all 0.3s',
      pointerEvents: 'auto'
    }}
    

    onMouseEnter={(e) => {
      e.currentTarget.style.transform = 'scale(1.1)'
      e.currentTarget.style.background = 'rgba(124,58,237,0.15)'
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = 'scale(1)'
      e.currentTarget.style.background = 'transparent'
    }}
  >
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d={pathD} />
    </svg>
  </a>
)


function HeroSection() {

  // screen size 
  const screenWidth = useWindowSize()

  const isMobileView = screenWidth < 768
  const isTabletView = screenWidth >= 768 && screenWidth < 1024

  // social links here
  const socialList = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/',
    path: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
  },

  {
    label: 'Instagram',
    href: 'https://www.instagram.com/?hl=en',
    path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
  },

  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/feed/',
    path: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
  },

  {
    label: 'GitHub',
    href: 'https://github.com/Ly0631',
    path: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
  }
]

  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: isMobileView ? 'column-reverse' : 'row',
        alignItems: 'center',
        padding: isMobileView
          ? '100px 24px 60px'
          : isTabletView
          ? '100px 40px 60px'
          : '0 80px',
        background: 'linear-gradient(135deg, #0d0d1a 0%, #1a0a2e 50%, #0d0d1a 100%)',
        gap: isMobileView ? '40px' : '0px',
        position: 'relative',
        overflow: 'hidden'
      }}
    >

      {/* the  bg particles  */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1
      }}>

        <Particles
          particleColors={["#a855f7", "#ffffff", "#7c3aed"]}
          particleCount={screenWidth < 768 ? 150 : 300}
          particleSpread={10}
          speed={0.15}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={true}
          disableRotation={false}
        />
      </div>


      {/* left side textt */}
      <div style={{
        flex: 1,
        textAlign: isMobileView ? 'center' : 'left',
        position: 'relative',
        zIndex: 2
      }}>
        <p style={{
          color: '#ccc',
          fontSize: isMobileView ? '16px' : '18px',
          marginBottom: '10px'
        }}>
          Hi, it's me
        </p>

        <h1 style={{
          fontSize: isMobileView ? '36px' : isTabletView ? '44px' : '52px',
          fontWeight: '700',
          marginBottom: '10px',
          lineHeight: '1.1'
        }}>
          <TypingAnimation />
        </h1>

        <p style={{
          color: '#ccc',
          fontSize: isMobileView ? '14px' : '16px',
          maxWidth: '420px',
          lineHeight: '1.7',
          margin: isMobileView ? '0 auto 30px auto' : '0 0 30px 0'
        }}>
          I'm a BSIT student learning and improving in the field of
          UI/UX designer with a deep love for art and visual designs.
        </p>

        {/* social icons */}
        <div style={{
          display: 'flex',
          gap: '15px',
          justifyContent: isMobileView ? 'center' : 'flex-start',
          marginTop: '20px'
        }}>
          {socialList.map((item) => (
            <SocialIcon
              key={item.label}
              href={item.href}
              label={item.label}
              pathD={item.path}
            />
          ))}
        </div>
      </div>


      {/* right side photo */}
      <div style={{
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        position: 'relative',
        zIndex: 2
      }}>
        <div style={{
          width: isMobileView ? '200px' : isTabletView ? '240px' : '280px',
          height: isMobileView ? '200px' : isTabletView ? '240px' : '280px',
          borderRadius: '50%',
          border: '3px solid #7c3aed',
          overflow: 'hidden',
          boxShadow: '0 0 40px rgba(124, 58, 237, 0.4)',
          background: '#1a0a2e',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>


          {/* my profile photo here */}
          <img
            src="/profile.jpg"
            alt="Alyssa Marie Agarrado"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            onError={(e) => {
              e.target.style.display = 'none'
              e.target.parentElement.innerHTML =
                '<span style="color:#888;font-size:13px">Add profile.jpg</span>'
            }}
          />
        </div>
      </div>

    </section>
  )
}

export default HeroSection;