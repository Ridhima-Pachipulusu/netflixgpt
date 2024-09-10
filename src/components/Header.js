import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
  const navigate=useNavigate();
  const users = useSelector((store) => store.user);
  const handleSignOut=()=>{
    signOut(auth)
      .then(() => {
       navigate("/");
      })
      .catch((error) => {
      });
  }
  return (
    <div className=" w-full absolute h-24 bg-gradient-to-b from-black ">
      {users && <div className="h-14 relative z-50 float-right mr-6 mt-3 w-14">
        <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117" />
        <button onClick={handleSignOut} className=" text-white font-semibold">
          (SignOut)
        </button>
      </div>
    }
    </div>
  );
};
export default Header;
