const CrispySet = () => {
  const menu = {
    title: "CRISPY SET",
    count: "26 SZT",
    price: "139 ZŁ",
    ingredients: [
      { name: "Hosomaki krewetka w panko", quantity: "8 szt" },
      { name: "Futomaki spicy shrimp panko", quantity: "6 szt" },
      { name: "Futomaki tuna tatar tempura", quantity: "6 szt" },
      { name: "Futomaki salmon mango almond", quantity: "6 szt" },
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

export default CrispySet;
