import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import useWindowSize from '../hooks/useWindowSize'


//REMINDER ..........update my conatct - to connect to recieve in gmail when sent

                                                                                                                                                                

function ContactSection() {

  // screen width (...learning )
  const screenWidth = useWindowSize()

  // basic responsive checks
  const isMobileView = screenWidth < 768
  const isTabletView = screenWidth >= 768 && screenWidth < 1024

  // form inputs forr(name, email, message)
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    message: '',
  })

  // forfeedback
  const [isSent, setIsSent] = useState(false)
  const [isSending, setIsSending] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  
  // juat asimple hover effect (not the best yet but works igg)
  const handleHover = (event, isHovering) => {
    event.target.style.border = isHovering 
      ? '1px solid #a855f7' 
      : '1px solid #2d1b69'

    event.target.style.boxShadow = isHovering 
      ? '0 0 15px rgba(168, 85, 247, 0.4)' 
      : 'none'
  }

  // when user types in input
  function handleChange(event) {
    const inputName = event.target.name
    const inputValue = event.target.value

    // updating state (spread operator)
    setFormValues({
      ...formValues,
      [inputName]: inputValue
    })
  }

  
  // submit form
  async function handleSubmit(event) {
    event.preventDefault()
    setIsSending(true)
    setErrorMessage('')

    const templateParams = {
      name: formValues.name,
      email: formValues.email,
      message: formValues.message,
    }

    try {
      await emailjs.send(
        'service_9kpwp5x',                  // myService ID
        'template_fb069sn',                  // template ID
        templateParams,
        'S2tQkz9PQ47MKxv2Z'                    // myPublic Key                     

      )

      setIsSending(false)
      setIsSent(true)

      // clear form after sending
      setFormValues({
        name: '',
        email: '',
        message: ''
      })

      // hide success message after few secs
      setTimeout(() => setIsSent(false), 4000)

    } catch (error) {
      setIsSending(false)
      setErrorMessage('Server error, please try again later.')
    }
  }                                                                    

  //  style for inputs 
  const inputStyle = {
    width: '100%',
    padding: '14px 16px',
    background: 'rgba(255,255,255,0.05)',
    border: '1px solid #2d1b69',
    borderRadius: '8px',                                                                                         
    color: '#fff',
    fontSize: '14px',
    fontFamily: 'Poppins, sans-serif',
    outline: 'none',
    marginBottom: '16px',
    boxSizing: 'border-box',
    transition: 'all 0.3s ease',
  }

  return (
    <section
      id="contact"
      style={{
        padding: isMobileView 
          ? '70px 24px' 
          : isTabletView 
          ? '80px 40px' 
          : '100px 80px',
        background: '#0d0d1a',
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
      }}>
        Get <span style={{ color: '#a855f7' }}>In Touch</span>
      </h2>

      <div style={{
        display: 'flex',
        flexDirection: isMobileView ? 'column' : 'row',
        gap: isMobileView ? '36px' : '50px',
        maxWidth: '900px',
        margin: '0 auto',
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid #7c3aed', 
        boxShadow: '0 0 25px rgba(124, 58, 237, 0.2)',
        borderRadius: '16px',
        padding: isMobileView 
          ? '30px 20px' 
          : isTabletView 
          ? '40px' 
          : '50px',
      }}>

        {/* in the left is mycontact info */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div>
            <p style={{ fontSize: '11px', color: '#888', letterSpacing: '1px', marginBottom: '6px' }}>MAIL</p>
            <p style={{ color: '#ccc', fontSize: isMobileView ? '13px' : '14px' }}>
              alyssamarieagarrado@gmail.com
            </p>
          </div>

          <div>
            <p style={{ fontSize: '11px', color: '#888', letterSpacing: '1px', marginBottom: '6px' }}>PHONE</p>
            <p style={{ color: '#ccc', fontSize: isMobileView ? '13px' : '14px' }}>
              09690951361
            </p>
          </div>

          <div>
            <p style={{ fontSize: '11px', color: '#888', letterSpacing: '1px', marginBottom: '6px' }}>LOCATION</p>
            <p style={{ color: '#ccc', fontSize: isMobileView ? '13px' : '14px' }}>
              Jaro, Iloilo City
            </p>
          </div>
        </div>

        {/* in thes right is form */}
        <div style={{ flex: 1.2 }}>

          {/* success message */}
          {isSent && (
            <p style={{ color: '#a855f7', marginBottom: '12px', fontSize: '14px', textAlign: 'center' }}>
              Message sent! I'll get back to you soon.
            </p>
          )}

          {/* message */}
          {errorMessage && (
            <p style={{ color: '#f87171', marginBottom: '12px', fontSize: '14px', textAlign: 'center' }}>
              {errorMessage}
            </p>
          )}

          {/* inputs */}
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formValues.name}
            onChange={handleChange}
            style={inputStyle}
            onMouseEnter={(e) => handleHover(e, true)}
            onMouseLeave={(e) => handleHover(e, false)}
            onFocus={(e) => handleHover(e, true)}
            onBlur={(e) => handleHover(e, false)}
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formValues.email}
            onChange={handleChange}
            style={inputStyle}
            onMouseEnter={(e) => handleHover(e, true)}
            onMouseLeave={(e) => handleHover(e, false)}
            onFocus={(e) => handleHover(e, true)}
            onBlur={(e) => handleHover(e, false)}
          />

          <textarea
            name="message"
            placeholder="Message"
            rows={5}
            value={formValues.message}
            onChange={handleChange}
            style={{ ...inputStyle, resize: 'vertical', marginBottom: '20px' }}
            onMouseEnter={(e) => handleHover(e, true)}
            onMouseLeave={(e) => handleHover(e, false)}
            onFocus={(e) => handleHover(e, true)}
            onBlur={(e) => handleHover(e, false)}
          />

          <button
            onClick={handleSubmit}
            disabled={isSending}
            style={{
              width: '100%',
              padding: '14px',
              background: 'linear-gradient(90deg, #a855f7, #7c3aed)',
              border: 'none',
              borderRadius: '8px',
              color: '#fff',
              fontSize: '15px',
              fontWeight: '600',
              fontFamily: 'Poppins, sans-serif',
              cursor: isSending ? 'not-allowed' : 'pointer',
              opacity: isSending ? 0.7 : 1,
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={e => {
              if (!isSending) {
                e.target.style.opacity = '0.85'
                e.target.style.boxShadow = '0 0 20px rgba(124, 58, 237, 0.4)'
              }
            }}
            onMouseLeave={e => {
              if (!isSending) {
                e.target.style.opacity = '1'
                e.target.style.boxShadow = 'none'
              }
            }}
          >
            {isSending ? 'Sending...' : 'Send message'}
          </button>

        </div>
      </div>
    </section>
  )
}

export default ContactSection