const PankoSet = () => {
  const menu = {
    title: "PANKO SET",
    count: "26 SZT",
    price: "149 ZŁ",
    ingredients: [
      { name: "Futomaki crispy shrimp", quantity: "6 szt" },
      { name: "Uramaki crispy rainbow", quantity: "8 szt" },
      { name: "Futomaki salmon classic panko", quantity: "6 szt" },
      { name: "Futomaki salmon tatar panko", quantity: "6 szt" },
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

export default PankoSet;
