import { axiosWithoutAuthHeaders, axiosWithAuthHeaders } from "../utils/axios";

export const signIn = async (username, password) => {
  const response = await axiosWithoutAuthHeaders.post("public/auth", {
    username,
    password,
  });

  return response.data;
};

// export const currentUser =async()=>{
//   const response = await axiosWithAuthHeaders.get(

//   );
//   return response.data;
// };
