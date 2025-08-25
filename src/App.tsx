import Header from "./components/header";
import Footer from "./components/footer";
import { Outlet } from "react-router";
function App() {
  return (
    <div className="flex flex-col min-h-screen bg-[url(src/assets/fondoblack.png)] gap-5 bg-no-repeat bg-cover">
      <Header />
      <main className="grow max-w-7xl mx-auto">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
