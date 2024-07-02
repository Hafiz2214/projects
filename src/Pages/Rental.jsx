import React from 'react';

const RentalPage = () => {
  return (
    <div className="container mx-auto py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Explore Rhyno Rentals</h1>
        <p className="text-gray-700 mb-4">
          Explore the roars of Rhyno at your own pace with our rental options! Test the waters with our flexible rental model, available for a week or a month, allowing you to experience the Rhyno firsthand before committing. Simply visit our authorized dealerships to unlock this opportunity.
        </p>
        <p className="text-gray-700 mb-4">
          Additionally, we're redefining campus commuting with our rental fleet tailored for college students. Navigate your daily commute effortlessly by renting Rhyno vehicles on an hourly basis through our user-friendly mobile app. Embrace the freedom to ride and explore a new dimension in sustainable and convenient transportation.
        </p>
        <div className="flex space-x-4">
          <a href="#" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded flex items-center">
            <i className="fab fa-android mr-2"></i> Download for Android
          </a>
          <a href="#" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded flex items-center">
            <i className="fab fa-apple mr-2"></i> Download for Apple
          </a>
        </div>
      </div>
    </div>
  );
}

export default RentalPage;
