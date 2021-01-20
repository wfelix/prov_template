import { AuthState, AuthAction, AuthActionTypes } from './types';

const initialState: AuthState = {
  loadingSignInRequest: false,
  isSignedIn: false,
  error: false,
  token: '',
  user: {
    data: {
      first_name: '',
      avatar: '',
    },
  },
};

export default function auth(
  state = initialState,
  action: AuthAction,
): AuthState {
  switch (action.type) {
    case AuthActionTypes.SIGN_IN_REQUEST:
      return {
        ...state,
        loadingSignInRequest: true,
      };
    case AuthActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        loadingSignInRequest: false,
        isSignedIn: true,
        token: action.payload.token,
        user: action.payload.user,
      };
    case AuthActionTypes.SIGN_IN_FAILURE:
      return {
        ...state,
        error: true,
        loadingSignInRequest: false,
      };
    case AuthActionTypes.SIGN_IN_SOCIAL_REQUEST:
      return {
        ...state,
        loadingSignInRequest: true,
      };

    case AuthActionTypes.SIGN_IN_SOCIAL_SUCCESS:
      return {
        ...state,
        loadingSignInRequest: false,
        isSignedIn: true,
        token: action.payload.token,
        user: action.payload.user,
      };
    case AuthActionTypes.SIGNOUT_REQUEST:
      console.log('AuthActionTypes.SIGN_OUT:', state);
      return initialState;
    case AuthActionTypes.PAYMENT_REQUEST:
      return {
        ...state,
        loadingSignInRequest: true,
        error: true,
      };
    case AuthActionTypes.ADDRESS_REQUEST:
      return {
        ...state,
        error: true,
      };
    case AuthActionTypes.ADDRESS_SUCCESS:
      console.log(
        'AuthActionTypes.ADDRESS_SUCCESS:',
        action.payload.address_id,
      );

      if (state.user.addresses) {
        state.user.addresses.forEach(address => {
          if (address.id.toString() === action.payload.address_id) {
            address.selected = 1;
          } else {
            address.selected = 0;
          }
        });
      }
      return {
        ...state,
        user: {
          ...state.user,
          addresses: state.user.addresses,
        },
        error: false,
      };
    case AuthActionTypes.CARD_ESITEF_REQUEST:
      return {
        ...state,
        error: true,
      };
    case AuthActionTypes.CARD_LIST_REQUEST:
      return {
        ...state,
        error: true,
      };
    case AuthActionTypes.CARD_LIST_SUCCESS:
      console.log('AuthActionTypes.CARD_LIST_SUCCESS:', action.payload.card);
      return {
        ...state,
        user: { ...state.user, methods: action.payload.card },
        error: true,
      };
    case AuthActionTypes.CARD_ESITEF_SUCCESS:
      console.log('AuthActionTypes.CARD_ESITEF_SUCCESS:', action.payload.card);
      return {
        ...state,
        user: { ...state.user, methods: action.payload.card },
        error: true,
      };
    case AuthActionTypes.CUSTOMER_CLEAR:
      console.log('AuthActionTypes.CUSTOMER_CLEAR: ');
      return {
        ...state,
        error: false,
        step: undefined,
        message: '',
      };
    case AuthActionTypes.CUSTOMER_CREATE_REQUEST:
      console.log('AuthActionTypes.CUSTOMER_CREATE_REQUEST: ');
      return {
        ...state,
        error: false,
        step: undefined,
        message: '',
      };
    case AuthActionTypes.CUSTOMER_IS_EXIST:
      console.log(
        'AuthActionTypes.CUSTOMER_IS_EXIST: ',
        action.payload.message,
      );
      return {
        ...state,
        error: true,
        step: undefined,
        message: action.payload.message,
      };
    case AuthActionTypes.CUSTOMER_CREATE_SUCCESS:
      console.log(
        'AuthActionTypes.CUSTOMER_CREATE_SUCCESS: ',
        action.payload.customer.data,
      );
      return {
        ...state,
        mailConfirm: false,
        error: false,
        step: action.payload.step,
        token: action.payload.customer.token
          ? action.payload.customer.token
          : state.token,
        message: '',
        user: { data: action.payload.customer.data },
      };
    case AuthActionTypes.CUSTOMER_SET_STEP:
      console.log('AuthActionTypes.CUSTOMER_SET_STEP: ');
      return {
        ...state,
        error: false,
        step: action.payload.step,
        message: '',
      };

    case AuthActionTypes.CUSTOMER_CONFIRM_MAIL:
      console.log('AuthActionTypes.CUSTOMER_CONFIRM_MAIL: ');
      return {
        ...state,
        mailConfirm: false,
      };
    case AuthActionTypes.CUSTOMER_CONFIRM_MAIL_SUCCESS:
      console.log('AuthActionTypes.CUSTOMER_CONFIRM_MAIL_SUCCESS: ');
      return {
        ...state,
        mailConfirm: true,
        isSignedIn: true,
      };

    case AuthActionTypes.CUSTOMER_CEP_REQUEST:
      return {
        ...state,
        address: undefined,
      };

    case AuthActionTypes.CUSTOMER_CEP_CLEAR:
      return {
        ...state,
        address: undefined,
      };

    case AuthActionTypes.CUSTOMER_CEP_SUCCESS:
      console.log('AuthActionTypes.CUSTOMER_CEP_SUCCESS: ');
      return {
        ...state,
        address: action.payload.address,
      };

    case AuthActionTypes.CUSTOMER_CREATE_ADDRESS_SUCCESS:
      console.log('AuthActionTypes.CUSTOMER_CREATE_ADDRESS_SUCCESS: ');

      // const addressList: UserAddresses[{} as UserAddresses] = state.user.addresses;
      if (state.user.addresses) {
        state.user.addresses.push(action.payload.address);
      }
      return {
        ...state,
        user: {
          ...state.user,
          addresses: state.user.addresses,
        },
        error: false,
      };
    default:
      return state;
  }
}
