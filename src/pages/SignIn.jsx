import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
// Import Components
import Form from "../components/Form";
import Input from "../components/ui/Input";
import FormInfo from "../components/ui/FormInfo";
import CheckBox from "../components/ui/CheckBox";
import PageLink from "../components/ui/PageLink";
import FormButton from "../components/ui/FormButton";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [rememberMe, setRememberMe] = useState(false);
  const { login } = useContext(AuthContext);

  // Handel Sign In Logic
  async function signIn(e) {
    e.preventDefault();
    setError(null);
    try {
      const response = await axios.post(
        "http://localhost:3001/api/auth/login",
        {
          email,
          password,
        }
      );
      const user = response.data.user;
      login(user);
      setEmail("");
      setPassword("");
    } catch (err) {
      setError("Invalid email or login failed.");
    }
  }

  return (
    <>
      <Form onSubmit={signIn}>
        <FormInfo
          title="Sign in"
          desc="We are Different, We Make You Different."
        />
        <Input
          name="email"
          type="text"
          placeHolder="Enter Your Email"
          value={email}
          onChange={setEmail}
        />
        <Input
          name="password"
          type="password"
          placeHolder="Enter Your Password"
          value={password}
          onChange={setPassword}
        />
        <div className="flex justify-between items-center gap-5 flex-wrap">
          <CheckBox
            label="Remember me"
            isChecked={rememberMe}
            onChange={setRememberMe}
          />
          <PageLink route="/reset-password" pageName="Reset Password" />
        </div>
        <FormButton title="SIGN IN" />
        <p className="text-center text-md text-gray-600  dark:text-white">
          Don't have an account?
          <PageLink route="/signup" pageName="Sign up" />
        </p>
        {error && <p className="text-red-500 text-sm">{error}</p>}
      </Form>
    </>
  );
}
