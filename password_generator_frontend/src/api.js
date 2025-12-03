import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_API_URL;

export const generatePassword = async ({
  lettersPerWord,
  numWords,
  includeNumbers,
  includeSymbols,
  capitalization,
}) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/generate`, {
      params: { lettersPerWord, numWords, includeNumbers, includeSymbols, capitalization }
    });
    return response.data; // { password: "..." }
  } catch (error) {
    console.error("Error generating password:", error);
    throw error;
  }
};

