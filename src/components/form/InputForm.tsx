import { FormEvent } from "react";

interface InputFormProps {
  className?: string;
  children: React.ReactNode;
  onSubmit: (e: FormEvent<HTMLFormElement | HTMLFormElement>) => void;
}
const InputForm: React.FC<InputFormProps> = ({
  className,
  children,
  onSubmit,
}) => {
  return (
    <form className={`${className}`} onSubmit={onSubmit}>
      {children}
    </form>
  );
};

export { InputForm };
