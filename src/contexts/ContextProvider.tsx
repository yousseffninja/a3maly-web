import { AuthProvider } from "./auth-context";

const ContextProvider = ({ children }: any) => {
  return (
    <AuthProvider>
        {children}
    </AuthProvider>
  );
};
export default ContextProvider;