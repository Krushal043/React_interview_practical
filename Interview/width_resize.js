import { useState, useEffect } from "react";

export default function App() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  });

  const updateWidth = () => {
    setWidth(window.innerWidth);
  };
  return <div>Width Size : ${width}</div>;
}
