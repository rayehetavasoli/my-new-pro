import AuthLayout from "@/view/layout/AuthLayout";
import dynamic from "next/dynamic";
const EnterEmailForm = dynamic(import("@/components/auth/EnterEmailForm"), {
  ssr: false,
});
const EnterEmail = () => {
  return (
    <AuthLayout>
        <EnterEmailForm/>
    </AuthLayout>
  );
};
export default EnterEmail;
