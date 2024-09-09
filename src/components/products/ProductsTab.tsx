import { getAllProducts } from "@/services/product";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Product } from "@/types/product";
import { useEffect, useState } from "react";
import Empty from "./Empty";
import ProductItem from "./ProductItem";

type Tab = {
  title: string;
  value: string;
  products: Product[];
};

const ProductsTab = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const getProducts = async () => {
    const items: Product[] = await getAllProducts();
    return setProducts(items);
  };
  useEffect(() => {
    const dataLoading = async () => {
      await getProducts();
    };
    dataLoading();
  });

  const tabs: Tab[] = [
    {
      title: "Sushi",
      value: "sushi",
      products: products.filter((item) => item.category === "sushi"),
    },
    {
      title: "Temaki",
      value: "temaki",
      products: products.filter((item) => item.category === "temaki"),
    },
    {
      title: "Combinados",
      value: "pack",
      products: products.filter((item) => item.category === "pack"),
    },
    {
      title: "Bebidas",
      value: "beverage",
      products: products.filter((item) => item.category === "beverage"),
    },
  ];

  return (
    <Tabs defaultValue={`${tabs[0].value}`}>
      <TabsList className="flex">
        {tabs.map((item) => (
          <TabsTrigger key={item.value} value={item.value} className="flex-1">
            {item.title}
          </TabsTrigger>
        ))}
      </TabsList>

      {tabs.map((item) => (
        <TabsContent key={item.value} value={item.value} className="mt-6">
          {item.products.length > 0 && (
            <div className="grid gap-5 grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
              {item.products.map((product) => (
                <ProductItem key={product.id} item={product} />
              ))}
            </div>
          )}
          {item.products.length === 0 && <Empty />}
        </TabsContent>
      ))}
      {/* <TabsContent value="tab1">Conteúdo da Tab 1</TabsContent>
      <TabsContent value="tab2">Conteúdo da Tab 2</TabsContent> */}
    </Tabs>
  );
};

export default ProductsTab;
