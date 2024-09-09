import { Suspense } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TabsSkeleton from "./components/products/TabsSkeleton";
import ProductsTab from "./components/products/ProductsTab";

function App() {
  return (
    <div className=" w-full max-w-4xl mx-auto p-5">
      <Header />
      <div className="mx-3">
        <Suspense fallback={<TabsSkeleton />}>
          <ProductsTab />
        </Suspense>
      </div>
      <Footer />
    </div>
  );
}

export default App;
