const HosomakiSet = () => {
  const menu = {
    title: "HOSOMAKI SET",
    count: "40 SZT",
    price: "99 ZŁ",
    ingredients: [
      { name: "Hosomaki ogórek", quantity: "8 szt" },
      { name: "Hosomaki spicy tempura", quantity: "8 szt" },
      { name: "Hosomaki tuńczyk", quantity: "8 szt" },
      { name: "Hosomaki łosoś", quantity: "8 szt" },
      { name: "Hosomaki krewetka w panko", quantity: "8 szt" },
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

export default HosomakiSet;
