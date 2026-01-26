const NigiriMenu = () => {
  const menu = {
    title: "NIGIRI",
    count: "2 SZT",
    ingredients: [
      { name: "Awokado", price: "16 zł" },
      { name: "Krewetka parzona", price: "27 zł" },
      { name: "Tuńczyk", price: "25 zł" },
      { name: "Łosoś", price: "23 zł" },
      { name: "Łosoś teriyaki", price: "23 zł" },
      { name: "Węgorz", price: "29 zł" },
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

export default NigiriMenu;
