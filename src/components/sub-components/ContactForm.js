import React from 'react';

export default function ContactForm() {
  function formCheck(e) {
    e.preventDefault();
  }

  const staticMapUrl = `https://external.fbkk12-4.fna.fbcdn.net/static_map.php?v=2060&theme=dark&ccb=4-4&size=520x396&language=th_TH&scale=1&zoom=14&center=17.44545%2C102.78088&marker_list[0]=17.44545%2C102.78088&_nc_client_id=comet_profile_address&_nc_client_caller=CometStaticMap.react`;
  const googleMapsUrl = `https://maps.google.com/?cid=8412068794620882022`; // URL Google Maps สำหรับ รุ่งโรจน์คาร์เร้นท์

  return (
    <section className='contactForm-section'>
      <div className='contactForm-section__container'>
        <div className='contactForm-left' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h2>ต้องการข้อมูลเพิ่มเติม?</h2>
          <p style={{ textAlign: 'center' }}>
            ติดต่อเราเพื่อสอบถามข้อมูลเพิ่มเติมเกี่ยวกับการเช่ารถและบริการต่างๆ
            ของ รุ่งโรจน์ คาร์เร้นท์ อุดรธานี ยินดีให้บริการด้วยประสบการณ์กว่า 15 ปี
          </p>
          <ul>
            <li>
              <i className="fa-solid fa-phone"></i>
              <a href="tel:+66866348619">086-6348619</a>
            </li>
            <li>
              <i className="fa-solid fa-envelope"></i>
              <a href="mailto:rungrojcarrentudon@gmail.com">rungrojcarrentudon@gmail.com</a>
            </li>
            <li>
              <i className="fa-solid fa-location-dot"></i>
              <a href={googleMapsUrl} target="_blank">รถเช่าอุดร รุ่งโรจน์คาร์เร้นท์</a>
            </li>
          </ul>
          {/* ส่วนของแผนที่ (ทำเป็นลิงก์ให้คลิกได้) */}
          <a
            href={googleMapsUrl}
            target="_blank"
            style={{ marginTop: '20px', display: 'block' }}
          >
            <div
              className="map-container"
              style={{
                backgroundImage: `url("${staticMapUrl}")`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: '100% 100%',
                height: '396px',
                width: '520px',
              }}
            ></div>
          </a>
        </div>

        <form action="post" className='contactForm-right'>
          <label htmlFor="fullName" className='contactFormLabel'>ชื่อเต็ม</label>
          <input
            type="text"
            id='fullName'
            placeholder='เช่น สมชาย ใจดี'
            required
          />
          <label htmlFor="email" className='contactFormLabel'>อีเมล</label>
          <input
            type="email"
            id='email'
            placeholder='ตัวอย่าง example@email.com'
            required
          />
          <label htmlFor="message" className='contactFormLabel'>บอกเราเกี่ยวกับเรื่องนี้</label>
          <textarea
            id="message"
            placeholder='กรุณาพิมพ์ข้อความของคุณที่นี่'
            required
          ></textarea>
          <button type='submit' onClick={formCheck}>
            <i className='fa-solid fa-envelope-open-text'></i> ส่งข้อความ
          </button>
        </form>
      </div>
    </section>
  );
}