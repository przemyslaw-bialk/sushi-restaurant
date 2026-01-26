const HosomakiMenu = () => {
  const menu = {
    title: "HOSOMAKI",
    count: "8 SZT",
    ingredients: [
      { name: "Ogórek", price: "17 zł" },
      { name: "Awokado", price: "19 zł" },
      { name: "Oshinko", price: "17 zł" },
      { name: "Kanpyo", price: "17 zł" },
      { name: "Spicy tempura", price: "16 zł" },
      { name: "Krewetka parzona", price: "28 zł" },
      { name: "Krewetka w panko", price: "24 zł" },
      { name: "Tuńczyk", price: "23 zł" },
      { name: "Łosoś", price: "23 zł" },
      { name: "Łosoś pieczony", price: "23 zł" },
      { name: "Surimi", price: "19 zł" },
      { name: "Węgorz", price: "28 zł" },
    ],
  };

  return (
    <div className="p-5">
      <h2 className="text-xl font-semibold text-sushiBrand">
        {menu.title}
        <span className="ml-2 text-white">{menu.count}</span>
      </h2>

      <ul className="mt-4 font-thin text-sushiMain">
        {menu.ingredients.map((item, i) => (
          <li key={i}>
            <span className="font-normal">{item.name}</span>
            {" – "}
            <span className="font-extralight">{item.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HosomakiMenu;
