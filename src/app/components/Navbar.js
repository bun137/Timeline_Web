import { UserAuth } from "../context/AuthContext";
import Image from "next/image";
import { useState, useEffect } from "react";
export default function Navbar() {

const { user, googleSignIn, logOut } = UserAuth();
  const [loading, setLoading] = useState(true);

  const handleSignIn = async () => {
    let sign_in_button = document.querySelector("#signIn");
    let spinner ="...loading" ;
    sign_in_button.innerHTML = spinner;
    try {
      await googleSignIn();
    } catch (error) {
      alert("check your internet connection...");
      sign_in_button.innerHTML = "Sign In";
    }
  }

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      alert("check your internet connection")
    }
  }


  useEffect(() => {
    const checkAuthentication = async () => {
      await new Promise((resolve) => setTimeout(resolve, 69));
      setLoading(false);
      console.log(user);
    }
    checkAuthentication();
  }, [user]);


   return (
        <header className="flex justify-between items-center p-4">
             <h1 className="text-2xl font-bold">Timeline</h1>
             <nav>
                  <ul className="flex space-x-4">
                   <li className="flex justify-between items-center">
                      <a href="/">Home</a>
                   </li>
                   <li className="flex justify-between items-center">
                      <a href="/about">About</a>
                   </li>
                   <li>
                      {loading ? (
                          <div>loadingg!</div>):(
                              user ? (
                              <div className="flex space-x-4">
                                <Image src={user.photoURL} alt='your picture' width={50} height={50}></Image>
                                <button type="button" id="signOut" onClick={handleSignOut}>Sign Out</button>
                              </div>
                              ):(
                                <div className=" flex" >
                                  <Image src="https://cdn.discordapp.com/attachments/1080892669313699881/1174960318519181392/google-logo.png?ex=65697e11&is=65570911&hm=feeb56548bd4841e4263bac89683c8ec8e5c250ca1ee8809fc087ff9acb05936&" alt="GoogleLogo" width={50} height={50}></Image>
                                  <button type="button"  id="signIn" onClick={handleSignIn}>Sign In with Google</button>
                                </div> )
                          )}
                   </li>
                  </ul>
             </nav>
        </header>
   ) 
}