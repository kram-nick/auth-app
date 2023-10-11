import { useEffect, useState } from "react";

const Main = () => {
  const [username, setUsername] = useState<string>("");

  useEffect(() => {
    const data = localStorage.getItem(process.env.REACT_APP_TOKEN_KEY);
    if (data) {
      setUsername(data);
    }
  }, []);

  return (
    <div>
      <p className="text-center mt-[200px] text-[50px] font-bold">{`Hi, ${username}!`}</p>
    </div>
  );
};

export default Main;
