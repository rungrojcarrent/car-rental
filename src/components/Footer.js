import React from 'react'
import BackToTopBtn from './BackToTopBtn'

export default function Footer() {
  return (
    <footer style={{background:'#18191a', color:'#fff', padding:'32px 0 32px 0', fontSize:'1rem', letterSpacing:'0.01em', position:'relative'}}>
      <div style={{maxWidth:900, margin:'0 auto', padding:'0 16px', display:'flex', flexWrap:'wrap', justifyContent:'space-between', alignItems:'flex-start', gap:'2rem'}}>
        {/* กล่องที่อยู่ 2 กล่อง ซ้าย-ขวา ขนาดเท่ากัน */}
        <div style={{flex:'1 1 320px', minWidth:220, background:'#232426', borderRadius:10, padding:'18px 20px', marginBottom:12, boxShadow:'0 2px 8px #18191a33', display:'flex', flexDirection:'column', alignItems:'flex-start', justifyContent:'space-between', height:'100%'}}>
          <div style={{fontWeight:'bold', fontSize:'1.08rem', marginBottom:6}}>สำนักงานใหญ่</div>
          <div style={{color:'#b0b3b8', fontSize:'0.97rem', marginBottom:8}}>
            12/6 ตำบลหมูม่น เมืองอุดรธานี 41000
          </div>
          <div style={{marginTop:'auto', fontWeight:600}}>
            <a href="tel:+66866348619" style={{color:'#fff', textDecoration:'none'}}>+66 86-6348619</a>
          </div>
        </div>
        <div style={{flex:'1 1 320px', minWidth:220, background:'#232426', borderRadius:10, padding:'18px 20px', marginBottom:12, boxShadow:'0 2px 8px #18191a33', display:'flex', flexDirection:'column', alignItems:'flex-start', justifyContent:'space-between', height:'100%'}}>
          <div style={{fontWeight:'bold', fontSize:'1.08rem', marginBottom:6}}>สาขาสนามบิน</div>
          <div style={{color:'#b0b3b8', fontSize:'0.97rem', marginBottom:8}}>
            25/25 หมู่ที่ 3 ซอยบ้านช้าง ตำบลหมากแข้ง อำเภอเมืองอุดรธานี 41000
          </div>
          <div style={{marginTop:'auto', fontWeight:600}}>
            <a href="tel:+66866348619" style={{color:'#fff', textDecoration:'none'}}>+66 86-6348619</a>
          </div>
        </div>
      </div>
      <div style={{textAlign:'center', color:'#b0b3b8', fontSize:'0.95rem', marginTop:12, letterSpacing:'0.01em'}}>
        &copy; {new Date().getFullYear()} รถเช่าอุดรธานี รุ่งโรจน์ คาร์เร้นท์. All rights reserved.
      </div>
      {/* ปุ่ม BackToTopBtn กลับขึ้นด้านบน */}
      <div style={{width:'100%', display:'flex', justifyContent:'center', marginTop:18}}>
        <BackToTopBtn />
      </div>
    </footer>
  )
}
