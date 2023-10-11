import * as Yup from "yup";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import { Auth } from "../../core/models/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const valueFormValidationSchema = Yup.object().shape({
    username: Yup.string().required("Field is required"),
    password: Yup.string()
      .required("Field is required")
      .min(8, "Min 8 characters")
      .max(12, "Max 12 characters"),
  });

  const formikForm = useFormik<{
    username: string;
    password: string;
  }>({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: valueFormValidationSchema,
    onSubmit: async (values: any) => {
      HandleSubmitForm(values);
    },
  });

  const HandleSubmitForm = (values: Auth) => {
    localStorage.setItem(process.env.REACT_APP_TOKEN_KEY, values.username);
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
            type="text"
            className="border-[1px] outline-none rounded-[4px] pl-[3px]"
            {...formikForm.getFieldProps("username")}
          />
          {formikForm.errors.username && formikForm.touched.username && (
            <p className="block text-[13px] leading-[20px] text-[crimson] font-semibold">
              {formikForm.errors.username}
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
