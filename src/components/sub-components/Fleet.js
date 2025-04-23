import React, { useContext, useState } from 'react'
import { FleetArray } from '../../context/FleetContext'
import { CarPick } from '../../context/SelectedCarContext';

export default function Fleet() {

  const { cars } = useContext(FleetArray);
  const { setCarPicked } = useContext(CarPick);

  const [ currentCar, setCurrentCar ] = useState(cars[0]);
  const [ selectedCar, setSelectedCar ] = useState(cars[0].name);

  function setCar(e) {
    setCurrentCar(cars.filter(car => car.name === e.target.value)[0])
    setSelectedCar(e.target.value)
  }

  function chosenCar() {
    setCarPicked(selectedCar);
  }

  return (
    <section className='fleet-section'>
      <div className='fleet-section__container'>
        <div className='fleet-heading-container'>
          <h3>รุ่นรถ</h3>
          <h2>รถเช่าของเรา</h2>
          <p>เลือกจากรถที่น่าทึ่งหลากหลายรุ่นของเราเพื่อการผจญภัยหรือการเดินทางธุรกิจครั้งต่อไปของคุณ</p>
        </div>

        <div className='fleet-car-container'>
          <div className='fleet-car-container__buttons'>
            {cars.map(car => <button className={currentCar.name === car.name ? "active":null} key={car.id} onClick={setCar} value={car.name}>{car.name}</button>)}
          </div>
          <div className='image-container'>
            <img src={currentCar.image} alt={currentCar.name} />
          </div>
          <div className='details-container'>
            <div className="pricePerDay-container">
              <span>฿{currentCar.price} </span>
            </div>
            <div className='detail-table'>
              <span className='table-option'>รุ่น</span>
              <span>{currentCar.model}</span>
            </div>
            <div className='detail-table'>
              <span className='table-option'>ยี่ห้อ</span>
              <span>{currentCar.mark}</span>
            </div>
            <div className='detail-table'>
              <span className='table-option'>ปี</span>
              <span>{currentCar.year}</span>
            </div>
            <div className='detail-table'>
              <span className='table-option'>จำนวนประตู</span>
              <span>{currentCar.doors}</span>
            </div>
            <div className='detail-table'>
              <span className='table-option'>เครื่องปรับอากาศ</span>
              <span>{currentCar.ac ? "มี":"ไม่มี"}</span>
            </div>
            <div className='detail-table'>
              <span className='table-option'>ระบบเกียร์</span>
              <span>{currentCar.transmission}</span>
            </div>
            <div className='detail-table'>
              <span className='table-option'>เชื้อเพลิง</span>
              <span>{currentCar.fuel}</span>
            </div>
            <a href="#booking-section" onClick={chosenCar}>จองตอนนี้</a>
          </div>
        </div>

      </div>
    </section>
  )
}
