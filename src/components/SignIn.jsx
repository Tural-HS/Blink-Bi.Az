import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./SignIn.css";
import * as api from "../api/api";
import { useHistory } from "react-router-dom";

const SignIn = () => {
  const history = useHistory();

  const initialValues = {
    username: "",
    password: "",
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("Required"),
    password: Yup.string().required("Required"),
  });

  const onSubmit = async (values, { setSubmitting }) => {
    // API call or other operations on form submission
    // ...

    history.push("/");
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-header">
          <h2 className="text-2xl">Login</h2>
          <p>Enter your Username and Password below to login to your account</p>
        </div>
        <div className="card-body">
          <form onSubmit={formik.handleSubmit}>
            <div className="mb-2">
              <label htmlFor="username">
                Username
                <span
                  className={`required-text ${
                    formik.touched.username && formik.errors.username
                      ? "error"
                      : ""
                  }`}
                >
                  {formik.errors.username && " (Required)"}
                </span>
              </label>
              <input
                type="text"
                id="username"
                name="username"
                className="form-control"
                placeholder="username"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.username}
              />
            </div>
            <div className="mb-2">
              <label htmlFor="password">
                Password
                <span
                  className={`required-text ${
                    formik.touched.password && formik.errors.password
                      ? "error"
                      : ""
                  }`}
                >
                  {formik.errors.password && " (Required)"}
                </span>
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="form-control"
                placeholder="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
            </div>
            <div className="card-footer">
              {/* Use the className prop to apply the Bootstrap button styles */}
              <button
                type="submit"
                className="btn btn-block btn-login"
                disabled={formik.isSubmitting}
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
