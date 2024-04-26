import React, { useState } from 'react';
import { formatTime } from '../../utils/formatTime';

export const ProviderSchedule = ({ schedule: initialSchedule }) => {
  const [schedule, setSchedule] = useState(initialSchedule);
  const [editMode, setEditMode] = useState(false);

  const handleInputChange = (day, key, value) => {
    setSchedule(prevSchedule => ({
      ...prevSchedule,
      [day]: {
        ...prevSchedule[day],
        [key]: value
      }
    }));
  };

  const handleSave = () => {
    console.log('Saving schedule', schedule);
    setEditMode(false);
  }

  return (
    <>
      <span className='float-right text-blue-400 font-bold cursor-pointer' onClick={editMode ? handleSave : () => setEditMode(!editMode)}>{editMode ? 'Save' : 'Edit'}</span>
      {Object.keys(schedule).map(day => (
        <div key={day}>
          <h2 className='capitalize'>
            {day}
          </h2>
          <div>
            {editMode ? (
              <input
                type='time'
                value={schedule[day].start}
                onChange={(e) => handleInputChange(day, 'start', e.target.value)}
              />
            ) : (
              formatTime(schedule[day].start)
            )} - {editMode ? (
              <input
                type='time'
                value={schedule[day].end}
                onChange={(e) => handleInputChange(day, 'end', e.target.value)}
              />
            ) : (
              formatTime(schedule[day].end)
            )}
          </div>
        </div>
      ))}
    </>
  );
};
