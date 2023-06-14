import { IShippingOffice } from "./shipping-office";

export interface UserType  {
  id: string;
  account: string;
  name: string;
  avatar: string;
  email: string;
  phone: string;
  username: string;
  shipping_office: IShippingOffice;
  roles: string[] | undefined;
};
