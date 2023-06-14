import { AuthProvider } from "./auth-context";
import ClientContextProvider from "./client-context";
import ContactMessageContextProvider from "./contact-message-context";
import DriverContextProvider from "./driver-context";
import OrderContextProvider from "./order-context";
import VehicleContextProvider from "./vehicle-context";
import AdminContextProvider from "./admin-context";

const ContextProvider = ({ children }: any) => {
  return (
    <ClientContextProvider>
      <DriverContextProvider>
        <ContactMessageContextProvider>
          <OrderContextProvider>
            <VehicleContextProvider>
              <AdminContextProvider>
                <AuthProvider>{children}</AuthProvider>
              </AdminContextProvider>
            </VehicleContextProvider>
          </OrderContextProvider>
        </ContactMessageContextProvider>
      </DriverContextProvider>
    </ClientContextProvider>
  );
};
export default ContextProvider;
