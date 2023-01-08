import { FC, ReactNode } from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

interface IApiProviderProps {
    children: ReactNode;
}

const queryClient = new QueryClient();

const ApiProvider: FC<IApiProviderProps> = ({ children }) => (
    <QueryClientProvider client={queryClient}>{children}
    <ReactQueryDevtools />
    </QueryClientProvider>
);

export default ApiProvider;