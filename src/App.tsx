

import { RouterProvider } from "react-router-dom"
import { routes } from "./Routes/routes"
import { QueryClientProvider, QueryClient } from "@tanstack/react-query"

function App() {

  const queryClient = new QueryClient();
  return (

    <QueryClientProvider client={queryClient}>
      <RouterProvider router={routes} />
    </QueryClientProvider>


  )
}

export default App
