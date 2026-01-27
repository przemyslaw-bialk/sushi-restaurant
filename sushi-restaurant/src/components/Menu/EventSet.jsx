const EventSet = () => {
  const menu = {
    title: "EVENT SET",
    count: "68 SZT",
    price: "349 ZŁ",
    ingredients: [
      { name: "Gunkan goma wakame", quantity: "2 szt" },
      { name: "Gunkan tosago", quantity: "2 szt" },
      { name: "Nigiri łosoś", quantity: "2 szt" },
      { name: "Nigiri tuńczyk", quantity: "2 szt" },
      { name: "Nigiri łosoś teriyaki", quantity: "2 szt" },
      { name: "Hosomaki kanpyo", quantity: "8 szt" },
      { name: "Hosomaki awokado", quantity: "8 szt" },
      { name: "Hosomaki sałatka krabowa", quantity: "8 szt" },
      { name: "Futomaki shrimp classic", quantity: "6 szt" },
      { name: "Futomaki salmon mango", quantity: "6 szt" },
      { name: "Uramaki crispy tuna tatar", quantity: "8 szt" },
      { name: "Uramaki dragon", quantity: "8 szt" },
      { name: "Futomaki spicy tuna almond", quantity: "6 szt" },
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

export default EventSet;
