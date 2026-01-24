const UramakiMenu = () => {
  const menu = {
    title: "URAMAKI 8 SZT",
    ingredients: [
      "Vegan – 28 zł (Warzywa w tempurze, vegan spicy mayo, szczypiorek, sezam)",
      "Salmon x tosago – 29 zł (Łosoś, serek, ogórek, oshinko, top: tosago)",
      "Salmon x tamago – 33 zł (Tamago, spicy mayo, ogórek, kanpyo, top: łosoś opalany)",
      "Teriyaki x avocado – 33 zł (Awokado, ogórek, kanpyo, majonez, szczypiorek, top: łosoś teriyaki)",
      "Tuna x salmon – 44 zł (Tuńczyk, oshinko, ogórek, serek, sezam, top: łosoś)",
      "Crab classic – 29 zł (Awokado, ogórek, serek, szczypiorek, sezam, top: sałatka krabowa)",
      "Crispy tuna tatar – 34 zł (Warzywa w tempurze, spicy mayo, top: tatar z tuńczyka)",
      "Spicy double salmon – 39 zł (Łosoś, kimchi, ogórek, szczypiorek, top: łosoś opalany)",
      "Crispy shrimp – 39 zł (Krewetka w panko, mango mayo, ogórek, sezam, top: awokado)",
      "Crispy shrimp x tuna – 46 zł (Krewetka w panko, ogórek, top: tuńczyk, goma wakame)",
      "Double tuna – 49 zł (Tuńczyk, oshinko, majonez, top: tatar z tuńczyka)",
      "Double salmon – 47 zł (Łosoś pieczony, spicy mayo, ogórek, top: tatar z łososia)",
      "Crispy rainbow – 48 zł (Dorsz w panko, serek, oshinko, top: łosoś, tuńczyk, awokado)",
      "Dragon – 49 zł (Krewetka w panko, awokado, ogórek, top: węgorz)",
    ],
  };

  return (
    <div className="p-5">
      <h2 className="text-xl font-semibold text-sushiBrand">{menu.title}</h2>
      <ul className="mt-4 font-thin text-sushiMain">
        {menu.ingredients.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default UramakiMenu;
