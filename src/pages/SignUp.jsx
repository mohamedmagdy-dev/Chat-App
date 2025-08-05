import { useState } from "react";

// Import Components
import Form from "../components/Form";
import Input from "../components/ui/Input";
import FormInfo from "../components/ui/FormInfo";
import CheckBox from "../components/ui/CheckBox";
import PageLink from "../components/ui/PageLink";
import FormButton from "../components/ui/FormButton";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  // Handel Sign In Logic
  function signUp(e) {
    e.preventDefault();
  }

  return (
    <>
      <Form>
        <FormInfo
          title="Sign Up"
          desc="We are Different, We Make You Different."
        />
        <Input
          name="name"
          type="text"
          placeHolder="Enter Your Name"
          value={name}
          onChange={setName}
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
        <FormButton title="SIGN UP" onClick={signUp} />
        <p className="text-center text-md text-gray-600 dark:text-white">
          Already have an account?
          <PageLink route="/signin" pageName="Sign in" />
        </p>
      </Form>
    </>
  );
}
