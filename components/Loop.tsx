import { useEffect, useState,Children } from "react";
import React from "react";
import { cp } from "fs";
export function Loop({
  interval = 250,
  startIndex = 0,

  className,
  children,
}: {
  interval: number;
  startIndex: number;

  className: string;
  children: any[];
}) {
  const [index, setIndex] = useState(startIndex);
  
  useEffect(() => {
    let int = setInterval(() => {
      if (index+1 >= children.length) setIndex(0);
      else setIndex(index + 1);
    }, interval);
    return () => clearInterval(int);
    
  }, [index,interval,startIndex]);
  if (children===undefined || Children.count(children) <= 0 || children===null) return <div></div>;
  return (
    <div className={className}>
      {children[index]}

    </div>
  );
}
