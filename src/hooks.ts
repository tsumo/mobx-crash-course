import React from "react";
import { autorun } from "mobx";

type useAutorunParams = Parameters<typeof autorun>;

export const useAutorun = (...parameters: useAutorunParams) => {
  React.useEffect(() => autorun(...parameters), [parameters]);
};
