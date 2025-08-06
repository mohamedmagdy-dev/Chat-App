import { useState } from "react";

//Import React Router
import { useNavigate } from "react-router";
// Import Components
import Form from "../components/Form";
import Input from "../components/ui/Input";
import FormInfo from "../components/ui/FormInfo";
import CheckBox from "../components/ui/CheckBox";
import PageLink from "../components/ui/PageLink";
import FormButton from "../components/ui/FormButton";
import { login } from "../features/auth/authSlicer";
import { useDispatch } from "react-redux";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  //

  // Handel Sign In Logic
  async function signIn(e) {
    e.preventDefault();
    try {
      await dispatch(login({ email, password })).unwrap();

      navigate("/home");
    } finally {
      console.log();
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
      </Form>
    </>
  );
}
