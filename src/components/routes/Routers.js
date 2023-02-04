import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'

import Portfolio from '../portfolio/Portfolio'


const Routers = () => {
  return (<Routes>
    <Route path='/portfolio' element={< Portfolio/>}/>
  </Routes>
  )
}

export default Routers