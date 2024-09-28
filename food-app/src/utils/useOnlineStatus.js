import { useEffect, useState } from "react";
const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);
  useEffect(() => {
    window.addEventListener("online", () => {
      console.log("online");
      setOnlineStatus(true);
    });
    window.addEventListener("offline", () => {
      console.log("offline");
      setOnlineStatus(false);
    });
  }, []);
  return onlineStatus;
};

export default useOnlineStatus;
