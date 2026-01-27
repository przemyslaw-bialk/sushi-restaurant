const VegeSet = () => {
  const menu = {
    title: "VEGE SET",
    count: "32 SZT",
    price: "129 ZŁ",
    ingredients: [
      { name: "Nigiri tamago", quantity: "2 szt" },
      { name: "Gunkan tosago", quantity: "2 szt" },
      { name: "Hosomaki ogórek", quantity: "8 szt" },
      { name: "Futomaki vege cream cheese", quantity: "6 szt" },
      { name: "Uramaki vege", quantity: "8 szt" },
      { name: "Futomaki vege tempura", quantity: "6 szt" },
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

export default VegeSet;
