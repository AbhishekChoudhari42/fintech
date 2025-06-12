import React from 'react'

const CoreValues = () => {
    return (
      <section className="py-12 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          {/* Header */}
          <h2 className="text-blue-600 text-sm font-semibold mb-2">— Our Core Values</h2>
          <h1 className="text-4xl font-bold mb-4">We strive to deliver value to our clients</h1>
          <p className="text-gray-600 mb-8">
            We put these values to work in our systems, strategy, and people practices. These are the filters through which every decision passes.
          </p>
  
          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Trust */}
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-blue-100 flex items-center justify-center rounded mb-4">
                <span className="text-blue-600">[Icon: Lock]</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Trust</h3>
              <p className="text-gray-600 text-sm">
                Our most valuable asset is trust — earned through performance.
              </p>
            </div>
  
            {/* Joyful & Inclusive Culture */}
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-blue-100 flex items-center justify-center rounded mb-4">
                <span className="text-blue-600">[Icon: Heart]</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Joyful & Inclusive Culture</h3>
              <p className="text-gray-600 text-sm">
                Because work should also bring joy
              </p>
            </div>
  
            {/* Integrity */}
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-blue-100 flex items-center justify-center rounded mb-4">
                <span className="text-blue-600">[Icon: Check Shield]</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Integrity</h3>
              <p className="text-gray-600 text-sm">
                We do the right thing — always, not just when it’s noticed.
              </p>
            </div>
  
            {/* Customer Obsession */}
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-blue-100 flex items-center justify-center rounded mb-4">
                <span className="text-blue-600">[Icon: Users]</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Customer Obsession</h3>
              <p className="text-gray-600 text-sm">
                Our clients’ success drives every decision.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  };

export default CoreValues