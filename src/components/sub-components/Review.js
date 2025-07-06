import React from 'react'
import User1 from '../../images/testimonials/pfp1.jpg'
import User2 from '../../images/testimonials/pfp2.jpg'

export default function Review() {

  const reviewers = [
    {
      name: "Nuk Achariya Srisura",
      message: "เราเช่ารถจากเว็บไซต์นี้และได้รับประสบการณ์ที่น่าทึ่งมาก! การจองทำได้ง่าย และอัตราค่าเช่าก็ไม่แพงเลย. ",
      image: User1,
      imageAlt: "Nuk Achariya Srisura Profile pic",
      location: "Privet Drive",
      userId: 1
    },
    {
      name: "Thanabhut Tipsana",
      message: "รถอยู่ในสภาพดีเยี่ยมและทำให้การเดินทางของเราดียิ่งขึ้น ขอแนะนำรถเช่าอุดรธานี รุ่งโรจน์ คาร์เร้นท์. ",
      image: User2,
      imageAlt: "Thanabhut Tipsana Profile pic",
      location: "The Burrow",
      userId: 2
    }
  ]

  return (
    <section className='reviews-section'>
      <div className='reviews-section__container'>

        <div className='reviews-section__container__heading'>
          <h3>Reviewed by People</h3>
          <h2>Client's Testimonials</h2>
        </div>

        <div className='review-container'>
          {reviewers.map(user => {
            return(
              
                <div key={user.userId} className='review-container__card'>

                  <p className='review-container__card__msg'>"{user.message}"</p>

                  <div className='review-container__card__user'>

                    <div className='review-container__card__user__details'>
                      <img src={user.image} alt={user.imageAlt} />
                      <span>
                        <h4 className='reviewer-name'>{user.name}</h4>
                        <p>{user.location}</p>
                      </span>
                    </div>

                    <i className='fa-solid fa-quote-right'></i>
                  </div>

                </div>
              
            )
          })}
        </div>
  

      </div>
    </section>
  )
}
