import AuthLayout from "@/view/layout/AuthLayout";
import dynamic from "next/dynamic";
const CheckEmailForm = dynamic(import("@/components/auth/CheckEmailForm"), {
  ssr: false,
});
const CheckEmail = () => {
  return (
    <AuthLayout>
     <CheckEmailForm/>
    </AuthLayout>
  );
};
export default CheckEmail;
