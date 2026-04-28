import React from 'react';
import LandCruiser from "../../images/chooseUs/main.png";
import icon1 from "../../images/chooseUs/icon1.png";
import icon2 from "../../images/chooseUs/icon2.png";
import icon3 from "../../images/chooseUs/icon3.png";

export default function ChooseUs() {
  return (
    <section className='chooseUs-section'>
      <div className='chooseUs-section__container'>
        {/* ⚡ Bolt: Add lazy loading to images below the fold */}
        <img className='hero-image' src={LandCruiser} alt="รถแลนด์ครุยเซอร์และรถรุ่นอื่นๆ" loading="lazy" />

        <div className='chooseUs-details-container'>

          <div className='chooseUs-details-container__left'>
            <h3>ทำไมถึงเลือกรถเช่าของเรานะ</h3>
            <h2>ดีลสุดคุ้มค่าที่คุณจะหาจากที่ไหนไม่ได้อีกแล้ว</h2>
            <p>รุ่งโรจน์การชำนาญ บริการรถเช่าในสนามบินอุดรธานี สนใจรถเช่าทางนี้เลยค่ะ! 😊 ยกเลิกจองฟรี แถมยังมีรถให้เช่าขับเอง ทั้งแบบรายวัน, รายสัปดาห์, หรือรายเดือน ในราคาที่ถูกสุดๆ ไปเลยครับ</p>
            <a href="#">ดูรายละเอียดเพิ่มเติม <i className='fa-solid fa-angle-right'></i></a>
          </div>

          <div className='chooseUs-details-container__right'>
            <div>
              {/* ⚡ Bolt: Add lazy loading to images below the fold */}
              <img src={icon1} alt="ไอคอนรูปรถ" loading="lazy" />
              <div className='detail'>
                <h3 className='chooseUs-subheading'>ขับข้ามจังหวัดสบายๆ</h3>
                <p>ยกระดับประสบการณ์การขับขี่ของคุณไปอีกขั้น ด้วยรถยนต์คุณภาพเยี่ยมของเรา พร้อมให้คุณผจญภัยไปทุกเส้นทางทั่วประเทศเลยครับ</p>
              </div>
            </div>

            <div>
              {/* ⚡ Bolt: Add lazy loading to images below the fold */}
              <img src={icon2} alt="ไอคอนรูปเงิน" loading="lazy" />
              <div className='detail'>
                <h3 className='chooseUs-subheading'>ราคารวมทุกอย่างแล้วนะ</h3>
                <p>จ่ายครั้งเดียวจบ! ด้วยนโยบายราคารวมทุกอย่างของเรา สะดวกสบาย โปร่งใส ไม่มีอะไรแอบแฝงแน่นอนครับ</p>
              </div>
            </div>

            <div>
              {/* ⚡ Bolt: Add lazy loading to images below the fold */}
              <img src={icon3} alt="ไอคอนไม่มีค่าธรรมเนียมแอบแฝง" loading="lazy" />
              <div className='detail'>
                <h3 className='chooseUs-subheading'>ไม่มีค่าธรรมเนียมซ่อนเร้นกวนใจ</h3>
                <p>สบายใจหายห่วงกับนโยบายไม่มีค่าธรรมเนียมแอบแฝงของเรา เราเชื่อมั่นในการให้ราคาที่ตรงไปตรงมาและซื่อสัตย์ที่สุดครับ 😊</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}