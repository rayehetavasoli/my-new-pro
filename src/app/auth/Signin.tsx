import AuthLayout from "@/view/layout/AuthLayout";
import dynamic from "next/dynamic";
const SigninForm = dynamic(import("@/components/auth/SigninForm"), {
  ssr: false,
});
const Signin = () => {
  return (
    <AuthLayout>
        <SigninForm/>
    </AuthLayout>
  );
};
export default Signin;
