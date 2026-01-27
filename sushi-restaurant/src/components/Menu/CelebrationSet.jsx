const CelebrationSet = () => {
  const menu = {
    title: "CELEBRATION SET",
    count: "86 SZT",
    price: "439 ZŁ",
    ingredients: [
      { name: "Gunkan tatar łosoś", quantity: "2 szt" },
      { name: "Gunkan tatar tuńczyk", quantity: "2 szt" },
      { name: "Nigiri krewetka parzona", quantity: "2 szt" },
      { name: "Nigiri łosoś", quantity: "2 szt" },
      { name: "Nigiri awokado", quantity: "2 szt" },
      { name: "Nigiri węgorz", quantity: "2 szt" },
      { name: "Hosomaki ogórek", quantity: "8 szt" },
      { name: "Hosomaki oshinko", quantity: "8 szt" },
      { name: "Hosomaki tuńczyk", quantity: "8 szt" },
      { name: "Hosomaki łosoś", quantity: "8 szt" },
      { name: "Futomaki salmon classic", quantity: "6 szt" },
      { name: "Futomaki crispy shrimp", quantity: "6 szt" },
      { name: "Futomaki spicy tuna", quantity: "6 szt" },
      { name: "Uramaki crab classic", quantity: "8 szt" },
      { name: "Uramaki crispy rainbow", quantity: "8 szt" },
      { name: "Uramaki double salmon", quantity: "8 szt" },
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

export default CelebrationSet;
