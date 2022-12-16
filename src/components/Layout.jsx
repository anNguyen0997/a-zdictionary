import React from 'react'
import Navibar from './Navibar'

const Layout = ({children}) => {
  return (
    <>
        <Navibar />
        {children}
    </>
  )
}

export default Layout