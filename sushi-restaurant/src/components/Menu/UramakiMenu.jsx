const UramakiMenu = () => {
  const menu = {
    title: "URAMAKI",
    count: "8 SZT",
    ingredients: [
      {
        name: "Vegan",
        price: "28 zł",
        description:
          "(Warzywa w tempurze, vegan spicy mayo, szczypiorek, sezam)",
      },
      {
        name: "Salmon x tosago",
        price: "29 zł",
        description: "(Łosoś, serek, ogórek, oshinko, top: tosago)",
      },
      {
        name: "Salmon x tamago",
        price: "33 zł",
        description: "(Tamago, spicy mayo, ogórek, kanpyo, top: łosoś opalany)",
      },
      {
        name: "Teriyaki x avocado",
        price: "33 zł",
        description:
          "(Awokado, ogórek, kanpyo, majonez, szczypiorek, top: łosoś teriyaki)",
      },
      {
        name: "Tuna x salmon",
        price: "44 zł",
        description: "(Tuńczyk, oshinko, ogórek, serek, sezam, top: łosoś)",
      },
      {
        name: "Crab classic",
        price: "29 zł",
        description:
          "(Awokado, ogórek, serek, szczypiorek, sezam, top: sałatka krabowa)",
      },
      {
        name: "Crispy tuna tatar",
        price: "34 zł",
        description: "(Warzywa w tempurze, spicy mayo, top: tatar z tuńczyka)",
      },
      {
        name: "Spicy double salmon",
        price: "39 zł",
        description: "(Łosoś, kimchi, ogórek, szczypiorek, top: łosoś opalany)",
      },
      {
        name: "Crispy shrimp",
        price: "39 zł",
        description:
          "(Krewetka w panko, mango mayo, ogórek, sezam, top: awokado)",
      },
      {
        name: "Crispy shrimp x tuna",
        price: "46 zł",
        description: "(Krewetka w panko, ogórek, top: tuńczyk, goma wakame)",
      },
      {
        name: "Double tuna",
        price: "49 zł",
        description: "(Tuńczyk, oshinko, majonez, top: tatar z tuńczyka)",
      },
      {
        name: "Double salmon",
        price: "47 zł",
        description:
          "(Łosoś pieczony, spicy mayo, ogórek, top: tatar z łososia)",
      },
      {
        name: "Crispy rainbow",
        price: "48 zł",
        description:
          "(Dorsz w panko, serek, oshinko, top: łosoś, tuńczyk, awokado)",
      },
      {
        name: "Dragon",
        price: "49 zł",
        description: "(Krewetka w panko, awokado, ogórek, top: węgorz)",
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

export default UramakiMenu;
