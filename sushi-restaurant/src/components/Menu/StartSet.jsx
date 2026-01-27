const StartSet = () => {
  const menu = {
    title: "START SET",
    count: "16 SZT",
    price: "79 ZŁ",
    ingredients: [
      { name: "Nigiri tamago", quantity: "2 szt" },
      { name: "Futomaki tuna classic", quantity: "6 szt" },
      { name: "Uramaki teriyaki salmon", quantity: "8 szt" },
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

export default StartSet;
