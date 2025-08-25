import Header from "./components/header";
import Footer from "./components/footer";
import { Outlet } from "react-router";
function App() {
  return (
    <div className="flex flex-col min-h-screen  gap-5 bg-shadow-pop-a0 ">
      <Header />
      <main className="grow max-w-7xl mx-auto">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
