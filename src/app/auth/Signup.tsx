import AuthLayout from "@/view/layout/AuthLayout";
import dynamic from "next/dynamic";
const SignupForm = dynamic(import("@/components/auth/SignupForm"), {
  ssr: false,
});
const Signup = () => {
  return (
    <AuthLayout>
        <SignupForm/>
    </AuthLayout>
  );
};
export default Signup;
