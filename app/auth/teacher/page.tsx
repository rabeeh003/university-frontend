import Login from '@/components/login'
import React from 'react'

const quote: string = "العُلَمَاءُ وَرَثَةُ الأَنبِيَاء"
const heading: string = "Teacher login"
function Page() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <Login nextRout='/teacher/' heading={heading} quote={quote} loginRoute='/account/teacher/login/' />
    </div>
  )
}

export default Page
