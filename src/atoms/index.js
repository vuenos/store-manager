import { atom, useRecoilState } from "recoil";

const AuthState = atom({
  key: 'AuthState',
  default: {loggedIn: false, email: "", password: ""}
})

export const useAuthState = () => useRecoilState(AuthState);