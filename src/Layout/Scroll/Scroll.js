import React, { useCallback, useEffect, useMemo, useState } from 'react';

const debounce = (func, wait) => {
  let timeout;
  return (...args) => {
    const later = () => {
      timeout = null;

      func(...args);
    };
    clearTimeout(timeout);

    timeout = setTimeout(later, wait);
  };
};

let throttlePause;

const throttle = (callback, time) => {
  //don't run the function if throttlePause is true
  if (throttlePause) return;
  console.log(throttlePause);

  //set throttlePause to true after the if condition. This allows the function to be run once
  throttlePause = true;

  //setTimeout runs the callback within the specified time
  setTimeout(() => {
    callback();

    //throttlePause is set to false once the function has been called, allowing the throttle function to loop
    throttlePause = false;
  }, time);
};

function SectionScrolling(props) {
  const { children, currView, setCurrView } = props;
  const [loading, setLoading] = useState(false);

  const [direction, setDirection] = useState('');

  function scrollDown(page) {
    if (currView === pages.length - 1) return;
    // console.log('scrolled');
    setCurrView(currView + 1);
    const axis = `translateY(-${currView + 1}00vh)`;
    document.getElementById('wrapper').style.transform = axis;
  }

  function scrollUp(page) {
    if (currView === 0) return;
    // console.log('scrolled');

    setCurrView(currView - 1);
    const axis = `translateY(-${currView - 1}00vh)`;
    document.getElementById('wrapper').style.transform = axis;
  }

  const pages = [
    { name: 'blue', axis: 'translateY(0vh)' },
    { name: 'red', axis: 'translateY(-100vh)' },
    { name: 'green', axis: 'translateY(-200vh)' },
    { name: 'purple', axis: 'translateY(-300vh)' },
  ];

  const MouseWheelHandler = (e) => {
    if (loading) return;
    var event = window.event || e;
    var delta = Math.max(-1, Math.min(1, event.wheelDelta || -event.detail));
    if (delta > 0) {
      if (currView === 0) return;
      setDirection('up');
      setLoading(true);
    }
    if (delta < 0) {
      if (currView === pages - 1) return;
      setDirection('down');
      setLoading(true);
    }
  };

  function throttler(callback, delay = 3000) {
    let shouldWait = false;

    return (...args) => {
      if (shouldWait === true) return;

      callback(...args);
      shouldWait = true;

      setTimeout(() => {
        shouldWait = false;
      }, delay);
    };
  }
  const handleThrottle = throttler((e) => MouseWheelHandler(e));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  // const debounceHandler = useMemo(throttle(MouseWheelHandler(), 500), []);
  if (!loading) {
    document.body.addEventListener('mousewheel', handleThrottle, false);
    document.body.addEventListener('DOMMouseScroll', handleThrottle, false);
  }

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      setDirection('');
    }, 800);
  }, [loading]);

  useEffect(() => {
    if (loading) return;
    if (direction === 'down') scrollDown();
    if (direction === 'up') scrollUp();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [direction]);

  return (
    <div id="wrapper" className="scroll-container relative z-10">
      {children}
    </div>
  );
}

export default SectionScrolling;
