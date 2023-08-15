export const authorize = () => {
   const checkToken = window.sessionStorage.getItem("token");
   if (checkToken) {
      return true;
   } else {
      window.location.href = "/auth/login";
   }
};

export const tokenExpire = () => {
   window.sessionStorage.removeItem("token");
   window.location.href = "/auth/login";
};
