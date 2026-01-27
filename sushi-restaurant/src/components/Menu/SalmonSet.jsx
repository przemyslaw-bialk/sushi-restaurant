const SalmonSet = () => {
  const menu = {
    title: "SALMON SET",
    count: "32 SZT",
    price: "159 ZŁ",
    ingredients: [
      { name: "Nigiri łosoś", quantity: "2 szt" },
      { name: "Gunkan tatar łosoś", quantity: "2 szt" },
      { name: "Hosomaki łosoś", quantity: "8 szt" },
      { name: "Futomaki salmon teriyaki", quantity: "6 szt" },
      { name: "Uramaki salmon x mango", quantity: "8 szt" },
      { name: "Futomaki salmon panko", quantity: "6 szt" },
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

export default SalmonSet;
