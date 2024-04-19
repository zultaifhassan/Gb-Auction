import React from 'react'
import { useSelector } from 'react-redux'

const DashboardMain = () => {
    const {user} = useSelector((state) => state.login)
  return (
    <div>
         <div className="user-dash-welcome">
            <h2>Wellcome <span>{user.user.name}</span> to Admin Dashboard</h2>
        </div>
    </div>
  )
}

export default DashboardMain