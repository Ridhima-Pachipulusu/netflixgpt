const Validate=(email,password)=>{
    const isEmailValid = /[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    if(!isEmailValid)
        {
             return "Email and/or password not valid";
        }
    if(!isPasswordValid) 
        {
            return "Email and/or password not valid";
        }
    return null;
} 
export default Validate;