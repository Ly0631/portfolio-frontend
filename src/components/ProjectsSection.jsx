import React from 'react'
import useWindowSize from '../hooks/useWindowSize'

// project data, edit later, add links mn
const projectList = [
  {
    id: 1,
    category: 'Project',
    title: 'Iced Matcha Latte Product Card',
    image: '/project1.jpg',
    link: 'https://www.figma.com/proto/ARBtVtyoFRClSHg8p7vy2K/Challenge1?t=kygSBMds51mnLaMw-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&node-id=1-3',
  },

  {
    id: 2,
    category: 'Project',
    title: 'Music Player Design',
    image: '/project2.jpg',
    link: 'https://www.figma.com/proto/i9Hmf7hpTPsaWyZKhx65XS/Challenge2?t=kygSBMds51mnLaMw-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&node-id=2-3'
  },

  {
    id: 4,
    category: 'Project',
    title: 'Classee Attendace System (Prototype)',
    image: '/project4.jpg',
    link: '#'
  },

  {
    id: 3,
    category: 'Projects',
    title: 'Portfolio v.1 (Prototype)',
    image: '/project3.jpg',
    link: 'https://www.figma.com/proto/mpxoWuipKJFi5qCeG35IMd/Portfolio?node-id=1-2&t=yrr0Y7dC4jhsjX4r-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1'
  },
  {
    id: 5,
    category: 'Projects',
    title: 'Awesometodos (ToDo App)',
    image: '/project5.jpg',
    link: 'https://awesometodosapp-woaw.onrender.com/'
  },
]


// small card component for each project
function ProjectCard({ project }) {

  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: 'none', color: 'inherit' }}
    >
      <div
        style={{
          borderRadius: '12px',
          overflow: 'hidden',
          background: '#1a0a2e',
          cursor: 'pointer',
          transition: 'transform 0.2s',
        }}
        // simple hover lift effect
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-6px)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)'
        }}
      >

        {/* this parrt project image placement*/}
        <div style={{
          width: '100%',
          height: '200px',
          background: '#2d1b69',
          overflow: 'hidden',
        }}>
          <img
            src={project.image}
            alt={project.title}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}

           
            onError={(e) => {
              e.target.style.display = 'none'
            }}
          />
        </div>

        {/* project text */}
        <div style={{ padding: '18px 20px' }}>
          <p style={{
            fontSize: '11px',
            color: '#a855f7',
            letterSpacing: '1.5px',
            marginBottom: '8px',
            fontWeight: '600',
          }}>
            {project.category}
          </p>

          <h3 style={{
            fontSize: '17px',
            fontWeight: '600',
            color: '#fff'
          }}>
            {project.title}
          </h3>
        </div>

      </div>
    </a>
  )
}


function ProjectsSection() {

  // screen size 
  const screenWidth = useWindowSize()

  const isMobileView = screenWidth < 768
  const isTabletView = screenWidth >= 768 && screenWidth < 1024

  return (
    <section
      id="projects"
      style={{
        padding: isMobileView
          ? '70px 24px'
          : isTabletView
          ? '80px 40px'
          : '100px 80px',
        background: '#0f0f1f',
      }}
    >

      <h2 style={{
        fontSize: isMobileView
          ? '28px'
          : isTabletView
          ? '32px'
          : '36px',
        fontWeight: '700',
        textAlign: 'center',
        marginBottom: '40px',
        color: '#fff'
      }}>
        My <span style={{ color: '#a855f7' }}>Projects</span>
      </h2>


      <div style={{
        display: 'grid',

        // 1 column on mobile, 2 on tablet, 3 on desktop
        gridTemplateColumns: isMobileView
          ? '1fr'
          : isTabletView
          ? 'repeat(2, 1fr)'
          : 'repeat(3, 1fr)',

        gap: '24px',
        maxWidth: '1000px',
        margin: '0 auto',
      }}>

        {/* loop projects here */}
        {projectList.map((item) => (
          <ProjectCard key={item.id} project={item} />
        ))}

      </div>
    </section>
  )
}

export default ProjectsSection