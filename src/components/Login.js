import Header from "./Header";
import { useRef, useState } from "react";
import Validate from "../utils/Validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const [userNotFound, setUserNotFound] = useState(false);
  const name = useRef();
  const email = useRef();
  const password = useRef();
  const toggleSignIn = () => {
    setIsSignIn(!isSignIn);
  };
  const handleClick = () => {
    const message = Validate(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;
    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
          })
            .then(() => {})
            .catch((error) => {});
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          if (errorCode) {
            setUserNotFound(true);
          }
        });
    }
  };
  return (
    <div>
      <Header />
      <div>
        <div>
          <img
            className="absolute"
            src="https://assets.nflxext.com/ffe/siteui/vlv3/dae1f45f-c2c5-4a62-8d58-6e1b0c6b2d8e/6d1fb8a4-5844-42a4-9b01-1c6c128acf19/IN-en-20240827-TRIFECTA-perspective_WEB_c292a608-cdc6-4686-8dc8-405bfcf753af_large.jpg"
          />
        </div>
        <div className=" w-3/12 bg-black absolute center my-40 mx-auto right-0 left-0 p-8 bg-opacity-80 rounded-md py-14 ">
          <h1 className=" text-white text-2xl font-bold">
            {isSignIn ? " Sign In" : "Sign Up"}
          </h1>
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            {!isSignIn && (
              <input
                ref={name}
                type="text"
                placeholder="Name"
                className="w-full h-12 p-6 m-2 text-white bg-transparent border border-gray-600 ml-0 rounded-md mt-4 bg-slate-950"
              />
            )}
            <input
              ref={email}
              type="text"
              placeholder="Email Address"
              className="w-full h-12 p-6 m-2 text-white bg-transparent border border-gray-600 ml-0 rounded-md mt-4 bg-slate-950"
            />
            <input
              ref={password}
              type="password"
              placeholder="Password"
              className="w-full h-12 p-6  bg-transparent border text-white border-gray-600 m-4 ml-0 rounded-md bg-slate-950"
            />
            <p className=" text-red-600">{errorMessage}</p>
            <p className=" text-red-600">
              {userNotFound && !errorMessage ? "User not found" : ""}
            </p>
            <input
              onClick={handleClick}
              type="submit"
              className=" hover:bg-opacity-80 bg-red-600 text-white font-semibold w-full p-3 m-4 ml-0 rounded-md cursor-pointer"
            />
          </form>
          <p className="  text-white mt-3">
            {isSignIn ? "New to Netfix?" : "Already a user?"}
            <span
              className="cursor-pointer text-blue-500"
              onClick={toggleSignIn}
            >
              {isSignIn ? " Sign Up" : "Sign In"}
            </span>
            {isSignIn ? " Now" : ""}
          </p>
        </div>
      </div>
    </div>
  );
};
export default Login;
