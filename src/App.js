import "./App.css";
import { Box, Flex } from "@chakra-ui/react";

import AppRoutes from "./components/routes/AppRoutes";
import Provider from "./components/Providers";
import { ToastContainer } from "react-toastify";
import { QueryClient, QueryClientProvider } from "react-query";

// Creating an instance of the query client
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider>
        <Box fontFamily="'Poppins', sans-serif">
          <ToastContainer />
          <AppRoutes />
        </Box>
      </Provider>
    </QueryClientProvider>
  );
}

export default App;
