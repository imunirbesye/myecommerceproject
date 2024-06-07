import React, { useState, useEffect } from "react";
import axios from "axios";
import { useForm, Controller } from "react-hook-form";
import { useHistory } from "react-router-dom";

import userImage from "../assets/images/undraw_web_shopping_re_owap.svg";
import SignUpL from "../layout/SignUpL";

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
  return (
    <div>
      <SignUpL />
    </div>
  );
};

export default SignUp;
