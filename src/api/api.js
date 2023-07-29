import { axiosWithoutAuthHeaders, axiosWithAuthHeaders } from "../utils/axios";

export const signIn = async (username, password) => {
  const response = await axiosWithoutAuthHeaders.post("public/auth", {
    username,
    password,
  });

  return response.data;
};
