import React, { useEffect, useState } from "react";

const TextDisplay = ({text}) => {
  const [textToDisplay, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [d,setD]=useState(true)
  

  useEffect(() => {
    if (text && index < text.length) {
      const timeout = setTimeout(() => {
        setIndex(index + 1);
      }, 200);
      setText(() => textToDisplay + text[index]);

      return () => clearTimeout(timeout);
    }
  

  }, [index]);
  useEffect(()=>{
  const interval =   setInterval(()=>{
      setD(!d)
    },500)
    return()=>clearInterval(interval)
  })

  return <div>{textToDisplay}<span></span></div>;
};

export default React.memo(TextDisplay);
