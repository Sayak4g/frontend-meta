import { createContext, useContext, useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";

const SOCKET_URL = "http://192.168.0.100:3000";

const SocketContext = createContext(null);

export function SocketProvider({ children }) {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    if (socket) {
      console.warn("Socket already initialized");
      return;
    }
    const newSocket = io(SOCKET_URL, { withCredentials: true });
    setSocket(newSocket);

    newSocket.on("connect", () =>
      console.log("Socket connected!", newSocket.id)
    );
    newSocket.on("disconnect", () =>
      console.log("Socket disconnected!")
    );
    newSocket.on("connect_error", (err) =>
      console.error("Socket connection error:", err.message)
    );

    return () => {
        newSocket.off("connect");
        newSocket.off("disconnect");
        newSocket.off("connect_error");
        newSocket.disconnect();
    };
}, []);

  return (
    <SocketContext.Provider value={socket}>
      {children}
    </SocketContext.Provider>
  );
}

export function useSocket() {
  return useContext(SocketContext);
}