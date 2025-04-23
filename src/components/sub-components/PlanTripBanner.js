import React from 'react';
import planCar from '../../images/plan/icon1.png';
import planOperator from '../../images/plan/icon2.png';
import planDrive from '../../images/plan/icon3.png';

export default function PlanTripBanner() {
  return (
    <section className='planTrip'>
      <div className='planTrip-container'>
        <div className='planTrip-container__title'>
          <h3>วางแผนการเดินทางของคุณเลยตอนนี้</h3>
          <h2>เช่ารถง่ายๆ รวดเร็วทันใจ</h2>
        </div>
        <div className='planTrip-container__details'>
          <div>
            <img src={planCar} alt='ไอคอนเลือกรถ' />
            <h3>เลือกรถที่ใช่</h3>
            <p>
              เรามีรถให้เลือกมากมาย ครอบคลุมทุกความต้องการในการขับขี่ของคุณ
              มั่นใจได้เลยว่าคุณจะเจอรถที่ตรงใจ
            </p>
          </div>
          <div>
            <img src={planOperator} alt='ไอคอนติดต่อเจ้าหน้าที่' />
            <h3>ติดต่อเจ้าหน้าที่</h3>
            <p>
              เจ้าหน้าที่ของเราพร้อมให้ความช่วยเหลือและตอบทุกข้อสงสัยของคุณด้วยความเป็นมิตร
            </p>
          </div>
          <div>
            <img src={planDrive} alt='ไอคอนขับรถ' />
            <h3>ออกเดินทางกันเลย!</h3>
            <p>
              ไม่ว่าคุณจะเดินทางใกล้หรือไกล เรามีรถหลากหลายประเภทพร้อมให้คุณเลือก
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}