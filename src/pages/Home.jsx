import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <ol>
      <li><Link to='provider-dashboard/1'>Provider 1 Dashboard</Link></li>
      <li><Link to='client-dashboard/1'>Client 1 Dashboard</Link></li>
    </ol>
  )
}
