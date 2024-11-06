import "./style.css";
import localFont from "next/font/local";

const mainFont = localFont({ src: "../../assets/fonts/IRANSans-web.woff"});

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div lang="fa" className=" flex items-center justify-center grow bg-center bg-no-repeat page-bg m-0">
      {children}
    </div>
  );
};

export default AuthLayout;
