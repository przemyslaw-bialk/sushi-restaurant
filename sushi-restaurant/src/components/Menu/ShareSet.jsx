const ShareSet = () => {
  const menu = {
    title: "SHARE SET 40 SZT - 199 ZŁ",
    ingredients: [
      "Gunkan tatar tuńczyk 2 szt",
      "Nigiri łosoś opalany 2 szt",
      "Hosomaki krewetka w panko 8 szt",
      "Futomaki vege cream cheese 6 szt (Awokado, serek, ogórek, oshinko, sałata)",
      "Uramaki salmon x tamago 8 szt (Tamago, spicy mayo, ogórek, kanpyo, top: łosoś opalany)",
      "Uramaki crab classic 8 szt (Awokado, ogórek, serek, szczypiorek, sezam, top: sałatka krabowa)",
      "Futomaki crispy shrimp almond 6 szt (Krewetka w panko, awokado, mango mayo)",
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

export default ShareSet;
