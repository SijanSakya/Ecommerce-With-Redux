import Counter from "@/components/homepage/counter/Counter";
import TodaySales from "@/components/homepage/today-sales/TodaySales";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <TodaySales />
      {/* <Counter /> */}
    </div>
  );
}
