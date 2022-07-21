export interface IUserParams {
  page?: number;
  count?: number;
  search: string;
  memberships: string[];
  types: number[];
  status: string[];
  country: string;
  state: string;
  address: string;
  phone: string;
  date_type?: string;
  date_range?: string[];
  sort?: string;
  order_by?: string;
  tz?: number;
}
export interface CreateUserParams {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  access_level: string;
  forceChangePassword?: boolean;
  membership_id?: string;
  paymentRailsType?: string;
  taxExempt?: boolean;
}

export interface UserOrder {
  order_as_buyer: number;
  order_as_buyer_total: number;
}

export interface IUser {
  access_level: string;
  created: number;
  fistName: string;
  lastName: string;
  last_login: number;
  order: UserOrder;
  product: number;
  profile_id: number;
  storeName: string;
  vendor: string;
  vendor_id: string;
  wishlist: string;
}
