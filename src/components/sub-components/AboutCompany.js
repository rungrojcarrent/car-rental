import React, { useEffect, useState } from 'react'
import aboutMain from '../../images/about/about-main.jpg'
import icon1 from '../../images/about/icon1.png'
import icon2 from '../../images/about/icon2.png'
import icon3 from '../../images/about/icon3.png'
import { useLocation } from 'react-router-dom'

export default function AboutCompany() {
  let [ numCarType, setNumCarType ] = useState(0);
  let [ numOutlet, setNumOutlet ] = useState(0);
  let [ numRepair, setNumRepair ] = useState(0);
  let [ run, setRun ] = useState(false);

  useEffect(() => {
    setTimeout(() => setRun(true), 200);
  }, [])
  
  useEffect(() => {
    if (run) {
      countUp(20, 85, 75);
    }
  }, [run])

  
  function countUp(numberOfCarType, numberOfOutlet, numberOfRepair) {
    let countTime = 1500;

    if (numCarType !== numberOfCarType || numOutlet !== numberOfOutlet || numRepair !== numberOfRepair) {
      const countCarType = setInterval(() => {
        setNumCarType(numCarType += 1)
        if (numCarType === numberOfCarType) {
          clearInterval(countCarType)
        }
      }, countTime/numberOfCarType)

      const countOutlet = setInterval(() => {
        setNumOutlet(numOutlet += 1)
        if (numOutlet === numberOfOutlet) {
          clearInterval(countOutlet)
        }
      }, countTime/numberOfOutlet)

      const countRepair = setInterval(() => {
        setNumRepair(numRepair += 1)
        if (numRepair === numberOfRepair) {
          clearInterval(countRepair)
        }
      }, countTime/numberOfRepair)
    }
  }

  return (
    <section className='about-company-section'>
      <div className='about-company-section__container'>
        <div className='about-company-section__container__image-container'>
          <img src={aboutMain} alt="about" />
        </div>

        <div className='about-company-section__container__details'>
          <h3>รถเช่าอุดรธานี รุ่งโรจน์ คาร์เร้นท์</h3>
          <h2>เราคือผู้ให้บริการรถเช่าคุณภาพในจังหวัดอุดรธานี</h2>
          <p> บริการให้เช่ารถยนต์ขับเอง  รายสัปดาห์, รายเดือนราคาถูกฟรีประกันภัยชั้น 1 ขับขี่ปลอดภัยไว้ใจเรา </p>

          <div className='icons-section'>
            <div>
              <img src={icon1} alt="icon1" />
              <span>
                <h4 className={run && 'active'}>{numCarType}</h4>
                <p>Car Types</p>
              </span>
            </div>
            <div>
              <img src={icon2} alt="icon2" />
              <span>
                <h4 className={run && 'active'}>{numOutlet}</h4>
                <p>Rental Outlets</p>
              </span>
            </div>
            <div>
              <img src={icon3} alt="icon3" />
              <span>
                <h4 className={run && 'active'}>{numRepair}</h4>
                <p>Repair Shops</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
