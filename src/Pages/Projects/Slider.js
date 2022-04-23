import Image from 'Components/Image';
import React, { useEffect, useState } from 'react';

function Slider(props) {
  const { currView } = props;
  const [curr, setCurr] = useState(0);
  const [currList, setCurrList] = useState([
    { id: 0, img: 'images/projects/clothingstore.png' },
    { id: 1, img: 'images/projects/dataninja.png' },
    { id: 2, img: 'images/projects/tourism.png' },
    { id: 3, img: 'images/projects/clothingstore.png' },
    { id: 4, img: 'images/projects/dataninja.png' },
    { id: 5, img: 'images/projects/tourism.png' },
    { id: 6, img: 'images/projects/clothingstore.png' },
    { id: 7, img: 'images/projects/dataninja.png' },
  ]);

  useEffect(() => {
    setTimeout(() => {
      // setCurr((prev) => prev + 1);
      // handleSlide();
    }, 100);
  });
  useEffect(() => {
    setTimeout(() => {
      // setCurr((prev) => prev + 0.05);
      // handleSlide();
    }, 1000);
  });

  const handleSlide = () => {
    if (curr < 30) return;
    console.log(curr > 30);
    const slidedImg = currList[0];
    const newArr = currList
      .filter((curr, index) => index !== 0)
      .map((curr) => curr);
    // const lastImg = newArr[newArr.length - 1];
    // const newImg = images.find(({ id }) => id === lastImg.id + 1);
    // console.log(newImg);
    const arr = [...newArr, slidedImg];
    setCurrList(arr);
  };

  console.log(currList);

  return (
    <div
      className={`w-1/2 h-1/2 ml-100 relative glass-effect overflow-hidden rounded-xl ${
        currView === 1 ? 'glass-effect-active' : ''
      } `}
    >
      <div
        style={{ width: `${currList.length}00%` }}
        className="flex transition slider-auto h-full"
      >
        {currList.map((image, index) => (
          <Image
            // style={{ transform: `translateX(100%)` }}
            className="w-full h-full "
            key={index}
            src={image.img}
          />
        ))}
      </div>
    </div>
  );
}

export default Slider;
