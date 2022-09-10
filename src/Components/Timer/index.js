import React, { useState, useEffect } from "react";

const Timer = () => {
  const [second, setSeond] = useState();
  const [dateFmt, setDateFmt] = useState("");
  useEffect(() => {
    setInterval(() => {
      const dateSec = new Date();
      setDateFmt(
        `${dateSec.getFullYear()}-${
          dateSec.getMonth() + 1
        }-${dateSec.getDate()} ${dateSec.getHours()}:${dateSec.getMinutes()}:`
      );
      setSeond(dateSec.getSeconds());
    }, 1000);
  }, []);
  return (
    <div className="whitespace-nowrap">
      <p className="text-xl">
        {dateFmt}
        <span className="text-2xl"> {second}</span>
      </p>
    </div>
  );
};

export default Timer;
