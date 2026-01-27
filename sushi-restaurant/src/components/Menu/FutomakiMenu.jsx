const FutomakiMenu = () => {
  const menu = {
    title: "FUTOMAKI",
    count: "6 SZT",
    ingredients: [
      {
        name: "Vegan tempura",
        price: "28 zł",
        description: "(Warzywa w tempurze, kimchi, awokado)",
      },
      {
        name: "Vege cream cheese",
        price: "27 zł",
        description: "(Awokado, serek, ogórek, oshinko, sałata)",
      },
      {
        name: "Salmon classic",
        price: "33 zł",
        description: "(Łosoś, serek, awokado, ogórek, sałata)",
      },
      {
        name: "Salmon mango",
        price: "31 zł",
        description: "(Łosoś pieczony, mango mayo, ogórek)",
      },
      {
        name: "Salmon teriyaki",
        price: "31 zł",
        description: "(Łosoś w teriyaki, awokado, ogórek, szczypiorek)",
      },
      {
        name: "Salmon tatar",
        price: "29 zł",
        description: "(Oshinko, ogórek, szczypiorek, top: tatar z łososia)",
      },
      {
        name: "Spicy crab",
        price: "29 zł",
        description: "(Sałatka krabowa, majonez, awokado, kanpyo, oshinko)",
      },
      {
        name: "Tuna avocado",
        price: "35 zł",
        description: "(Tuńczyk, spicy mayo, awokado, sałata, oshinko)",
      },
      {
        name: "Spicy tuna",
        price: "31 zł",
        description: "(Tuńczyk, kimchi, ogórek, szczypiorek)",
      },
      {
        name: "Tuna tatar",
        price: "34 zł",
        description: "(Warzywa w tempurze, majonez, top: tatar z tuńczyka)",
      },
      {
        name: "Spicy x crispy",
        price: "29 zł",
        description: "(Dorsz w panko, spicy mayo, ogórek, kanpyo, szczypiorek)",
      },
      {
        name: "Shrimp classic",
        price: "34 zł",
        description: "(Krewetka parzona, serek, ogórek, kanpyo)",
      },
      {
        name: "Crispy shrimp",
        price: "32 zł",
        description: "(Krewetka w panko, spicy mayo, ogórek, kanpyo, sałata)",
      },
      {
        name: "Unagi classic",
        price: "33 zł",
        description: "(Węgorz unagi, oshinko, ogórek, kanpyo, majonez)",
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
            <span className="font-extralight">{item.price}</span>
            <p className="italic text-gray-300">{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FutomakiMenu;
