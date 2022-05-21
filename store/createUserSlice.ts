import { SetState } from "zustand";

export interface UserSlice {
  data: { name: string; avatar: string };
  setData: (arg1: string, arg2: string) => void;
}

const createUserSlice = (set: SetState<UserSlice>) => ({
  data: { name: "", avatar: "" },
  setData: (name: string, avatar: string) =>
    set(() => ({
      data: { name, avatar },
    })),
});

export default createUserSlice;
