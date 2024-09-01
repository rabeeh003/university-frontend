import Login from '@/components/login'
import React from 'react'

const quote: string = "Whoever travels a path in search of knowledge, Allah will make easy for him a path to Paradise."
const heading: string = "Student login"
function Page() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <Login nextRout='/student/' heading={heading} quote={quote} loginRoute='/account/student/login/' />
    </div>
  )
}

export default Page