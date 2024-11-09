import AuthLayout from "@/view/layout/AuthLayout";
import dynamic from "next/dynamic";
const ResetPasswordForm = dynamic(import("@/components/auth/ResetPasswordForm"), {
  ssr: false,
});
const ResetPassword = () => {
  return (
    <AuthLayout>
        <ResetPasswordForm/>
    </AuthLayout>
  );
};
export default ResetPassword;
