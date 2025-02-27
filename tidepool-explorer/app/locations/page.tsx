import React from 'react'


function Locations() {
  return (
    <>
      {/* Map picture section */}
      <section className="pt-20 relative">
        <div className="relative h-[600px] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/temp.jpg')" }}>
        </div>
      </section>
      { /* Locations section */}
      <section>
        <div>
          <h2 className="text-lg pt-4 font-bold text-blue-300 text-left">
            Locations
          </h2>
        </div>
      </section>
    </>      
  )
}

export default Locations