/** @format */

import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { CgClose } from "react-icons/cg";
import useLess from "../content/UselessText";
import credentials from "../content/credential";
import schema from "../content/SignUpSchema";
const SignUpPopUp = ({ visible = false, setvisible }) => {
  const [data, setData] = useState({
    first: "",
    last: "",
    email: "",
    password: "",
  });
  const [err, setErr] = useState(null);
  return (
    <div
      className={` ${
        visible ? "flex absolute " : "hidden"
      }  justify-center items-center inset-0   bg-slate-50/[0.6]  `}
    >
      <div
        className={`   absolute
         bg-white border-2 w-96  max-w-screen-sm rounded-md`}
      >
        <div className="flex flex-col h-1/3 border-b p-2 ">
          <h1 className="text-3xl font-bold">Sign Up</h1>
          <span>It's quick and easy</span>
          <CgClose
            onClick={() => setvisible(false)}
            className="absolute right-3 top-3 text-2xl cursor-pointer"
          />
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            let { error } = schema.validate(data);
            setErr({
              key: error.details[0].context.key,
              message: error.message,
            });
          }}
          className=" h-96 px-2 py-5 flex flex-col justify-evenly "
        >
          <div className="flex justify-between  ">
            {credentials.slice(0, 2).map((e, i) => (
              <TextField
                key={i}
                label={e.name}
                variant="filled"
                style={{ width: "48%" }}
                value={data[e.property]}
                onChange={(i) =>
                  setData({ ...data, [e.property]: i.target.value })
                }
                helperText={err && err.key === e.property ? err.message : ""}
                error={err && err.key === e.property}
              />
            ))}
          </div>
          {credentials.slice(2, 4).map((e, i) => (
            <TextField
              key={i}
              label={e.name}
              variant="filled"
              value={data[e.property]}
              onChange={(i) =>
                setData({ ...data, [e.property]: i.target.value })
              }
              helperText={err && err.key === e.property ? err.message : ""}
              error={err && err.key === e.property}
            />
          ))}

          <p className=" text-xs py-2">{useLess}</p>
          {err && <span></span>}
          <button
            className=" bg-green-600 rounded text-white w-44 h-8 self-center "
            value="submit"
            type="submit"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpPopUp;
