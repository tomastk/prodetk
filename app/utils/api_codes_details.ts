import { API_CODES } from "../services/data";

export const getCodeDetails = (code: string) => {
  const API_CODE = API_CODES.find((item) => item.code === code);

  return {
    codeMessage: API_CODE?.message,
    isFailureCode: API_CODE?.isFailureCode,
  };
};
