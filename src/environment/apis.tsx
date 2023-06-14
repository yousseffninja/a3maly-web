//generate filtersString 
import { Filter } from "@/@types/filter";
import { filtersString } from "@/utils/generate-filter-string";

// Admins API
export const get_admin = (id: string) => `/admins/${id}`;
export const get_admins = (page: number = 1, rowsPerPage: number = 10,  filter?: Filter[]) =>
  `/admins?page=${page + 1}&limit=${rowsPerPage}&${filtersString(filter)}`;
export const suspend_admin = (id: string) => `/admins/${id}`;
export const restore_admin = (id: string) => `/admins/restore/${id}`;
export const add_admin = () => `/admins`;
export const edit_admin = (id: string) => `/admins/${id}`;

// Clients API

export const clients = "/api/v1/auth/register";
export const get_client = (id: string) => `/clients/${id}`;
export const get_clients = (page: number = 1, rowsPerPage: number = 10, filter?: Filter[]) =>
  `/clients?page=${page + 1}&limit=${rowsPerPage}&${filtersString(filter)}`;
export const suspend_client = (id: string) => `/clients/suspend/${id}`;
export const restore_client = (id: string) => `/clients/restore/${id}`;

// Drivers API

export const get_drivers = (page: number = 1, rowsPerPage: number = 10,  filter?: Filter[]) =>
  `/drivers?page=${page + 1}&limit=${rowsPerPage}&${filtersString(filter)}`;
export const suspend_driver = (id: string) => `/drivers/suspend/${id}`;
export const restore_driver = (id: string) => `/drivers/restore/${id}`;

// Vehicles API

export const get_vehicle = (id: string) => `/vehicles/${id}`;

export const get_all_vehicles = (page: number = 1, rowsPerpage: number = 10, filter?: Filter[]) =>
  `/vehicles?page=${
    page + 1
  }&limit=${rowsPerpage}&${filtersString(filter)}`;

export const get_verified_vehicles = (
  page: number = 1,
  rowsPerpage: number = 10,
  filter?: Filter[]
) =>
  `/vehicles?page=${
    page + 1
  }&limit=${rowsPerpage}&${filtersString(filter)}&filters=status=VERIFIED&includes=user&includes=brand&includes=brand_model&includes=images`;
export const get_inreview_vehicles = (
  page: number = 1,
  rowsPerpage: number = 10,
  filter?:Filter[]
) =>
  `/vehicles?page=${
    page + 1
  }&limit=${rowsPerpage}&${filtersString(filter)}&filters=status%3DINREVIEW&includes=user&includes=brand&includes=brand_model&includes=images`;
export const suspend_vehicle = (id: string) => `/vehicles/${id}`;
export const restore_vehicle = (id: string) => `/vehicles/restore/${id}`;
export const get_vehicle_driver = (id: string) => `/drivers/${id}`;

//ٌVerify and Reject Vehicle
export const verify_vehicle = (id: string) => `/vehicles/verify/${id}`;

export const reject_vehicle = (id: string, reason: string) =>
  `/vehicles/reject/${id}?reason=${reason}`;

// Orders API

export const get_orders = (page: number = 1, rowsPerPage: number = 10, filter?: Filter[]) =>
  `/shipping-orders?page=${page + 1}&limit=${rowsPerPage}&${filtersString(filter)}`;
export const get_order = (id: string) => `/shipping-orders/${id}`;
export const cancel_order = (id: string) => `/shipping-orders/cancel/${id}`;

// Contact Messages API

export const get_contact_messages = (page: number = 1, rowsPerPage: number = 10,  filter?:Filter[]) =>
  `/contacts?page=${page + 1}&limit=${rowsPerPage}&${filtersString(filter)}`;

export const get_contact_message = (id: string) => `/contacts/${id}`;

//Notifications API
export const post_Notification = () => "/notifications/send";

//Offices API
export const get_offices = (page: number = 1, rowsPerPage: number = 10, filter?: Filter[]) =>
`/shipping-offices?page=${page + 1}&limit=${rowsPerPage}&${filtersString(filter)}`;
export const suspend_office = (id: string) => `/shipping-offices/${id}`;
export const restore_office = (id: string) => `/shipping-offices/restore/${id}`;
export const add_office = () => "/shipping-offices";
export const get_office = (id: string) =>`/shipping-offices/${id}`;

// Financials API
export const get_transactions = (page: number = 1, rowsPerPage: number = 10, filter?: string) => `/financials/transactions?page=${page + 1}&limit=${rowsPerPage}&filters=${filter!=undefined ?`username<>${filter}&filters=name<>${filter}&filters=phone<>${filter}`: ""}`;
export const get_financials_offices_balance = (page: number = 1, rowsPerPage: number = 10, filter?: string) => `/financials/offices-balance?page=${page+1}&limit=${rowsPerPage}&filters=${filter!=undefined ?`name<>${filter}&filters=phone<>${filter}`: ""}`;
export const get_financials_drivers_balance = (page: number = 1, rowsPerPage: number = 10, filter?: string) => `/financials/drivers-balance?page=${page + 1}&limit=${rowsPerPage}&filters=${filter!=undefined ?`username<>${filter}&filters=name<>${filter}&filters=phone<>${filter}`: ""}`;


