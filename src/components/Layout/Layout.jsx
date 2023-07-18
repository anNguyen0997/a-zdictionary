import React from 'react'
import Navibar from '../Layout/Navibar'

const Layout = ({children}) => {
  return (
    <>
        <Navibar />
        {children}
    </>
  )
}

export default Layout