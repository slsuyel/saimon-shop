"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { X } from "lucide-react";

interface ProductFiltersProps {
  categories: string[];
  searchQuery: string;
  selectedCategory: string;
  onSearchChange: (query: string) => void;
  onCategoryChange: (category: string) => void;
  onReset: () => void;
}

export function ProductFilters({
  categories,
  searchQuery,
  selectedCategory,
  onSearchChange,
  onCategoryChange,
  onReset,
}: ProductFiltersProps) {
  const hasFilters =
    searchQuery || (selectedCategory && selectedCategory !== "all");

  return (
    <div className="flex  items-start md:items-center gap-4 w-full md:w-auto flex-1">
      {/* Search */}
      <div className="flex-1 min-w-[180px] w-full">
        <Input
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full"
        />
      </div>

      {/* Category */}
      <div className="w-full md:w-48">
        <Select value={selectedCategory} onValueChange={onCategoryChange}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="All categories" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All categories</SelectItem>
            {categories.map((cat) => (
              <SelectItem key={cat} value={cat}>
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Reset Button */}
      {hasFilters && (
        <Button
          variant="outline"
          size="sm"
          onClick={onReset}
          className="gap-2 h-10 mt-2 md:mt-0 hover:bg-red-50 hover:text-red-600"
        >
          <X className="w-4 h-4" />
          Reset
        </Button>
      )}
    </div>
  );
}
