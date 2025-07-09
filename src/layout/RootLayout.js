import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function RootLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      {/* Social bar ฝังล่างสุดกลางจอ ขยับขึ้นจากขอบจอ และฐานโค้งน้อยลง */}
      <div style={{
        position: 'fixed',
        left: 0,
        right: 0,
        bottom: 32,
        zIndex: 10000,
        display: 'flex',
        justifyContent: 'center',
        pointerEvents: 'none',
      }}>
        <div className="social-icon" style={{
          background: 'rgba(255,255,255,0.95)',
          borderRadius: '10px', // โค้งน้อยลง
          padding: '8px 18px',
          display: 'flex',
          gap: '18px',
          alignItems: 'center',
          boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
          pointerEvents: 'auto',
        }}>
          <a href="https://www.instagram.com/rungroj.info/" target="_blank" rel="noopener noreferrer">
            <img src="https://www.terminal21.co.th/korat/wp-content/uploads/2016/10/Instagram_App_Large_May2016_200.png" alt="ig_icon" width="33" height="33" />
          </a>
          <a href="https://www.facebook.com/rungroj.co.th/" target="_blank" rel="noopener noreferrer">
            <img src="https://www.terminal21.co.th/korat/wp-content/uploads/2016/10/Facebook-Logo.png" alt="facebook" width="33" height="33" />
          </a>
          <a href="https://page.line.me/rungroj/?accountId=rungroj" target="_blank" rel="noopener noreferrer">
            <img src="https://www.terminal21.co.th/korat/wp-content/uploads/2022/01/Line-Logo.png" alt="line" width="33" height="33" />
          </a>
          <a href="https://twitter.com/rungrojcarrentudon" target="_blank" rel="noopener noreferrer">
            <img src="https://www.terminal21.co.th/korat/wp-content/uploads/2024/01/X-twitter_logo.png" alt="twitter" width="33" height="33" />
          </a>
          <a href="https://www.tiktok.com/@rungrojcarrent1" target="_blank" rel="noopener noreferrer">
            <img src="https://www.terminal21.co.th/korat/wp-content/uploads/2022/02/tictok-logo-square.png" alt="tiktok" width="33" height="33" />
          </a>
          <span style={{marginLeft: '18px', color: '#222', fontSize: '0.98rem', fontWeight: 500}}>
            8:00 - 21.30 เปิดทุกวัน
          </span>
        </div>
      </div>
    </>
  )
}
