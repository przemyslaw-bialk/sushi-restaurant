const PartySet = () => {
  const menu = {
    title: "PARTY SET",
    count: "54 SZT",
    price: "229 ZŁ",
    ingredients: [
      { name: "Nigiri tamago", quantity: "2 szt" },
      { name: "Nigiri węgorz", quantity: "2 szt" },
      { name: "Hosomaki tuńczyk", quantity: "8 szt" },
      { name: "Hosomaki łosoś", quantity: "8 szt" },
      { name: "Futomaki crispy shrimp", quantity: "6 szt" },
      { name: "Futomaki spicy crab", quantity: "6 szt" },
      { name: "Uramaki crispy tuna", quantity: "8 szt" },
      { name: "Uramaki spicy salmon", quantity: "8 szt" },
      { name: "Futomaki spicy shrimp panko", quantity: "6 szt" },
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

export default PartySet;
