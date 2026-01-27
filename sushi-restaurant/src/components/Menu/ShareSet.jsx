const ShareSet = () => {
  const menu = {
    title: "SHARE SET",
    count: "40 SZT",
    price: "199 ZŁ",
    ingredients: [
      { name: "Gunkan tatar tuńczyk", quantity: "2 szt" },
      { name: "Nigiri łosoś opalany", quantity: "2 szt" },
      { name: "Hosomaki krewetka w panko", quantity: "8 szt" },
      { name: "Futomaki vege cream cheese", quantity: "6 szt" },
      { name: "Uramaki salmon x tamago", quantity: "8 szt" },
      { name: "Uramaki crab classic", quantity: "8 szt" },
      { name: "Futomaki crispy shrimp almond", quantity: "6 szt" },
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

export default ShareSet;
