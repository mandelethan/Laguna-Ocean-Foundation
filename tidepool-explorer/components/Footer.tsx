import React from 'react'

export default function Footer() {
  return (
    <section>
      <div className="flex flex-col items-center w-full bg-orange-300 p-4">
        <h2 className="text-2xl font-bold mb-4">Laguna Ocean Foundation</h2>
        <div className="flex flex-col sm:flex-row sm:flex-wrap lg:flex-nowrap justify-center">
          <p className="sm:w-1/2 lg:w-auto text-center mb-2 sm:mb-0 lg:mb-0">Employment</p>
          <p className="sm:w-1/2 lg:w-auto text-center mb-2 sm:mb-0 lg:mb-0">Educational Resources</p>
          <p className="sm:w-1/2 lg:w-auto text-center mb-2 sm:mb-0 lg:mb-0">Newsletter Sign-up</p>
          <p className="sm:w-1/2 lg:w-auto text-center mb-2 sm:mb-0 lg:mb-0">Contact</p>
          
        </div>
      </div>
    </section>
  )
}
