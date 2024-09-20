import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { gptPageDisplay } from "../utils/gptSearchSlice";
import { netflixlogo, SearchIcon, Signout } from "../utils/Constants";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
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
    alert("Leaving too soon!!!Are sure you Want to Sign Out???");
    signOut(auth)
      .then(() => {})
      .catch((error) => {});
  };
  const handleGptSearch = () => {
    dispatch(gptPageDisplay());
    if (!showGptSearch) {
      alert(
        "Data that will be shown are the results fetched from tmdb API.The data may or may not be TRUE"
      );
    }
  };
  return (
    <div className=" w-full absolute h-20 bg-gradient-to-b from-black">
  
      {users && (
        <div className="relative z-50 float-right mr-14 mt-3 flex flex-row">
          <div
            className="flex items-center justify-center"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {isHovered && !showGptSearch ? (
              <button
                onClick={handleGptSearch}
                className="bg-blue-500 text-white py-2 px-4 rounded-md text-sm hover:bg-blue-700 transition-colors duration-300 mr-3"
              >
                GPT Search
              </button>
            ) : showGptSearch ? (
              <h1
                className=" font-bold text-5xl text-red-600 w-6 mr-7 h-8 -mt-4 cursor-pointer"
                onClick={handleGptSearch}
              >
                N
              </h1>
            ) : (
              <div className="text-4xl text-gray-700 cursor-pointer -mt-4">
                {SearchIcon}
              </div>
            )}
          </div>
          <img
            className="w-8 h-8 mr-3 mt-1 "
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117"
          />
          <button
            onClick={handleSignOut}
            className=" text-white font-semibold "
          >
            {Signout}
          </button>
        </div>
      )}
    </div>
  );
};
export default Header;
