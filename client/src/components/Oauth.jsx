import { GoogleAuthProvider, signInWithPopup, getAuth } from "@firebase/auth";
import app from "../firebase";
export default function Oauth() {

  const handleGoogleClick = async () => {
    try {
      const provider = new GoogleAuthProvider()
      const auth = getAuth(app);
      const result = await signInWithPopup(auth, provider);
      console.log(result);
      

    } catch (error) {
      console.error(error);
    }
  }

  return (
    <button
      className="w-full mt-3 disabled:opacity-80 rounded-lg p-2 bg-yellow-500 hover:opacity-95 text-white uppercase"
      type="submit" onClick={handleGoogleClick}
    >
      Sign In with Google
    </button>
  );
}
