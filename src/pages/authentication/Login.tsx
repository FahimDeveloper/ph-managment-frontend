import { Button, Form, Input } from "antd";
import { useLoginMutation } from "../../redux/features/auth/authApi";

const Login = () => {
  const [login] = useLoginMutation();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onFinish = (values: any) => {
    login(values);
  };
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="w-1/3 border border-solid p-5 rounded-md border-gray-400 space-y-3">
        <h3 className="text-3xl font-sans font-semibold text-center">Login</h3>
        <Form
          initialValues={{
            id: "A-0001",
            password: "admin12345",
          }}
          onFinish={onFinish}
          layout="vertical"
          //   onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Id"
            name="id"
            className="w-full"
            rules={[{ required: true, message: "Please input your id!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            className="w-full"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
