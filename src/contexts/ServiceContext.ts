import React from "react";
import { IServiceContext } from "./IServiceContext";
import { appContainer } from "../ioc/inversifyConfig";

export const ServiceContext = React.createContext<IServiceContext>({
    serviceContainer: appContainer
});
