import { useCallback, useEffect, useState } from "react";
import "./App.css";

export default function App() {
  const [length, setLength] = useState(8);
  const [pass, setPass] = useState("");
  const [number, SetNumber] = useState(false);
  const [char, SetChar] = useState(false);

  const generate = useCallback(() => {
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let p = "";
    if (number) {
      str += "0123456789";
    }
    if (char) {
      str += "!@#$%^&*-_+=[]{}~`";
    }

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      p += str.charAt(char);
    }

    setPass(p);
  }, [length, number, char, setPass]);

  useEffect(() => {
    generate();
  }, [length, number, char, generate]);

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className="text-white text-center my-3">Password generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          className="outline-none w-full py-1 px-3"
          type="text"
          readOnly
          value={pass}
        ></input>
        <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">
          copy
        </button>
      </div>

      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input
            onChange={(e) => {
              setLength(e.target.value);
            }}
            className="cursor-pointer"
            type="range"
            value={length}
          ></input>
          <label>Length: {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            onChange={() => {
              SetNumber((prev) => !prev);
            }}
            defaultChecked={number}
            type="checkbox"
            id="numbers"
          />
          <label htmlFor="numbers">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            onChange={() => {
              SetChar((prev) => !prev);
            }}
            defaultChecked={char}
            type="checkbox"
            id="char"
          />
          <label htmlFor="char">Characters</label>
        </div>
      </div>
    </div>
  );
}
