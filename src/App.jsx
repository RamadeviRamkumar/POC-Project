import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Schedule from './pages/schedule'
import Clinical from './pages/clinical'
import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './slices'
import PatientForm from './pages/patient'
import PatientTable from './pages/patient/PatientTable'
import PatientChart from './pages/patient/ChartAlert/PatientChart'
import View from './pages/patient/ChartAlert/View'
import Create from './pages/patient/ChartAlert/Create'
import Delete from './pages/patient/ChartAlert/Delete'

function App() {
  const [count, setCount] = useState(0)

  const store = configureStore({
    reducer: rootReducer,
    devTools: true,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      serializableCheck: false
    })
  })
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={PatientTable}/>
          <Route path='/patient-form' Component={PatientForm}/>
          <Route path='/patient-form/:id' Component={PatientForm}/>
          <Route path='/patient-chart/:id' Component={PatientChart}/>
          <Route path = '/create' Component={Create}/>
          <Route path = '/delete' Component = {Delete}/>
          <Route path='/viewdetails' Component={View}/>
          <Route path='/schedule' Component={Schedule}/>
          <Route path='/clinical' Component={Clinical}/>
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
