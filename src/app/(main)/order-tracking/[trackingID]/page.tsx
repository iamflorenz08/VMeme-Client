import React from 'react';

export default function TrackingIDPage() {
  // Sample data for table updates
  const updatesData = [
    { date: '11/29/2023 - 8:31PM', location: 'Taguig City', event: 'Order Placed' },
    { date: '11/29/2023 - 8:31PM', location: 'Taguig City', event: 'Order Confirmed' },
    
    
    // Add more rows as needed
  ];

  // Dynamic array of steps based on the number of rows in updatesData
  const steps = updatesData.map((update, index) => ({
    label: update.event,
    date: update.date,
    progress: `${((index + 1) / updatesData.length) * 100}%`,
  }));

  return (
    <main className='container mx-auto xl:px-20 duration-300'>
      <h1 className='font-medium text-2xl text-center my-8'>Tracking</h1>

      {/* Stepper and Progress Bar */}
      <div className="flex items-center flex-col justify-center relative">
        {/* Stepper Circles and Connections */}
        <div className="flex justify-between items-center w-1/2">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              {index > 0 && (
                <div className="h-6 bg-primary w-1/3 rounded-full my-2"></div>
              )}
              <div className={`w-8 h-8 bg-gray-500 rounded-full mx-1 ${index + 1 <= steps.length ? 'bg-primary' : ''}`}></div>
            </React.Fragment>
          ))}
        </div>

        {/* Stepper Labels */}
        <div className="flex w-full justify-between">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center w-1/3 text-center">
              <span className="text-xs text-gray-500">{step.date}</span>
              <span className="text-sm">{step.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Updates Table */}
      <h1 className='font-medium text-2xl my-4'>Updates:</h1>
      <table className='table-auto w-full border-t border-gray bg-red-200'>
        <thead className='text-center'>
          <tr className='bg-primary text-white'>
            <th className='py-5'>Date</th>
            <th className='py-5'>Location</th>
            <th className='py-5'>Event</th>
          </tr>
        </thead>
        <tbody className='text-center overflow-auto'>
          {updatesData.map((update, index) => (
            <tr key={index} className={index % 2 === 0 ? 'odd:bg-white' : 'even:bg-primary-100'}>
              <td className='py-4'>{update.date}</td>
              <td className='py-4'>{update.location}</td>
              <td className='py-4'>{update.event}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
      {/* Back Button */}
      <div className='flex justify-between items-center py-5'>
        <button className='bg-white text-black px-5 py-2 rounded-md border border-black'>Back to Order Details</button>
      </div>
    </main>
  );
}
