const VeganSet = () => {
  const menu = {
    title: "VEGAN SET",
    count: "26 SZT",
    price: "99 ZŁ",
    ingredients: [
      { name: "Gunkan wakame", quantity: "2 szt" },
      { name: "Nigiri awokado", quantity: "2 szt" },
      { name: "Hosomaki spicy tempura", quantity: "8 szt" },
      { name: "Futomaki vegan tempura", quantity: "6 szt" },
      { name: "Uramaki vegan panko", quantity: "8 szt" },
    ],
  };

  return (
    <div className="p-5">
      <h2 className="text-xl font-semibold text-sushiBrand">
        {menu.title}
        <span className="ml-2 text-sushiBrand">{menu.count}</span>
        <span className="ml-2 text-sushiMain">- {menu.price}</span>
      </h2>

      <ul className="mt-4 font-thin text-sushiMain">
        {menu.ingredients.map((item, i) => (
          <li key={i}>
            <span className="font-normal">{item.name}</span>
            {" – "}
            <span className="font-extralight">{item.quantity}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VeganSet;
