import React from 'react'
import Hero from './Hero'
import HomeCards from './HomeCards'
import JobsList from './JobsList'
import ViewAll from './ViewAll'


const Main = () => {
  return (
    <>
      <Hero/>
      <HomeCards/>
      <JobsList isHome={true}/>
      <ViewAll/>


    </>
  )
}

export default Main