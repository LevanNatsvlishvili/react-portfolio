import React, { useCallback, useEffect, useState } from 'react';
import throttle from 'lodash/throttle';

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

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      setDirection('');
    }, 800);
  }, [loading]);

  const MouseWheelHandler = (e) => {
    if (!shouldScrollDisplay) return;
    if (loading) return;
    var event = window.event || e;
    var delta = Math.max(-1, Math.min(1, event.wheelDelta || -event.detail));

    if (delta > 0) {
      setDirection('up');
      setLoading(true);
    }
    if (delta < 0) {
      setDirection('down');
      setLoading(true);
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleThrottle = useCallback(
    throttle((e) => MouseWheelHandler(e, currView), 1000),
    []
  );

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
  useEffect(() => {
    document.body.addEventListener('mousewheel', handleThrottle, false);
    document.body.addEventListener('keydown', handleKeyDown, false);
    document.body.addEventListener('DOMMouseScroll', handleThrottle, false);

    return () => {
      document.body.removeEventListener('mousewheel', handleThrottle, false);
      document.body.removeEventListener('keydown', handleKeyDown, false);
      document.body.removeEventListener(
        'DOMMouseScroll',
        handleThrottle,
        false
      );
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currView]);

  function scrollDown() {
    console.log(currView);
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
