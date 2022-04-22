import Image from 'Components/Image';
import React, { useEffect, useState } from 'react';

function Slider() {
  const [curr, setCurr] = useState(0);
  const [currList, setCurrList] = useState([
    { id: 0, img: 'images/projects/clothingstore.png' },
    { id: 1, img: 'images/projects/dataninja.png' },
    { id: 2, img: 'images/projects/tourism.png' },
    { id: 3, img: 'images/projects/clothingstore.png' },
    // { id: 4, img: 'images/projects/dataninja.png' },
    // { id: 5, img: 'images/projects/tourism.png' },
    // { id: 6, img: 'images/projects/clothingstore.png' },
    // { id: 7, img: 'images/projects/dataninja.png' },
    // { id: 8, img: 'images/projects/tourism.png' },
    // { id: 9, img: 'images/projects/clothingstore.png' },
    // { id: 10, img: 'images/projects/dataninja.png' },
    // { id: 11, img: 'images/projects/tourism.png' },
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
    <div className="flex relative glass-effect before:opacity-60">
      <div
        style={{ transform: `translateX(-${curr}px)` }}
        className="flex transition slider-auto "
      >
        {currList.map((image, index) => (
          <Image
            // style={{ transform: `translateX(100%)` }}
            className="w-600px h-100 "
            key={index}
            src={image.img}
          />
        ))}
      </div>
      {/* <div className="slider-section">
        <div id="infinite" class="highway-slider">
          <div class="container highway-barrier">
            <ul class="highway-lane">
              {currList.map((image, index) => (
                <li class="highway-car">
                  <span class="fab ">
                    <Image
                      // style={{ transform: `translateX(100%)` }}
                      className="w-600px h-100 "
                      key={index}
                      src={image.img}
                    />
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Slider;
