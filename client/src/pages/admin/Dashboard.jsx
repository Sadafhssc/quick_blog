import React from 'react'
import AdminHeader from '../../components/AdminHeader'
import SidePanel from '../../components/SidePanel'
import DashboardAdmin from '../../components/DashboardAdmin'
import DashboardIcons from '../../components/DashboardIcons'

const Dashboard = () => {
  return (
    <div>
      <DashboardIcons/>
        <DashboardAdmin/>
    </div>
  )
}

export default Dashboard
