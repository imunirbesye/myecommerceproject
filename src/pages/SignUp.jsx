import React, { useState, useEffect } from "react";
import axios from "axios";
import { useForm, Controller } from "react-hook-form";
import { useHistory } from "react-router-dom";

import userImage from "../assets/images/undraw_web_shopping_re_owap.svg";

const axiosInstance = axios.create({
  baseURL: "https://workintech-fe-ecommerce.onrender.com",
});
/*
const SignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
    setError,
  } = useForm();
  const [roles, setRoles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [role, setRole] = useState("customer");
  const history = useHistory();

  useEffect(() => {
    // Fetch roles
    axiosInstance
      .get("/roles")
      .then((response) => setRoles(response.data))
      .catch((error) => console.error("Error fetching roles:", error));
  }, []);

  const onSubmit = (data) => {
    setLoading(true);
    const {
      name,
      email,
      password,
      role_id,
      storeName,
      storePhone,
      storeTaxID,
      storeBankAccount,
    } = data;
    const formData = {
      name,
      email,
      password,
      role_id,
      ...(role === "store" && {
        store: {
          name: storeName,
          phone: storePhone,
          tax_no: storeTaxID,
          bank_account: storeBankAccount,
        },
      }),
    };

    axiosInstance
      .post("/signup", formData)
      .then((response) => {
        setLoading(false);
        history.goBack();
        alert("You need to click link in email to activate your account!");
      })
      .catch((error) => {
        setLoading(false);
        console.error("Error during signup:", error);
        alert("Signup failed. Please try again.");
      });
  };

  return (
    <div className="w-full flex flex-col items-center mt-4">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
        <input
          placeholder="Name"
          {...register("name", {
            required: "Name is required",
            minLength: {
              value: 3,
              message: "Name must be at least 3 characters",
            },
          })}
          className="w-80 py-3 px-2 border-[1px] border-gray-200 rounded-lg mb-1"
        />
        {errors.name && <p>{errors.name.message}</p>}
        <input
          placeholder="E-Mail"
          {...register("email", {
            required: "Email is required",
            pattern: { value: /^\S+@\S+$/i, message: "Invalid email format" },
          })}
          className="w-80 py-3 px-2 border-[1px] border-gray-200 rounded-lg mb-1"
        />
        {errors.email && <p>{errors.email.message}</p>}
        <input
          type="password"
          placeholder="Password"
          {...register("password", {
            required: "Password is required",
            pattern: {
              value:
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/,
              message:
                "Password must be at least 8 characters long, including numbers, lowercase, uppercase, and special characters",
            },
          })}
          className="w-80 py-3 px-2 border-[1px] border-gray-200 rounded-lg mb-1"
        />
        {errors.password && <p>{errors.password.message}</p>}
        <input
          type="password"
          placeholder="Confirm Password"
          {...register("confirmPassword", {
            required: "Password confirmation is required",
            validate: (value) =>
              value === watch("password") || "Passwords do not match",
          })}
          className="w-80 py-3 px-2 border-[1px] border-gray-200 rounded-lg mb-1"
        />
        {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
        <select
          {...register("role_id")}
          onChange={(e) => setRole(e.target.value)}
          className="w-80 py-3 px-2 border-[1px] border-gray-200 rounded-lg mb-1"
        >
          {roles.map((role) => (
            <option key={role.id} value={role.id}>
              {role.name}
            </option>
          ))}
        </select>
        {role === "store" && (
          <>
            <label>Store Name:</label>
            <input
              {...register("storeName", {
                required: "Store name is required",
                minLength: {
                  value: 3,
                  message: "Store name must be at least 3 characters",
                },
              })}
              className="w-80 py-3 px-2 border-[1px] border-gray-200 rounded-lg mb-1"
            />
            {errors.storeName && <p>{errors.storeName.message}</p>}
            <label>Store Phone:</label>
            <input
              {...register("storePhone", {
                required: "Store phone is required",
                pattern: {
                  value: /^\+90\d{10}$/,
                  message: "Invalid Türkiye phone number",
                },
              })}
              className="w-80 py-3 px-2 border-[1px] border-gray-200 rounded-lg mb-1"
            />
            {errors.storePhone && <p>{errors.storePhone.message}</p>}
            <label>Store Tax ID:</label>
            <input
              {...register("storeTaxID", {
                required: "Store tax ID is required",
                pattern: {
                  value: /^T\d{4}V\d{6}$/,
                  message:
                    "Invalid Tax ID format. Format should be TXXXXVXXXXXX",
                },
              })}
              className="w-80 py-3 px-2 border-[1px] border-gray-200 rounded-lg mb-1"
            />
            {errors.storeTaxID && <p>{errors.storeTaxID.message}</p>}
            <label>Store Bank Account:</label>
            <input
              {...register("storeBankAccount", {
                required: "Store bank account is required",
                pattern: {
                  value: /^[A-Z0-9]{15,34}$/,
                  message: "Invalid IBAN address",
                },
              })}
              className="w-80 py-3 px-2 border-[1px] border-gray-200 rounded-lg mb-1"
            />
            {errors.storeBankAccount && (
              <p>{errors.storeBankAccount.message}</p>
            )}
          </>
        )}
        <button
          type="submit"
          disabled={loading}
          className="w-80 py-3 px-2 border-[1px] border-gray-200 rounded-lg mb-1"
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default SignUp;
*/

const SignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm();
  const [roles, setRoles] = useState([]);
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

  return (
    <div className="h-[100vh] flex flex-row items-center">
      <div className="flex flex-col items-center md:w-[100vw] md:flex-row md:justify-center">
        <img
          src={`${userImage}`}
          className="w-[70%] mb-4 md:w-[40%] md:mr-5 lg:w-[40rem] lg:mr-10"
        />
        <div className="w-[80%] flex flex-col items-center m-auto pb-5 rounded-md bg-success-color md:w-[25rem] md:m-0">
          <div class="text-sm font-medium text-center text-gray-500">
            <ul class="flex flex-wrap -mb-px">
              <li class="">
                <a
                  href="#"
                  class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                >
                  LOGIN
                </a>
              </li>
              <li class="">
                <a
                  href="#"
                  class="inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500"
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

export default SignUp;
