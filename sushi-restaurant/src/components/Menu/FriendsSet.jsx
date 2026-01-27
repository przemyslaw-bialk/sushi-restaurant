const FriendsSet = () => {
  const menu = {
    title: "FRIENDS SET",
    count: "32 SZT",
    price: "179 ZŁ",
    ingredients: [
      { name: "Gunkan goma wakame", quantity: "2 szt" },
      { name: "Nigiri łosoś", quantity: "2 szt" },
      { name: "Hosomaki ogórek", quantity: "8 szt" },
      { name: "Futomaki tuna avocado", quantity: "6 szt" },
      { name: "Uramaki dragon", quantity: "8 szt" },
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

export default FriendsSet;
