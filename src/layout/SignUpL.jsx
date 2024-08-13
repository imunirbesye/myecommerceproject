import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { axiosInstance } from "../ApiControl";
import { useForm, Controller } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { fetchRoles } from "../actions/clientReducerActions";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

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
                <Link
                  to="/login"
                  className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                >
                  LOGIN
                </Link>
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
                defaultValue="3"
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
              {isSubmitting ? (
                <>
                  <svg
                    aria-hidden="true"
                    class="inline w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                  &nbsp;&nbsp; Submitting..
                </>
              ) : (
                "Submit"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpL;
