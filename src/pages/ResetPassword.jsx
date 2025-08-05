import { useState } from "react";

// Import Components
import Form from "../components/Form";
import Input from "../components/ui/Input";
import FormInfo from "../components/ui/FormInfo";
import PageLink from "../components/ui/PageLink";
import FormButton from "../components/ui/FormButton";

export default function ResetPassword() {
  const [email, setEmail] = useState("");

  // Handel Sign In Logic
  function resetPassword(e) {
    e.preventDefault();
  }

  return (
    <>
      <Form>
        <FormInfo
          title="Password Reset"
          desc="Enter your email address to reset password."
        />
        <Input
          name="email"
          type="text"
          placeHolder="Enter Your Email"
          value={email}
          onChange={setEmail}
        />
        <FormButton title="SEND RESET LINK" onClick={resetPassword} />
        <p className="text-center text-md text-gray-600 dark:text-white">
          Already have an account?
          <PageLink route="/signin" pageName="Sign in" />
        </p>
      </Form>
    </>
  );
}
