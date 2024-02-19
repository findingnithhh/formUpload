import { useEffect, useState } from "react";
interface InputContextProps {
  inputText: string;
  inputFfile: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

