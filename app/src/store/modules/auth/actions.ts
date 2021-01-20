/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { action } from 'typesafe-actions';

import {
  AuthActionStep,
  AuthActionTypes,
  CustomerData,
  User,
  UserAddresses,
  UserCard,
} from './types';

export function signInRequest({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  return action(AuthActionTypes.SIGN_IN_REQUEST, {
    email,
    password,
  });
}

export function signInSocialRequest({
  email,
  provider,
  provider_id,
  customer_name,
}: {
  email: string;
  provider: string;
  provider_id: string;
  customer_name: string;
}) {
  return action(AuthActionTypes.SIGN_IN_SOCIAL_REQUEST, {
    email,
    provider,
    provider_id,
    customer_name,
  });
}

export function signInSuccess({ token, user }: { token: string; user: User }) {
  return action(AuthActionTypes.SIGN_IN_SUCCESS, {
    token,
    user,
  });
}

export function signInSocialSuccess({
  token,
  user,
}: {
  token: string;
  user: User;
}) {
  return action(AuthActionTypes.SIGN_IN_SOCIAL_SUCCESS, {
    token,
    user,
  });
}

export function signInFailure(socialRegisterPass?: boolean) {
  return action(AuthActionTypes.SIGN_IN_FAILURE, { socialRegisterPass });
}

export function signOut() {
  return action(AuthActionTypes.SIGNOUT_REQUEST);
}

export function userPaymentRequest(cart_id: string, method: string) {
  return action(AuthActionTypes.PAYMENT_REQUEST, {
    cart_id,
    method,
  });
}

export function userPaymentSelectedRequest(method_id: string, token: string) {
  return action(AuthActionTypes.PAYMENT_SEL_REQUEST, {
    method_id,
    token,
  });
}

export function userAddressRequest(
  cart_id: string,
  address: UserAddresses,
  tokenUser?: string,
) {
  return action(AuthActionTypes.ADDRESS_REQUEST, {
    cart_id,
    address,
    tokenUser,
  });
}

export function userAddressSuccess(address_id: string) {
  return action(AuthActionTypes.ADDRESS_SUCCESS, {
    address_id,
  });
}

export function userAddressSelectedRequest(
  address: UserAddresses,
  token: string,
) {
  return action(AuthActionTypes.ADDRESS_SELECTED_REQUEST, {
    address,
    token,
  });
}

export function userSavePaymentESitef(card: UserCard, token: string) {
  return action(AuthActionTypes.CARD_ESITEF_REQUEST, {
    card,
    token,
  });
}

export function userSavePaymentESitefSuccess(card: UserCard[]) {
  return action(AuthActionTypes.CARD_ESITEF_SUCCESS, {
    card,
  });
}

export function userListPaymentRequest(token: string) {
  return action(AuthActionTypes.CARD_LIST_REQUEST, { token });
}

export function userListPaymentSuccess(card: UserCard[]) {
  return action(AuthActionTypes.CARD_LIST_SUCCESS, { card });
}

export function customerClear() {
  return action(AuthActionTypes.CUSTOMER_CLEAR);
}

export function customerCreateRequest(
  customer: CustomerData,
  step: AuthActionStep,
) {
  return action(AuthActionTypes.CUSTOMER_CREATE_REQUEST, { customer, step });
}

export function customerCreateSuccess(customer: User, step: AuthActionStep) {
  return action(AuthActionTypes.CUSTOMER_CREATE_SUCCESS, { customer, step });
}

export function customerIsExist(message: string) {
  return action(AuthActionTypes.CUSTOMER_IS_EXIST, { message });
}

export function customerStepRequest(step: AuthActionStep) {
  return action(AuthActionTypes.CUSTOMER_SET_STEP, { step });
}

export function customerUpdateRequest(
  customer: CustomerData,
  token: string,
  step: AuthActionStep,
) {
  return action(AuthActionTypes.CUSTOMER_UPDATE_REQUEST, {
    customer,
    token,
    step,
  });
}

export function customerSendMailRequest(name: string, email: string) {
  return action(AuthActionTypes.CUSTOMER_SEND_MAIL, { name, email });
}

export function customerConfirmMailRequest(conf_code: string, email: string) {
  return action(AuthActionTypes.CUSTOMER_CONFIRM_MAIL, { conf_code, email });
}

export function customerConfirmMailSuccess() {
  return action(AuthActionTypes.CUSTOMER_CONFIRM_MAIL_SUCCESS);
}

export function customerCEPRequest(postcode: string) {
  return action(AuthActionTypes.CUSTOMER_CEP_REQUEST, { postcode });
}

export function customerCEPSuccess(address: UserAddresses) {
  return action(AuthActionTypes.CUSTOMER_CEP_SUCCESS, { address });
}

export function customerCEPClear() {
  return action(AuthActionTypes.CUSTOMER_CEP_CLEAR);
}

export function customerSaveAddrewssRequest(
  address: UserAddresses,
  token: string,
) {
  return action(AuthActionTypes.CUSTOMER_CREATE_ADDRESS_REQUEST, {
    address,
    token,
  });
}

export function customerSaveAddrewssSuccess(address: UserAddresses) {
  return action(AuthActionTypes.CUSTOMER_CREATE_ADDRESS_SUCCESS, {
    address,
  });
}
