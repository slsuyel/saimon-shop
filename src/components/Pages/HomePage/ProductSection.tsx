"use client";

import { ProductCard } from "@/components/ui/product-card";
import { TProduct } from "@/lib/types";
import clsx from "clsx";
import { LayoutGrid, LayoutPanelLeft, Table } from "lucide-react";
import { JSX, useState } from "react";

interface Props {
  products: TProduct[];
}

export const ProductSection = ({ products }: Props) => {
  const [columns, setColumns] = useState<number>(4);

  if (!products || products.length === 0) {
    return (
      <div className="text-center py-12 text-muted-foreground">
        No products available
      </div>
    );
  }

  const columnClass = clsx({
    "lg:grid-cols-3": columns === 3,
    "lg:grid-cols-4": columns === 4,
    "lg:grid-cols-5": columns === 5,
  });

  const columnIcons: Record<number, JSX.Element> = {
    3: <LayoutPanelLeft size={20} />,
    4: <LayoutGrid size={20} />,
    5: <Table size={20} />,
  };

  return (
    <div className=" container  mx-auto  my-4 md:my-6 lg:my-8 px-2 lg:px-4">
      <div className=" hidden lg:flex justify-end gap-2 mb-4">
        {[3, 4, 5].map((num) => (
          <button
            key={num}
            onClick={() => setColumns(num)}
            className={`p-2 rounded border ${
              columns === num
                ? "bg-primary text-white"
                : "bg-white text-gray-700"
            }`}
          >
            {columnIcons[num]}
          </button>
        ))}
      </div>

      <div
        className={clsx(
          "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6",
          columnClass
        )}
      >
        {products.map((product: TProduct) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

// "use client";

// import { useAllProductsQuery } from "@/components/Redux/RTK/productApi";
// import { ProductCard } from "@/components/ui/product-card";

// export const ProductSection = () => {
//   // RTK Query call
//   const {
//     data: products,
//     isLoading,
//     isError,
//   } = useAllProductsQuery({ limit: 20 });

//   if (isLoading) {
//     return (
//       <div className="text-center py-12 text-muted-foreground">
//         Loading products...
//       </div>
//     );
//   }

//   if (isError || !products) {
//     return (
//       <div className="text-center py-12 text-destructive">
//         Failed to load products
//       </div>
//     );
//   }

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//       {products.map((product: any) => (
//         <ProductCard key={product.id} product={product} />
//       ))}
//     </div>
//   );
// };

// app/components/Pages/HomePage/ProductSection.tsx
