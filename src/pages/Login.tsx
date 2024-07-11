import { Button, Row } from "antd";
import { FieldValues, useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/autApi";
import { useAppDispatch } from "../redux/hooks";
import { setUser, TUser } from "../redux/features/auth/authSice";
import { verifyToken } from "../utils/varifyToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import PHForm from "../form/PHForm";
import PHInput from "../form/PHInput";

const Login = () => {
  const [login] = useLoginMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const defaultValues = {
    userId: "A-0002",
    password: "admin123",
  };
  const onSubmit = async (data: FieldValues) => {
    const tostId = toast.loading("loggin in");
    try {
      const res = await login(data).unwrap();
      const user = verifyToken(res.data.accessToken) as TUser;
      dispatch(setUser({ user: user, token: res.data.accessToken }));
      toast.success("Login success", { id: tostId, duration: 3000 });
      navigate(`/${user.role}/dashboard`);
    } catch (err) {
      toast.error("Something Went Worng!", { id: tostId, duration: 3000 });
    }
  };

  return (
    <Row justify="center" align="middle" style={{ height: "100vh" }}>
      <PHForm onSubmit={onSubmit} defaultValues={defaultValues}>
        <PHInput type={"text"} name={"id"} label={"ID"} />
        <PHInput type={"text"} name={"password"} label={"Password"} />
        <Button htmlType="submit">Login</Button>
      </PHForm>
    </Row>
  );
};

export default Login;
