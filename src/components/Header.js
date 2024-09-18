import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { gptPageDisplay } from "../utils/gptSearchSlice";
const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptPage);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {});
  };
  const handleGptSearch = () => {
    dispatch(gptPageDisplay());
    alert(
      "Data that will be shown are the results fetched from tmdb API.The data may or may not be TRUE"
    );
  };
  return (
    <div className=" w-full absolute h-20 bg-gradient-to-b from-black">
      {users && (
        <div className="relative z-50 float-right mr-10 mt-3 flex flex-row">
          <button
            className=" text-white bg-violet-900 rounded-lg px-4 py-2 mr-2"
            onClick={handleGptSearch}
          >
            {showGptSearch ? "Homepage" : "GPT Search"}
          </button>
          <img
            className="w-12 h-12 "
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117"
          />
          <button onClick={handleSignOut} className=" text-white font-semibold">
            (SignOut)
          </button>
        </div>
      )}
    </div>
  );
};
export default Header;
