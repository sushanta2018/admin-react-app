import { Suspense } from "react"
import { GlobalLoader } from "./components";
import AppLayout from "./layout/AppLayout";
import AuthLayout from "./layout/AuthLayout";

const App = () => {
  const isLoggedIn = true; // Replace with actual authentication logic
  return (
    <Suspense fallback={<><GlobalLoader /></>}>
      {isLoggedIn ? (
        <AuthLayout />
      ) : (
        <AppLayout />
      )}
    </Suspense>
  )
}

export default App
