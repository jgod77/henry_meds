import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getProviderData } from '../api/provider';
import { Card } from '../components/Card/Card';
import { ProviderSchedule } from '../components/ProviderSchedule/ProviderSchedule';
import { formatDateTime } from '../utils/formatDateTime';

export const ProviderDashboard = () => {
  const { id } = useParams();
  const [providerData, setProviderData] = useState(null);

  useEffect(() => {
    getProviderData(id).then(data => setProviderData(data))
  }, [])

  if (!providerData) {
    return <div>Loading...</div>
  }

  return (
    <div className='flex flex-row'>
      <div className='basis-2/3'>
        <div>
          <h1 className='mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6x'>{providerData.name}</h1>
        </div>
        <div className='flex flex-row'>
          {providerData.appointments.map(appointment => (
            <Card key={appointment.id} title={appointment.client.name} body={formatDateTime(appointment.starts_at)} tags={[appointment.status]} />
          ))}
        </div>
      </div>
      <div className='basis-1/3'>
        <ProviderSchedule schedule={providerData.schedule} />
      </div>
    </div>
  )
}
