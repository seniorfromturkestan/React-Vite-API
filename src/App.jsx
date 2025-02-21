import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom'
import React from 'react'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Jobs from './pages/Jobs'
import NotFound from './pages/NotFound'
import JobsPage from './pages/JobsPage'
import AddJobs from './pages/AddJobs'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const App = () => {

  const addJobSubmit = async (newJob) => {
    const res = await fetch('/api/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newJob)
    })
    return res
    
  }

  const deleteJob = async (id) => {
    const res = await fetch(`/api/jobs/${id}`, {
      method: 'DELETE',
    })
    return res
  }


  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/jobs' element={<Jobs/>}/>
        <Route path='/addjobs' element={<AddJobs addJobSubmit={addJobSubmit}/>}/>
        <Route path='/jobs/:id' element={<JobsPage deleteJob={deleteJob} />}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      <ToastContainer/>
    </Router>
  )
}

export default App