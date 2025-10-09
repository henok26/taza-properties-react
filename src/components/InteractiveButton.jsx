import React, { useRef, useState } from 'react';

const InteractiveButton = ({ children, onClick, className, href }) => {
  const buttonRef = useRef(null);
  const [ripples, setRipples] = useState([]);

  const magneticEffect = (e) => {
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - left - width / 2;
    const y = e.clientY - top - height / 2;
    buttonRef.current.style.transform = `translateX(${x * 0.3}px) translateY(${y * 0.5}px)`;
  };

  const resetMagnetic = () => {
    buttonRef.current.style.transform = '';
  };

  const createRipple = (e) => {
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    const newRipple = { x, y, id: Date.now() };

    setRipples(prev => [...prev, newRipple]);
    setTimeout(() => {
      setRipples(prev => prev.filter(r => r.id !== newRipple.id));
    }, 600);

    if (onClick) {
      onClick(e);
    }
  };
  
  const commonProps = {
    ref: buttonRef,
    className: `relative overflow-hidden transition-transform duration-200 ${className}`,
    onMouseMove: magneticEffect,
    onMouseLeave: resetMagnetic,
    onClick: createRipple,
  };

  const content = (
    <>
      {children}
      {ripples.map(ripple => (
        <span
          key={ripple.id}
          className="ripple"
          style={{ left: ripple.x, top: ripple.y }}
        />
      ))}
    </>
  );

  return href ? (
    <a href={href} {...commonProps}>
      {content}
    </a>
  ) : (
    <button {...commonProps}>
      {content}
    </button>
  );
};

export default InteractiveButton;