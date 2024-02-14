import { useState } from "react";
import { supabase } from "../../supabase";
import Link from "next/link";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isConnected, setIsConnected] = useState(false);

  const session = supabase.auth.getSession();

  session.then((data) => {
    if (data) {
      const user = data.data.session?.user.id;
      const userRefresh = data.data.session?.refresh_token;
      localStorage.setItem("user", user);
      localStorage.setItem("userRefresh", userRefresh);
    }
  });

  const handleLogin = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      console.error("Error signing in:", error.message);
      alert("error");
    } else {
      console.log("User signed in successfully:", data);
      alert("you are logged In");
      // Redirect to the dashboard or any other page
      window.location.href = "/"; // Replace '/dashboard' with your desired route
      setIsConnected(true);
    }
  };

  return (
    <div className="form-container">
      <input
        className="input-log"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="input-log"
        type="password"
        placeholder="Mot de passe"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="auth-button" onClick={handleLogin}>
        Se connecter
      </button>
    </div>
  );
}
