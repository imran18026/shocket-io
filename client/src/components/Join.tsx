"use client";

import Link from "next/link";
import { useState } from "react";

const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <div className="ml-10 py-10">
      <h1 className="font-bold text-2xl ">JOIN CHAT</h1>
      <div className="py-5">
        <div className="my-5">
          <input
            placeholder="Enter your name"
            type="text"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="my-5">
          <input
            placeholder="Enter your room id"
            type="text"
            onChange={(e) => {
              setRoom(e.target.value);
            }}
          />
        </div>

        <Link
          href={`/chat?name=${name}&room=${room}`}
          onClick={(e) => (!name || !room ? e.preventDefault() : null)}
        >
          <button
            type="submit"
            className="btn bg-teal-500 text-white px-2 py-1 rounded"
          >
            Join The chat
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Join;
