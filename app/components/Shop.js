"use client";
import Card from "./card";
export default function Shop() {
  const shop = [
    {
      title: "KFC Coupon",
      description: "Any bucket 20% off",
      price: "300",
      imageURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYfj09vfWTGPoHmHwxj-nloAjfOibY3MgorHeE78ikpQ&s",
    },
    {
      title: "Electronics Medal",
      description: "All the day, all the night",
      price: "5000",
      imageURL:
        "https://www.zuken.com/us/wp-content/uploads/sites/12/2018/11/chip-on-board-ar-2018-1510x731.jpg",
    },
  ];
  return (
    <div className="grid w-full grid-cols-2 gap-2">
      {shop.map((shopitem) => {
        return <Card key={shopitem.title} shopitem={shopitem} />;
      })}
    </div>
  );
}
