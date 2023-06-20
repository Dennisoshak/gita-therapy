import React, { useEffect, useState } from "react";

const TextDisplay = ({text}) => {
  const [textToDisplay, setText] = useState("");
  const [index, setIndex] = useState(0);
  

  useEffect(() => {
    if (text && index < text.length) {
      const timeout = setTimeout(() => {
        setIndex(index + 1);
      }, 200);
      setText(() => textToDisplay + text[index]);

      return () => clearTimeout(timeout);
    }
  
// eslint-disable-next-line
  }, [index]);


  return <div>{textToDisplay}<span></span></div>;
};

export default React.memo(TextDisplay);
