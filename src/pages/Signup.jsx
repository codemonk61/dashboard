import React from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import Input from "../components/Input";
import Button from "../components/Button";

const Signup = () => {
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            username: "",
            password: "",
        },
        validationSchema: Yup.object({
            username: Yup.string().required("Username is required"),
            password: Yup.string()
                .min(6, "Password must be at least 6 characters")
                .required("Password is required"),
        }),
        onSubmit: (values) => {
            // Load existing users from localStorage
            const users = localStorage.getItem("users")
                ? JSON.parse(localStorage.getItem("users"))
                : [];

            // Check if username is already taken
            const userExists = users.find((u) => u.username === values.username);

            if (userExists) {
                alert("Username is already taken. Please choose another one.");
                return;
            }

            // Add the new user to the array and save it to localStorage
            users.push(values);
            localStorage.setItem("users", JSON.stringify(users));

            alert("Account created successfully! Please login.");
            navigate("/login");
        },
    });

    return (
        <>
            <style>
                {
                    `
             .signup__wrapper{
                display: flex;
                justify-content: center;
                align-items: center;
             }
            `
                }
            </style>

            <div className="signup__wrapper">
                <div>
                    <h2>Sign Up</h2>
                    <form onSubmit={formik.handleSubmit}>
                        <div>
                            <Input
                                type="text"
                                name="username"
                                label="username"
                                value={formik.values.username}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                required
                                placeholder="Enter Username"
                                id={'username'}
                            />
                            {formik.touched.username && formik.errors.username ? (
                                <div style={{ color: "red" }}>{formik.errors.username}</div>
                            ) : null}
                        </div>
                        <div>
                            <Input
                                type="password"
                                name="password"
                                label="password"
                                placeholder="Enter Password"
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                required
                                id={'password'}
                            />
                            {formik.touched.password && formik.errors.password ? (
                                <div style={{ color: "red" }}>{formik.errors.password}</div>
                            ) : null}
                        </div>
                        <Button appearance="primary" type="submit" label="Sign Up" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default Signup;
