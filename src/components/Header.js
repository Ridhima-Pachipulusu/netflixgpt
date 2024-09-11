import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = useSelector((store) => store.user);
  useEffect(() => {
   const unsubscribe= onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return ()=> unsubscribe();
  }, []);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {});
  };
  return (
    <div className=" w-full absolute h-24 bg-gradient-to-b from-black ">
      {users && (
        <div className="h-14 relative z-50 float-right mr-6 mt-3 w-14">
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117" />
          <button onClick={handleSignOut} className=" text-white font-semibold">
            (SignOut)
          </button>
        </div>
      )}
    </div>
  );
};
export default Header;
