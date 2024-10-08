import Login from '@/components/login'
import React from 'react'

const quote: string = "The best of what a man leaves behind are three: a righteous child who supplicates for him, ongoing charity the reward of which reaches him, and knowledge that is acted upon after him."
const heading: string = "College login"
function Page() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <Login heading={heading} quote={quote} nextRout={'/college/'} loginRoute='/account/login/college/' />
    </div>
  )
}

export default Page