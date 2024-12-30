import httpRequest from "./httpRequest";

export const authService = {
  login: async (email, password) => {
    const response = await httpRequest.post("/auth/v1/api/user/signin", {
      username: email,
      password,
    });
    return response.data;
  },

  logout: async () => {
    await httpRequest.post("/auth/v1/api/user/signout");
  },

  refreshAccessToken: async () => {
    try {
      const response = await httpRequest.post("/auth/v1/api/user/refreshtoken");
      return response.data;
    } catch (error) {
      console.error("Error refreshing access token:", error);
      throw error;
    }
  },

  validateSession: async () => {
    try {
      const response = await httpRequest.get(
        "/auth/v1/api/user/validate-session"
      );
      return response.data;
    } catch (error) {
      console.error("Session validation error:", error);
      throw error;
    }
  },

  createUser: async (
    firstName,
    lastName,
    username,
    mobileNumber,
    email,
    password,
    role,
    dateOfBirth
  ) => {
    try {
      const response = await httpRequest.post("/auth/v1/api/user/signup", {
        firstName,
        lastName,
        username,
        mobileNumber,
        email,
        password,
        role,
        dateOfBirth,
      });
      return response.data;
    } catch (error) {
      console.error("There is something wrong:", error);
      throw error;
    }
  },
};
