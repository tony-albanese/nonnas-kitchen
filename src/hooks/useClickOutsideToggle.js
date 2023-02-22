import {useEffect, useRef, useState} from 'react'

export const useClickOutsideToggle = () => {

    const [expanded, setExpanded] = useState(false);

  const burgerIconRef = useRef(null);

  useEffect(() => {

    const handleClickOutside = (event) => {
      if (burgerIconRef.current && !burgerIconRef.current.contains(event.target)){
        setExpanded(false);
      }
    };

    document.addEventListener('mouseup', handleClickOutside);
    return () => {
      document.removeEventListener('mouseup', handleClickOutside);
    };
  }, [burgerIconRef]
  );
  return (
    { expanded, setExpanded, burgerIconRef}
  );
}
