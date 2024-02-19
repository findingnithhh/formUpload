import React from "react";

interface AddProps {
  className?: string;
  placeholder?: string;
  type: string;
  name: string;
  value?: string;
  label?: string;
  error: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const Add: React.FC<AddProps> = ({
  className,
  placeholder,
  type,
  name,
  value,
  onChange,
  label,
  error,
}) => {
  return (
    <>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        className={`${className}`}
        onChange={onChange}
      />
    </>
  );
};

export { Add };
