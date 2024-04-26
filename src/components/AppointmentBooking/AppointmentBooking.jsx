import React, { useEffect, useState } from 'react'
import { DayPicker } from 'react-day-picker'
import 'react-day-picker/dist/style.css';
import { getTimeSlots } from '../../api/client';
import { Pill } from '../Pill/Pill';
import { formatTime } from '../../utils/formatTime';

export const AppointmentBooking = ({onSuccessfulBooking}) => {
  const [selectedDay, setSelectedDay] = useState(new Date())
  const [timeslots, setTimeslots] = useState([])

  useEffect(() => {
    setTimeslots([])
    getTimeSlots(1, selectedDay.toISOString().slice(0, 10).replace(/-/g, '')).then(data => setTimeslots(data))
  }, [selectedDay])

  const handleBooking = (timeslotId) => {
    console.log('Booking timeslot', timeslotId)
    onSuccessfulBooking()
  }

  let footer = 'Select a day'

  if (selectedDay && timeslots.length === 0) {
    footer = 'No timeslots available'
  }

  if (timeslots.length > 0) {
    footer = timeslots.map(timeslot => (
      <Pill
        key={timeslot.id}
        onClick={() => handleBooking(timeslot.id)}
        text={formatTime(timeslot.start)}
        hollow={true}
        type='primary'
        clickable={true}
        />
    ))
  }

  return (
    <div className='max-w-md'>
      <DayPicker
        mode='single'
        selected={selectedDay}
        onSelect={setSelectedDay}
        footer={footer}
      />
    </div>
  )
}
