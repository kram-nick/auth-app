import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Header = () => {
  const navigate = useNavigate();

  const LogOut = () => {
    localStorage.clear();
    navigate("/");
    toast.error("Log out!");
  };

  return (
    <>
      <header className="flex flex-row justify-between items-center bg-[gray] py-[30px] px-[30px]">
        <h2 className="font-bold">Main Page</h2>
        <button className="bg-[white] rounded-[5px] p-[5px]" onClick={LogOut}>
          Log out
        </button>
      </header>
    </>
  );
};

export default Header;
