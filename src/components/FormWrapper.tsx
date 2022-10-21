import { ReactNode } from "react";
import "../App.css";

type FormWrapperProps = {
  title: string;
  children: ReactNode;
};

const FormWrapper = ({ title, children }: FormWrapperProps) => {
  return (
    <>
      <h2 className="title">{title}</h2>
      <div className="children">{children}</div>
    </>
  );
};

export default FormWrapper;
