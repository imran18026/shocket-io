"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";
let socket;
const page = () => {
  const searchParams = useSearchParams();
  const name = searchParams.get("name");
  const room = searchParams.get("room");
  const endPoint = "http://localhost:5000/";

  useEffect(() => {
    socket = io(endPoint);
    socket.emit("join", {
      name,
      room,
    });
    console.log(socket);
  }, [endPoint]);

  return (
    <div>
      <h1>Test </h1>
      <h1>name : {name}</h1>
      <h1>room : {room}</h1>
    </div>
  );
};

export default page;
