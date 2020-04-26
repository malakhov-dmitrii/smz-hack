import { handleActions } from 'redux-actions';
import { ConfigActions } from './Config.actions';

export interface ConfigState {
  role: 'tutor' | 'user' | null;
  auth: any;
  data: any;
  isLoading: boolean;
  error: boolean;
}

export const initialState: ConfigState = {
  auth: JSON.parse(localStorage.getItem('auth') || 'null'),
  role: null,
  data: null,
  isLoading: false,
  error: false,
};

export default handleActions(
  {
    // --------------- PENDING --------------------------
    [ConfigActions.ToggleRole](state: any, { payload }) {
      return {
        ...state,
        role: payload,
        isLoading: true,
        error: false,
      };
    },
    [ConfigActions.Login](state: any, { payload }) {
      localStorage.setItem('auth', JSON.stringify({ log: payload.log, pass: payload.pass }));
      
      window.location.href = "/profile";
      return {
        ...state,
        auth: payload,
        isLoading: true,
        error: false,
      };
    },
    [ConfigActions.Logout](state: any) {
      localStorage.removeItem('auth');
      // @ts-ignore
      window.location.href = "";
      return {
        ...state,
        auth: null,
        isLoading: true,
        error: false,
      };
    },
  },
  initialState,
);
