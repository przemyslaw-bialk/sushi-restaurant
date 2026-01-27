const FutomakiAlmondMenu = () => {
  const menu = {
    title: "FUTOMAKI W MIGDAŁACH",
    count: "6 SZT",
    ingredients: [
      {
        name: "Salmon mango almond",
        price: "45 zł",
        description: "(Łosoś, mango, ogórek, serek)",
      },
      {
        name: "Spicy tuna almond",
        price: "45 zł",
        description: "(Tuńczyk, ogórek, spicy mayo)",
      },
      {
        name: "Crispy shrimp almond",
        price: "35 zł",
        description: "(Krewetka w panko, mango mayo, awokado)",
      },
    ],
  };

  return (
    <div className="p-5">
      <h2 className="text-xl font-semibold text-sushiBrand">
        {menu.title}
        <span className="ml-2 text-sushiMain">{menu.count}</span>
      </h2>

      <ul className="mt-4 font-thin text-sushiMain">
        {menu.ingredients.map((item, i) => (
          <li key={i}>
            <span className="font-normal">{item.name}</span>
            {" – "}
            <span className="font-extralight">{item.price}</span>{" "}
            <p className="italic text-gray-300">{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FutomakiAlmondMenu;
