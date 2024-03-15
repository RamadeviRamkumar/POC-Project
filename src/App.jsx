import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Schedule from './pages/schedule/index'
import Clinical from './pages/clinical'
import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './slices'
// import sideBar from './components/sideBar'
import PatientTable from './pages/patient/PatientTable'
import PatientChart from './pages/patient/ChartAlert/PatientChart'
import View from './pages/patient/ChartAlert/View'
import Create from './pages/patient/ChartAlert/Create'
import Delete from './pages/patient/ChartAlert/Delete'
import patient from './pages/patient'
import AddPatient from './pages/patient/AddPatient'
import AddAppointment from './pages/schedule/AddAppointment'

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
          {/* <Route path='/' Component={sideBar}/> */}
          <Route path='/patient' Component={PatientTable}/>
          <Route path='/patient-form' Component={patient}/>
          <Route path='/patient-form/:id' Component={patient}/>
          <Route path='/patient-chart/:id' Component={PatientChart}/>
          <Route path = '/create' Component={Create}/>
          <Route path = '/delete' Component = {Delete}/>
          <Route path='/viewdetails' Component={View}/>
          <Route exact path='/schedule' Component={Schedule}/>
          <Route path = '/add' Component={AddAppointment}/>
          <Route path='/clinical' Component={Clinical}/>
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
