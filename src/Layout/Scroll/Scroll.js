import React, { useEffect, useState } from 'react';

function SectionScrolling(props) {
  const { children, currView, setCurrView, shouldScrollDisplay } = props;
  const [loading, setLoading] = useState(false);

  const [direction, setDirection] = useState('');

  const pages = [
    { name: 'welcome', axis: 'translateY(0vh)' },
    { name: 'about', axis: 'translateY(-100vh)' },
    { name: 'projects', axis: 'translateY(-200vh)' },
    { name: 'skills', axis: 'translateY(-300vh)' },
    { name: 'contact', axis: 'translateY(-400vh)' },
  ];

  // if (loading === false) {
  //   document.body.addEventListener('mousewheel', handleThrottle, false);
  //   document.body.addEventListener('keydown', handleKeyDown, false);
  //   document.body.addEventListener('DOMMouseScroll', handleThrottle, false);
  // }

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      setDirection('');
    }, 800);
  }, [loading]);

  useEffect(() => {
    const MouseWheelHandler = (e) => {
      if (!shouldScrollDisplay) return;
      if (loading) return;
      var event = window.event || e;
      var delta = Math.max(-1, Math.min(1, event.wheelDelta || -event.detail));
      console.log(delta);

      if (delta > 0) {
        console.log(currView);
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

    function throttler(callback, delay = 1000) {
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

    const handleKeyDown = (e) => {
      if (e.key === 'ArrowUp') {
        if (currView === 0) return;
        setDirection('up');
        setLoading(true);
      }
      if (e.key === 'ArrowDown') {
        if (currView === pages - 1) return;
        setDirection('down');
        setLoading(true);
      }
    };

    document.body.addEventListener('mousewheel', MouseWheelHandler, false);
    document.body.addEventListener('keydown', handleKeyDown, false);
    document.body.addEventListener('DOMMouseScroll', MouseWheelHandler, false);

    return () => {
      document.body.removeEventListener('mousewheel', MouseWheelHandler, false);
      document.body.removeEventListener('keydown', handleKeyDown, false);
      document.body.removeEventListener(
        'DOMMouseScroll',
        MouseWheelHandler,
        false
      );
    };
  }, [currView, direction]);

  function scrollDown() {
    if (currView === pages.length - 1) return;
    setCurrView(currView + 1);
    const axis = `translateY(-${currView + 1}00vh)`;
    document.getElementById('wrapper').style.transform = axis;
  }

  function scrollUp() {
    if (currView === 0) return;
    // console.log('scrolled');

    setCurrView(currView - 1);
    const axis = `translateY(-${currView - 1}00vh)`;
    document.getElementById('wrapper').style.transform = axis;
  }

  useEffect(() => {
    console.log(currView);
    if (loading) return;
    console.log(direction);
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
