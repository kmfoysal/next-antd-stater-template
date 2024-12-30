import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider } from "antd";

const Providers = ({ children }) => {
  return (
    <AntdRegistry>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#24377C",
          },
        }}
      >
        {/* <AuthProvider>{children}</AuthProvider> */}
        {children}
      </ConfigProvider>
    </AntdRegistry>
  );
};

export default Providers;
