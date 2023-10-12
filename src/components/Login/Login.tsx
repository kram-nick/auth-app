import * as Yup from "yup";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import { Auth } from "../../core/models/auth";
import { useNavigate } from "react-router-dom";
import jwt from "jsonwebtoken";

const Login = () => {
  const navigate = useNavigate();

  const valueFormValidationSchema = Yup.object().shape({
    email: Yup.string().required("Field is required").email("Invalid email"),
    password: Yup.string()
      .required("Field is required")
      .min(8, "Min 8 characters")
      .max(12, "Max 12 characters"),
  });

  const formikForm = useFormik<{
    email: string;
    password: string;
  }>({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: valueFormValidationSchema,
    onSubmit: async (values: any) => {
      HandleSubmitForm();
    },
  });

  const HandleSubmitForm = () => {
    const jwtToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlVzZXIiLCJpYXQiOjQzNDMzMzQ0NDd9.ny91FG9lk70HMqzgYMQmr43aBZdqn233xZT2Wl2oPdY";
    localStorage.setItem(process.env.REACT_APP_TOKEN_KEY, jwtToken);
    toast.success("Successfully logged in!");
    navigate("/main");
  };

  return (
    <div className="flex items-center justify-center mt-[17%]">
      <form
        onSubmit={formikForm.handleSubmit}
        className="flex flex-col gap-[15px] bg-[gray] w-[30%] border-[springgreen] border-[4px] rounded-[10px] p-[20px]"
      >
        <label className="flex flex-col gap-[5px]">
          <span>Username</span>
          <input
            type="email"
            placeholder="example@gmail.com"
            className="border-[1px] outline-none rounded-[4px] pl-[3px]"
            {...formikForm.getFieldProps("email")}
          />
          {formikForm.errors.email && formikForm.touched.email && (
            <p className="block text-[13px] leading-[20px] text-[crimson] font-semibold">
              {formikForm.errors.email}
            </p>
          )}
        </label>
        <label className="flex flex-col gap-[5px]">
          <span>Password</span>
          <input
            type="password"
            className="border-[1px] outline-none rounded-[4px] pl-[3px]"
            {...formikForm.getFieldProps("password")}
          />
          {formikForm.errors.password && formikForm.touched.password && (
            <p className="block text-[13px] leading-[20px] text-[crimson] font-semibold">
              {formikForm.errors.password}
            </p>
          )}
        </label>
        <button
          type="submit"
          className="bg-[springgreen] py-[8px] rounded-[10px] font-bold"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
