import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type AuthAction = ActionType<typeof actions>;

/**
 * Action types
 */
export enum AuthActionTypes {
  SIGN_IN_REQUEST = '@auth/SIGN_IN_REQUEST',
  SIGN_IN_SUCCESS = '@auth/SIGN_IN_SUCCESS',
  SIGN_IN_FAILURE = '@auth/SIGN_IN_FAILURE',
  SIGN_IN_SOCIAL_REQUEST = '@auth/SIGN_IN_SOCIAL_REQUEST',
  SIGN_IN_SOCIAL_FAILURE = '@auth/SIGN_IN_SOCIAL_FAILURE',
  SIGN_IN_SOCIAL_SUCCESS = '@auth/SIGN_IN_SOCIAL_SUCCESS',
  SIGNOUT_REQUEST = '@auth/SIGNOUT_REQUEST',
  PAYMENT_REQUEST = '@auth/PAYMENT_REQUEST',
  PAYMENT_SEL_REQUEST = '@auth/PAYMENT_SEL_REQUEST',
  ADDRESS_REQUEST = '@auth/ADDRESS_REQUEST',
  ADDRESS_SUCCESS = '@auth/ADDRESS_SUCCESS',
  ADDRESS_SELECTED_REQUEST = '@auth/ADDRESS_SELECTED_REQUEST',
  CARD_ESITEF_REQUEST = '@auth/CARD_ESITEF_REQUEST',
  CARD_ESITEF_SUCCESS = '@auth/CARD_ESITEF_SUCCESS',
  CARD_LIST_REQUEST = '@auth/CARD_LIST_REQUEST',
  CARD_LIST_SUCCESS = '@auth/CARD_LIST_SUCCESS',
  CUSTOMER_CLEAR = '@auth/CUSTOMER_CLEAR',
  CUSTOMER_SET_STEP = '@auth/CUSTOMER_SET_STEP',
  CUSTOMER_CREATE_REQUEST = '@auth/CUSTOMER_CREATE_REQUEST',
  CUSTOMER_CREATE_SUCCESS = '@auth/CUSTOMER_CREATE_SUCCESS',
  CUSTOMER_IS_EXIST = '@auth/CUSTOMER_IS_EXIST',
  CUSTOMER_UPDATE_REQUEST = '@auth/CUSTOMER_UPDATE_REQUEST',
  CUSTOMER_UPDATE_SUCCESS = '@auth/CUSTOMER_UPDATE_SUCCESS',
  CUSTOMER_SEND_MAIL = '@auth/CUSTOMER_SEND_MAIL',
  CUSTOMER_CONFIRM_MAIL = '@auth/CUSTOMER_CONFIRM_MAIL',
  CUSTOMER_CONFIRM_MAIL_SUCCESS = '@auth/CUSTOMER_CONFIRM_MAIL_SUCCESS',
  CUSTOMER_CEP_REQUEST = '@auth/CUSTOMER_CEP_REQUEST',
  CUSTOMER_CEP_SUCCESS = '@auth/CUSTOMER_CEP_SUCCESS',
  CUSTOMER_CEP_CLEAR = '@auth/CUSTOMER_CEP_CLEAR',
  CUSTOMER_CREATE_ADDRESS_REQUEST = '@auth/CUSTOMER_CREATE_ADDRESS_REQUEST',
  CUSTOMER_CREATE_ADDRESS_SUCCESS = '@auth/CUSTOMER_CREATE_ADDRESS_SUCCESS',
}

export interface UserAddresses {
  shipping_method?: 'shipment' | 'store';
  cart_id?: string;
  address_type?: 'customer' | 'guest';
  address_id: string;
  name?: string;

  id: number;
  address_name?: string;
  first_name?: string;
  last_name?: string;
  company_name?: string;
  address?: string;
  number?: string;
  neighborhood?: string;
  complement?: string;
  city?: string;
  state?: string;
  country?: string;
  country_name?: string;
  postcode?: string;
  reference?: string;
  phone_area_code?: string;
  phone?: string;
  selected?: number;
}

export interface User {
  data: CustomerData;
  token?: string;
  avatar?: string;
  addresses?: UserAddresses[];
  methods?: UserCard[];
}

export interface UserCard {
  id?: number;
  selected?: number;
  tef_nita?: string;
  tef_token?: string;
  card_number: string;
  expiry_date: string;
  authorizer_id: string;
  merchant_usn: string;
  customer_id: string;
  full_name: string;
}

export interface CustomerData {
  first_name?: string;
  last_name?: string;
  email?: string;
  password?: string;
  password_confirm?: string;

  cpf_cnpj?: string;
  birth?: string;
  date_of_birth?: string;
  phone_mobile?: string;
  genre?: string;
  avatar?: string;

  customer_id?: string;
  gender?: string;
  phone?: string;
  new_password?: string;
  new_password_confirmation?: string;
  dataRes?: CustomerData;
  conf_code?: string;
  id?: string;
}

export enum AuthActionStep {
  CST_STEP_01 = 'CST_STEP_01',
  CST_STEP_02 = 'CST_STEP_02',
  CST_STEP_03 = 'CST_STEP_03',
  CST_STEP_04 = 'CST_STEP_04',
}

export interface AuthState {
  readonly loadingSignInRequest: boolean;
  readonly isSignedIn: boolean;
  readonly error: boolean;
  readonly message?: string;
  readonly token: string;
  readonly user: User;
  readonly step?: AuthActionStep;
  readonly mailConfirm?: boolean;
  readonly address?: UserAddresses;
  readonly socialRegisterPass?: boolean;
}
