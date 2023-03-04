import {useEffect, useRef, useState} from 'react'

/*
This code is to for handling the behavior of the mouseclicks for the hamburger menu toggle.
It is taken from the Moments walktrhough.
https://github.com/Code-Institute-Solutions/moments/blob/master/src/hooks/useClickOutsideToggle.js
*/
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
