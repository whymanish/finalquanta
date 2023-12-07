import React from 'react';

const Bento = () => {
  const images = [
    'https://images.unsplash.com/photo-1701421709945-4d0660948cc4?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',  // Replace 'image1.jpg' with the actual path to your image
    'https://images.unsplash.com/photo-1639380540776-1a8c1376b26d?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',  // Replace 'image2.jpg' with the actual path to your image
    'image3.jpg',  // Replace 'image3.jpg' with the actual path to your image
    'image4.jpg',  // Replace 'image4.jpg' with the actual path to your image
    'image5.jpg',  // Replace 'image5.jpg' with the actual path to your image
    'image6.jpg',  // Replace 'image6.jpg' with the actual path to your image
    'image7.jpg',  // Replace 'image7.jpg' with the actual path to your image
  ];

  return (
    <div>
      <div className="grid max-w-4xl mx-auto auto-rows-[192px] grid-cols-3 gap-4">
        {[...Array(7)].map((_, i) => (
          <div
            key={i}
            className={`row-span-1 rounded-xl   dark:bg-neutral-900 ${
              i === 3 || i === 6 ? 'col-span-2' : ''
            }`}
          >
            {/* Add the image tag here */}
            <img
              src={images[i]} // Use the corresponding image URL for each div
              alt={`Image ${i + 1}`}
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bento;
