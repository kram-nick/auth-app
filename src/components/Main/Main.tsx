import { useEffect, useState } from "react";
import { decodeToken } from "react-jwt";

const Main = () => {
  const [username, setUsername] = useState<string>("");

  useEffect(() => {
    const dataToken = localStorage.getItem(process.env.REACT_APP_TOKEN_KEY);

    if (dataToken) {
      const decoded: any = decodeToken(dataToken);
      setUsername(decoded.username);
    }
  }, []);

  return (
    <div>
      <p className="text-center mt-[200px] text-[50px] font-bold">{`Hi, ${username}!`}</p>
    </div>
  );
};

export default Main;
