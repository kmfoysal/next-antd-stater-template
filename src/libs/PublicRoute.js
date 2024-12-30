// export default PublicRoute;

import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

const PublicRoute = ({ children }) => {
  const { user, isClient } = useAuth();

  const router = useRouter();

  return !user?.email ? children : router.push("/");
  
};

export default PublicRoute;
