import { atom, useRecoilState } from "recoil";

const AuthState = atom({
  key: 'AuthState',
  default: {loggedIn: false, id: "", pwd: ""}
})

export const useAuthState = () => useRecoilState(AuthState);