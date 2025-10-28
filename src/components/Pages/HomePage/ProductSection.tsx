"use client";

import { ProductCard } from "@/components/ui/product-card";
import { ProductFilters } from "@/components/ui/product-filters";
import { TProduct } from "@/lib/types";
import clsx from "clsx";
import { LayoutGrid, LayoutPanelLeft, Table } from "lucide-react";
import { JSX, useMemo, useState } from "react";

interface Props {
  products: TProduct[];
}

export const ProductSection = ({ products }: Props) => {
  const [columns, setColumns] = useState<number>(5);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  if (!products || products.length === 0) {
    return (
      <div className="text-center py-12 text-muted-foreground">
        No products available
      </div>
    );
  }

  const categories = useMemo(
    () => Array.from(new Set(products.map((p) => p.category))),
    [products]
  );

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const matchesSearch = p.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const matchesCategory =
        selectedCategory === "all" || p.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [products, searchQuery, selectedCategory]);

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
    <div className="container mx-auto my-6 px-2 ">
      {/* Filters + Grid Toggle */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-4">
        <ProductFilters
          categories={categories}
          searchQuery={searchQuery}
          selectedCategory={selectedCategory}
          onSearchChange={setSearchQuery}
          onCategoryChange={setSelectedCategory}
          onReset={() => {
            setSearchQuery("");
            setSelectedCategory("all");
          }}
        />

        <div className=" hidden lg:flex gap-2">
          {[3, 4, 5].map((num) => (
            <button
              key={num}
              onClick={() => setColumns(num)}
              className={clsx(
                "p-2 rounded border transition-colors duration-200",
                columns === num
                  ? "bg-primary text-white border-primary"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
              )}
            >
              {columnIcons[num]}
            </button>
          ))}
        </div>
      </div>

      {/* Product Grid */}
      <div
        className={clsx(
          "grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-2 lg:gap-4",
          columnClass
        )}
      >
        {filteredProducts.map((product: TProduct) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
