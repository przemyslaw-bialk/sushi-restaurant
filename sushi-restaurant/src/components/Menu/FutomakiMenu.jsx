const FutomakiMenu = () => {
  const menu = {
    title: "FUTOMAKI 6 SZT",
    ingredients: [
      "Vegan tempura – 28 zł (Warzywa w tempurze, kimchi, awokado)",
      "Vege cream cheese – 27 zł (Awokado, serek, ogórek, oshinko, sałata)",
      "Salmon classic – 33 zł (Łosoś, serek, awokado, ogórek, sałata)",
      "Salmon mango – 31 zł (Łosoś pieczony, mango mayo, ogórek)",
      "Salmon teriyaki – 31 zł (Łosoś w teriyaki, awokado, ogórek, szczypiorek)",
      "Salmon tatar – 29 zł (Oshinko, ogórek, szczypiorek, top: tatar z łososia)",
      "Spicy crab – 29 zł (Sałatka krabowa, majonez, awokado, kanpyo, oshinko)",
      "Tuna avocado – 35 zł (Tuńczyk, spicy mayo, awokado, sałata, oshinko)",
      "Spicy tuna – 31 zł (Tuńczyk, kimchi, ogórek, szczypiorek)",
      "Tuna tatar – 34 zł (Warzywa w tempurze, majonez, top: tatar z tuńczyka)",
      "Spicy x crispy – 29 zł (Dorsz w panko, spicy mayo, ogórek, kanpyo, szczypiorek)",
      "Shrimp classic – 34 zł (Krewetka parzona, serek, ogórek, kanpyo)",
      "Crispy shrimp – 32 zł (Krewetka w panko, spicy mayo, ogórek, kanpyo, sałata)",
      "Unagi classic – 33 zł (Węgorz unagi, oshinko, ogórek, kanpyo, majonez)",
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

export default FutomakiMenu;
