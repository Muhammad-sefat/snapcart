// app/redux/provider.js (or provider.tsx)

"use client";

import { Provider } from "react-redux";
import store from "./store";

export function ReduxProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
