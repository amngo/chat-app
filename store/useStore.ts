import create from "zustand";
import { devtools } from "zustand/middleware";
import createUserSlice, { UserSlice } from "./createUserSlice";

export type MyState = UserSlice;

const useStore = create<MyState>()(
  devtools((set) => ({ ...createUserSlice(set) })),
);

export default useStore;
