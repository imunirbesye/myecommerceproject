import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { loginUser } from "../actions/clientReducerActions";
import { useHistory } from "react-router-dom";

import userImage from "../assets/images/undraw_web_shopping_re_owap.svg";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    const { email, password, rememberMe } = data;
    const deg = await dispatch(loginUser(email, password, rememberMe));
    if (deg) history.push("/");

    setLoading(false);
  };

  return (
    <div className="h-[100vh] flex flex-row items-center">
      <div className="flex flex-col items-center md:w-[100vw] md:flex-row md:justify-center">
        <img
          src={`${userImage}`}
          className="w-[70%] mb-4 md:w-[40%] md:mr-5 lg:w-[40rem] lg:mr-10"
        />
        <div className="w-[80%] flex flex-col items-center m-auto pb-5 rounded-md bg-success-color md:w-[25rem] md:m-0">
          <div className="text-sm font-medium text-center text-gray-500">
            <ul className="flex flex-wrap -mb-px">
              <li className="">
                <a
                  href="#"
                  className="inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500"
                >
                  LOGIN
                </a>
              </li>
              <li className="">
                <a
                  href="#"
                  className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                  aria-current="page"
                >
                  SIGN UP
                </a>
              </li>
            </ul>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="w-[90%] mt-2">
            <div>
              <input
                id="email"
                placeholder="E-Mail"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                    message: "Email is not valid",
                  },
                })}
                className="w-[100%] px-2 py-2 mb-1 border-[1px] border-gray-200 rounded-md"
              />
              {errors.email && <p>{errors.email.message}</p>}
            </div>

            <div>
              <input
                id="password"
                type="password"
                placeholder="Password"
                {...register("password", { required: "Password is required" })}
                className="w-[100%] px-2 py-2 mb-2 border-[1px] border-gray-200 rounded-md"
              />
              {errors.password && <p>{errors.password.message}</p>}
            </div>

            <div>
              <input
                type="checkbox"
                id="rememberMe"
                {...register("rememberMe")}
              />
              <label htmlFor="rememberMe" className="ml-2">
                Remember Me
              </label>
            </div>

            <button
              type="submit"
              className="w-[100%] px-2 py-2 mt-2 border-[1px] border-gray-200 rounded-md bg-white"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
