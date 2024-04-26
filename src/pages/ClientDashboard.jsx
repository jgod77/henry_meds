import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getClientData } from '../api/client';
import { AppointmentBooking } from '../components/AppointmentBooking/AppointmentBooking';
import { Card } from '../components/Card/Card';
import { formatDateTime } from '../utils/formatDateTime';
import { Modal } from '../components/Modal/Modal';

export const ClientDashboard = () => {
  const { id } = useParams();
  const [clientData, setClientData] = useState({})
  const [modalOpen, setModalOpen] = useState(false)

  useEffect(() => {
    getClientData(id).then(data => setClientData(data))
  }, [id])

  const handleConfirm = (appointmentId) => {
    console.log('Confirming appointment', appointmentId)
  }

  const handleCancel = (appointmentId) => {
    console.log('Canceling appointment', appointmentId)
  }

  if (!clientData) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <div>
        <h1 className='mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6x'>Welcome Back, {clientData.name}</h1>
      </div>
      <div>
        <h2>Your Appointments</h2>
        <div className='flex flex-row'>
          {clientData.appointments && clientData.appointments.map(appointment => (
            <Card key={appointment.id} title={appointment.provider.name} body={formatDateTime(appointment.starts_at)} tags={[appointment.status]} client={clientData}>
              <div className="px-6 pt-4 pb-2">
                {Object.keys(clientData).length > 0 && appointment.status == 'pending' && (
                    <button onClick={() => handleConfirm(appointment.id)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                      Accept
                    </button>

                  )}
                {Object.keys(clientData).length > 0 && (appointment.status == 'pending' || appointment.status == 'confirmed') && (
                    <button onClick={() => handleCancel(appointment.id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2">
                      Cancel
                    </button>

                  )}
                </div>
            </Card>
          ))}
        </div>
      </div>
      <button onClick={() => setModalOpen(true)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
        Book an appointment
      </button>
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
        <AppointmentBooking onSuccessfulBooking={() => setModalOpen(false)}/>
      </Modal>
    </div>
  )
}
