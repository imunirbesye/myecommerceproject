import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { axiosInstance } from "../ApiControl";
import { useForm, Controller } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { fetchRoles } from "../actions/clientReducerActions";

import userImage from "../assets/images/undraw_web_shopping_re_owap.svg";

const SignUpL = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm();
  const [roles, setRoles] = useState([]);
  //const roles = useSelector((state) => state.client.roles);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const history = useHistory();
  const selectedRole = watch("role_id");

  useEffect(() => {
    axiosInstance
      .get("/roles")
      .then((response) => setRoles(response.data))
      .catch((error) => console.error(error));
  }, []);

  const onSubmit = async (data) => {
    delete data.passwordConfirm;
    setIsSubmitting(true);
    try {
      await axiosInstance.post("/signup", data);
      alert("You need to click link in email to activate your account!");
      history.goBack();
    } catch (error) {
      alert("Error submitting form");
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    dispatch(fetchRoles());
  }, [dispatch]);

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
                  className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                >
                  LOGIN
                </a>
              </li>
              <li className="">
                <a
                  href="#"
                  className="inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500"
                  aria-current="page"
                >
                  SIGN UP
                </a>
              </li>
            </ul>
          </div>
          <form
            id="sigUpForm"
            onSubmit={handleSubmit(onSubmit)}
            className="w-[90%] mt-2"
          >
            <div>
              <input
                placeholder="Name"
                {...register("name", { required: true, minLength: 3 })}
                className="w-[100%] px-2 py-2 mb-1 border-[1px] border-gray-200 rounded-md"
              />
              {errors.name && (
                <span>
                  Name is required and should be at least 3 characters long
                </span>
              )}
            </div>

            <div>
              <input
                placeholder="E-Mail"
                {...register("email", {
                  required: true,
                  pattern: /^\S+@\S+$/i,
                })}
                className="w-[100%] px-2 py-2 mb-1 border-[1px] border-gray-200 rounded-md"
              />
              {errors.email && <span>Invalid email address</span>}
            </div>

            <div>
              <input
                type="password"
                placeholder="Password"
                {...register("password", {
                  required: true,
                  minLength: 8,
                  pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).*$/,
                })}
                className="w-[100%] px-2 py-2 mb-1 border-[1px] border-gray-200 rounded-md"
              />
              {errors.password && (
                <span>
                  Password must be at least 8 characters long, and include
                  numbers, lowercase, uppercase, and special characters
                </span>
              )}
            </div>

            <div>
              <input
                type="password"
                placeholder="Confirm Password"
                {...register("passwordConfirm", {
                  validate: (value) => value === watch("password"),
                })}
                className="w-[100%] px-2 py-2 mb-1 border-[1px] border-gray-200 rounded-md"
              />
              {errors.passwordConfirm && <span>Passwords do not match</span>}
            </div>

            <div>
              <Controller
                name="role_id"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <select
                    {...field}
                    className="w-[100%] px-2 py-2 mb-1 border-[1px] border-gray-200 rounded-md"
                  >
                    {roles.map((role) => (
                      <option key={role.id} value={role.id}>
                        {role.name}
                      </option>
                    ))}
                  </select>
                )}
              />
            </div>

            {selectedRole === "2" && (
              <>
                <div>
                  <input
                    placeholder="Store Name"
                    {...register("store.name", {
                      required: true,
                      minLength: 3,
                    })}
                    className="w-[100%] px-2 py-2 mb-1 border-[1px] border-gray-200 rounded-md"
                  />
                  {errors.store?.name && (
                    <span>
                      Store name is required and should be at least 3 characters
                      long
                    </span>
                  )}
                </div>

                <div>
                  <input
                    placeholder="Store Phone"
                    {...register("store.phone", {
                      required: true,
                      pattern: /^(05)([0-9]{9})$/,
                    })}
                    className="w-[100%] px-2 py-2 mb-1 border-[1px] border-gray-200 rounded-md"
                  />
                  {errors.store?.phone && (
                    <span>Invalid Türkiye phone number</span>
                  )}
                </div>

                <div>
                  <input
                    placeholder="Store Tax No"
                    {...register("store.tax_no", {
                      required: true,
                      pattern: /^T\d{4}V\d{6}$/,
                    })}
                    className="w-[100%] px-2 py-2 mb-1 border-[1px] border-gray-200 rounded-md"
                  />
                  {errors.store?.tax_no && (
                    <span>Tax ID must match the pattern "TXXXXVXXXXXX"</span>
                  )}
                </div>

                <div>
                  <input
                    placeholder="Store Bank Account"
                    {...register("store.bank_account", {
                      required: true,
                      pattern: /^[A-Z]{2}\d{2}[A-Z0-9]{1,30}$/,
                    })}
                    className="w-[100%] px-2 py-2 mb-1 border-[1px] border-gray-200 rounded-md"
                  />
                  {errors.store?.bank_account && (
                    <span>Invalid IBAN address</span>
                  )}
                </div>
              </>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-[100%] px-2 py-2 border-[1px] border-gray-200 rounded-md bg-white"
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpL;
