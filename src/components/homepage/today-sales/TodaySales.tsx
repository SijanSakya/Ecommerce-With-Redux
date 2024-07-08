"use client";
import { useFetch } from "@/app/hooks/useFetch";
import ProductCard from "@/components/shared-components/cards/ProductCard/ProductCard";

const TodaySales = () => {
  const tableName = "productList";
  const { data, error, loading } = useFetch({ tableName });

  console.log(data, "fetch");

  return (
    <div>
      <p className="font-semibold text-xl my-5">Flash Sales</p>
      {!loading && (
        <>
          {data && (
            <div className="flex gap-3 ">
              {data.map((data) => (
                <div key={data.id}>
                  <ProductCard productDetail={data} />
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default TodaySales;
