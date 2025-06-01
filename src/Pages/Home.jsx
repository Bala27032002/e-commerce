import React from 'react'
import MenShirtSection from '../Component/MenShirtSection'

function Home() {
  return (
    <>
        
{/* <LabelCarousel /> */}
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <div style={{
        position: 'sticky', // or 'fixed' if you prefer
        top: 0,
        zIndex: 1000,
        backgroundColor: '#fff',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}>
        {/* <Header /> */}
      </div>

      {/* Scrollable Content */}
      <div >
        <MenShirtSection />
      </div>
    </div>

    </>
  )
}

export default Home