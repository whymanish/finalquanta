import React from 'react';

const BentoGrid = () => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
        {/* Grid Item 1 */}
        <div className="bg-gray-300 p-4 rounded-md">
          {/* Content for grid item 1 */}
        </div>

        {/* Grid Item 2 */}
        <div className="bg-gray-300 p-4 rounded-md">
          {/* Content for grid item 2 */}
        </div>

        {/* Grid Item 3 */}
        <div className="bg-gray-300 p-4 rounded-md">
          {/* Content for grid item 3 */}
        </div>

        {/* Grid Item 4 */}
        <div className="bg-gray-300 p-4 rounded-md">
          {/* Content for grid item 4 */}
        </div>

        {/* Grid Item 5 */}
        <div className="bg-gray-300 p-4 rounded-md">
          {/* Content for grid item 5 */}
        </div>

        {/* Repeat the above pattern for more grid items */}
      </div>
    </div>
  );
};

export default BentoGrid;
