const FutomakiXLSet = () => {
  const menu = {
    title: "FUTOMAKI XL SET",
    count: "36 SZT",
    price: "189 ZŁ",
    ingredients: [
      { name: "Futomaki Salmon mango", quantity: "6 szt" },
      { name: "Futomaki Tuna avocado", quantity: "6 szt" },
      { name: "Futomaki Spicy crab", quantity: "6 szt" },
      { name: "Futomaki Crispy shrimp", quantity: "6 szt" },
      { name: "Futomaki Salmon tatar", quantity: "6 szt" },
      { name: "Futomaki Unagi classic", quantity: "6 szt" },
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

export default FutomakiXLSet;
