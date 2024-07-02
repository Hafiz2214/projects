import React from 'react';
import img1 from './image1.png';
import img2 from './image2.png';
import img3 from './image3.png';
const CompareProductsPage = () => {
  return (
    <div className="container mx-auto py-8">
      
      <div className="max-w-4xl mx-auto bg-white shadow-md p-8 rounded-lg">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Compare All Products</h1>
        <table className="table-auto w-full text-left text-gray-600 mb-4">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2">Specification</th>
              <th className="px-4 py-2">Rhyno SE03 Lite</th>
              <th className="px-4 py-2">Rhyno SE03</th>
              <th className="px-4 py-2">Rhyno SE03 Max</th>
            </tr>
          </thead>
          <tbody>
          <tr>
              <td className="font-bold px-4 py-2">Image</td>
              <td className="px-4 py-2"><img src={img1} alt="Rhyno SE03 Lite" className="w-full h-auto"/></td>
              <td className="px-4 py-2"><img src={img2} alt="Rhyno SE03" className="w-full h-auto"/></td>
              <td className="px-4 py-2"><img src={img3} alt="Rhyno SE03 Max" className="w-full h-auto"/></td>
            </tr>
          
            <tr>
              <td className="font-bold px-4 py-2">Battery</td>
              <td className="px-4 py-2">1.8 kWh</td>
              <td className="px-4 py-2">2.7 kWh</td>
              <td className="px-4 py-2">2.7 kWh</td>
            </tr>
            <tr>
              <td className="font-bold px-4 py-2">Battery Features</td>
              <td className="px-4 py-2">LFP with 1500 cycles, Active Balancing, Waterproof (IP67)</td>
              <td className="px-4 py-2">LFP with 1500 cycles, Active Balancing, Waterproof (IP67)</td>
              <td className="px-4 py-2">LFP with 1500 cycles, Active Balancing, Waterproof (IP67)</td>
            </tr>
            <tr>
              <td className="font-bold px-4 py-2">Battery Warranty</td>
              <td className="px-4 py-2">3 Years</td>
              <td className="px-4 py-2">3 Years</td>
              <td className="px-4 py-2">3 Years</td>
            </tr>
            <tr>
              <td className="font-bold px-4 py-2">Charging Time</td>
              <td className="px-4 py-2">3 hours (12A)</td>
              <td className="px-4 py-2">4 hours (12A)</td>
              <td className="px-4 py-2">4 hours (12A)</td>
            </tr>
            <tr>
              <td className="font-bold px-4 py-2">Motor</td>
              <td className="px-4 py-2">1500W</td>
              <td className="px-4 py-2">1500W</td>
              <td className="px-4 py-2">2000W</td>
            </tr>
            <tr>
              <td className="font-bold px-4 py-2">Max Speed</td>
              <td className="px-4 py-2">55 km/h</td>
              <td className="px-4 py-2">55 km/h</td>
              <td className="px-4 py-2">65 km/h</td>
            </tr>
            <tr>
              <td className="font-bold px-4 py-2">Warranty on Electronics</td>
              <td className="px-4 py-2">1 year</td>
              <td className="px-4 py-2">1 year</td>
              <td className="px-4 py-2">1 year</td>
            </tr>
            <tr>
              <td className="font-bold px-4 py-2">Max Range (@30 km/h)</td>
              <td className="px-4 py-2">100 km</td>
              <td className="px-4 py-2">150 km</td>
              <td className="px-4 py-2">120 km</td>
            </tr>
            <tr>
              <td className="font-bold px-4 py-2">Max Range (@45 km/h)</td>
              <td className="px-4 py-2">90 km</td>
              <td className="px-4 py-2">110 km</td>
              <td className="px-4 py-2">100 km</td>
            </tr>
            <tr>
              <td className="font-bold px-4 py-2">Max Range (@full speed)</td>
              <td className="px-4 py-2">60 km</td>
              <td className="px-4 py-2">90 km</td>
              <td className="px-4 py-2">80 km</td>
            </tr>
            <tr>
              <td className="font-bold px-4 py-2">Other Key Benefits</td>
              <td className="px-4 py-2">Fire-safe battery, Range prediction, Comfortable ride, Stable and safe</td>
              <td className="px-4 py-2">Fire-safe battery, Range prediction, Comfortable ride, Stable and safe</td>
              <td className="px-4 py-2">Fire-safe battery, Range prediction, Comfortable ride, Stable and safe</td>
            </tr>
          </tbody>
        </table>
        
      </div>
    </div>
  );
}

export default CompareProductsPage;
