import React from 'react';
import { NavLink } from 'react-router-dom';
import BannerBackgroundImg from '../../images/hero/hero-bg.png';

export default function Hero_Banner() {
  return (
    <section className='home-banner'>
      <img
        className='background'
        src={BannerBackgroundImg}
        alt='พื้นหลังแบนเนอร์หลัก'
      />
      <div className='container'>
        <div className='container__detail'>
          <h2>วางแผนการเดินทางของคุณเลยตอนนี้</h2>
          <h1>
            ประหยัดสุดคุ้ม! กับบริการ
            <span>เช่ารถของเรา</span>
          </h1>
          <p>
            เช่ารถในฝันของคุณได้เลย! ราคาดีที่สุด, ไม่จำกัดระยะทาง,
            ตัวเลือกการรับรถที่ยืดหยุ่น และอีกมากมาย
          </p>
          <div className='container__detail__buttons'>
            <a href='#booking-section'>
              จองรถเลย
              <i className='fa-solid fa-circle-check'></i>
            </a>
            <NavLink to='vehicle'>
              ดูข้อมูลเพิ่มเติม
              <i className='fa-solid fa-angle-right'></i>
            </NavLink>
          </div>
        </div>
        {/* <img
          src={BannerCar}
          alt="main car banner"
          className="hero-banner__main-car"
        /> */}
      </div>
    </section>
  );
}