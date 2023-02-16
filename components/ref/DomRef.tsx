import { useRef, useEffect } from 'react';
import * as React from 'react';

export const DomRef = () => {
  const InputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <div>
      <input type="text" ref={inputRef} />
    </div>
  );
};
