import { useParams } from 'react-router-dom';
import img1 from './image1.png';
import img2 from './image2.png';
import img3 from './image3.png';

const products = {
    'se03-lite':{
      
      name: 'Rhyno SE03 Lite',
      image:img1,
      description: 'Indulge in the perfect harmony of power and range with this Rhyno. Offering an exhilarating experience with its robust 2000W motor, it ensures a thrilling ride while still delivering an impressive 80-100km range on a single charge. Like its counterparts, this machine features the safety assurance of a fire-safe advanced LFP battery, along with the comprehensive benefits of owning a Rhyno. Boasting a formidable combination of a 2000W motor and a 2.7kWh battery, this beast is ready to roar on the roads, providing an electrifying journey at every turn.',
      specifications: {
        battery: '1.8 kWh LFP with 1500 cycles',
        batteryWarranty: '3 Years',
        chargingTime: '3 hours (12A)',
        motor: '1500W',
        maxSpeed: '50 km/h',
        warrantyElectronics: '1 year',
        maxRange30kmh: '100 km',
        maxRange45kmh: '90 km',
        maxRangeFullSpeed: '70 km',
        otherBenefits: ['Fire-safe battery', 'Range prediction', 'Comfortable ride', 'Stable and safe']
      },
    },
    'se03': {
      name: 'Rhyno SE03',
      image:img2,
      description: 'Indulge in the perfect harmony of power and range with this Rhyno. Offering an exhilarating experience with its robust 2000W motor, it ensures a thrilling ride while still delivering an impressive 80-100km range on a single charge. Like its counterparts, this machine features the safety assurance of a fire-safe advanced LFP battery, along with the comprehensive benefits of owning a Rhyno. Boasting a formidable combination of a 2000W motor and a 2.7kWh battery, this beast is ready to roar on the roads, providing an electrifying journey at every turn.',
      specifications: {
        battery: '2.7 kWh LFP with 1500 cycles',
        batteryWarranty: '3 Years',
        chargingTime: '4 hours (12A)',
        motor: '1500W',
        maxSpeed: '55 km/h',
        warrantyElectronics: '1 year',
        maxRange30kmh: '150 km',
        maxRange45kmh: '110 km',
        maxRangeFullSpeed: '90 km',
        otherBenefits: ['Fire-safe battery', 'Range prediction', 'Comfortable ride', 'Stable and safe']
      },
    },
    'se03-max': {
      name: 'Rhyno SE03 Max',
      image:img3,
      description: 'This Rhyno is tuned for long drives and no thrills. Like all other variants, this machine comes with a fire-safe advanced LFP battery and all the other benefits of owning a Rhyno, along with a perfect blend of battery capacity and motor power to provide up to 150 km range on a single charge. While it may not provide a thrilling ride, it promises a dependable and unwavering presence on the long stretches.',
      specifications: {
        battery: '2.7 kWh LFP with 1500 cycles',
        batteryWarranty: '3 Years',
        chargingTime: '4 hours (12A)',
        motor: '2000W',
        maxSpeed: '65 km/h',
        warrantyElectronics: '1 year',
        maxRange30kmh: '120 km',
        maxRange45kmh: '100 km',
        maxRangeFullSpeed: '80 km',
        otherBenefits: ['Fire-safe battery', 'Range prediction', 'Comfortable ride', 'Stable and safe']
      },
    },
  };
  
  

const ProductPage = () => {
  let { productId } = useParams();
  const product = products[productId];

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    
    
    <div className="container mx-auto py-8">
      <div className="max-w-3xl mx-auto bg-white shadow-md p-8 rounded-lg">
        <img src={product.image}/>
              <h1 className="text-3xl font-bold text-gray-800 mb-4">{product.name}</h1>
        <p className="text-gray-600 mb-4">{product.description}</p>

        <h2 className="text-xl font-bold text-gray-800 mb-2">Specifications:</h2>
        <table className="table-auto w-full text-left text-gray-600 mb-4">
          <tbody>
            <tr>
              <td className="font-bold pr-4">Battery:</td>
              <td>{product.specifications.battery}</td>
            </tr>
            <tr>
              <td className="font-bold pr-4">Battery Warranty:</td>
              <td>{product.specifications.batteryWarranty}</td>
            </tr>
            <tr>
              <td className="font-bold pr-4">Charging Time:</td>
              <td>{product.specifications.chargingTime}</td>
            </tr>
            <tr>
              <td className="font-bold pr-4">Motor:</td>
              <td>{product.specifications.motor}</td>
            </tr>
            <tr>
              <td className="font-bold pr-4">Max Speed:</td>
              <td>{product.specifications.maxSpeed}</td>
            </tr>
            <tr>
              <td className="font-bold pr-4">Warranty on Electronics:</td>
              <td>{product.specifications.warrantyElectronics}</td>
            </tr>
            <tr>
              <td className="font-bold pr-4">Max Range (@30 km/h):</td>
              <td>{product.specifications.maxRange30kmh}</td>
            </tr>
            <tr>
              <td className="font-bold pr-4">Max Range (@45 km/h):</td>
              <td>{product.specifications.maxRange45kmh}</td>
            </tr>
            <tr>
              <td className="font-bold pr-4">Max Range (@full speed):</td>
              <td>{product.specifications.maxRangeFullSpeed}</td>
            </tr>
            <tr>
              <td className="font-bold pr-4">Other Key Benefits:</td>
              <td>
                <ul>
                  {product.specifications.otherBenefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
              </td>
            </tr>
          </tbody>
          <button className=" px-8 py-2 text-2xl font-bold bg-green-600 text-white rounded-sm">Buy now</button>
        </table>
      </div>
    </div>
    
  );
}

export default ProductPage;
