import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./SignIn.css";
import * as api from "../api/api";
import { useHistory } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import useAuth from "../hooks/useAuth";

const SignIn = () => {
  const history = useHistory();

  // const { signIn } = useAuth();
  // const navigate = useNavigate();

  const initialValues = {
    username: "",
    password: "",
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("Required"),
    password: Yup.string().required("Required"),
  });

  const onSubmit = async (values, { setSubmitting }) => {
    // try {
    //   const response = await api(values.username, values.password);
    //   console.log(response);
    //   setSubmitting(false);
    // } catch (error) {
    //   console.error("Error signing in:", error);
    //   setSubmitting(false);
    // }
    const signIn = async () => {
      try {
        const resp = await api.signIn(values.username, values.password);
        console.log(resp);
        history.push("/");
      } catch (error) {
        console.log(error);
      }
    };
    signIn();
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
          <p>Enter your Username below to login to your account</p>
        </div>
        <div className="card-body">
          <form onSubmit={formik.handleSubmit}>
            <div className="mb-2">
              <label htmlFor="username">Username</label>
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
              {formik.touched.username && formik.errors.username && (
                <div className="text-danger">{formik.errors.username}</div>
              )}
            </div>
            <div className="mb-2">
              <label htmlFor="password">Password</label>
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
              {formik.touched.password && formik.errors.password && (
                <div className="text-danger">{formik.errors.password}</div>
              )}
            </div>
            <div className="card-footer">
              {/* Use the className prop to apply the Bootstrap button styles */}
              <button
                type="submit"
                className="btn btn-secondary btn-block btn-login"
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
