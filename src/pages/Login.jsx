import React from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "../components/Button";
import Input from "../components/Input";

const Login = () => {
    const navigate = useNavigate();

    // Load users from localStorage or initialize an empty array
    const getUsersFromLocalStorage = () => {
        const users = localStorage.getItem("users");
        return users ? JSON.parse(users) : [];
    };

    const formik = useFormik({
        initialValues: {
            username: "",
            password: "",
        },
        validationSchema: Yup.object({
            username: Yup.string().required("Username is required"),
            password: Yup.string().required("Password is required"),
        }),
        onSubmit: (values) => {
            const users = getUsersFromLocalStorage();

            // Check if the user exists
            const user = users.find(
                (u) => u.username === values.username && u.password === values.password
            );

            if (user) {
                // Store session in localStorage
                localStorage.setItem("session", JSON.stringify(user));
                navigate("/dashboard");
            } else {
                alert("Invalid username or password");
            }
        },
    });

    return (
        <>
            <style>
                {
                    `
             .login__wrapper{
                display: flex;
                justify-content: center;
                align-items: center;
             }
            `
                }
            </style>
            <div className="login__wrapper">
                <div>
                    <h2>Login</h2>
                        <div>
                            <Input
                                placeholder="Enter Username"
                                name="username"
                                label="username"
                                required
                                type="text"
                                value={formik.values.username}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                id={"username"}
                            />
                            {formik.touched.username && formik.errors.username ? (
                                <div style={{ color: "red" }}>{formik.errors.username}</div>
                            ) : null}
                        </div>
                        <div>
                            <Input
                                placeholder="Enter Password"
                                required
                                type="password"
                                name="password"
                                label="password"
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                id={'password'}
                            />
                            {formik.touched.password && formik.errors.password ? (
                                <div style={{ color: "red" }}>{formik.errors.password}</div>
                            ) : null}
                        </div>
                        <Button appearance="primary"  label="LOGIN" onClick={formik.handleSubmit} type="submit" style={{ marginTop: "10px" }} />
                        <div style={{ marginTop: "10px" }}>
                            Don't have an account?{" "}
                            <span onClick={() => navigate("/signup")} style={{ color: "blue", textDecoration: "underline" }}>
                                Sign Up
                            </span>
                        </div>
            
                </div>
            </div>
        </>
    );
};

export default Login;
