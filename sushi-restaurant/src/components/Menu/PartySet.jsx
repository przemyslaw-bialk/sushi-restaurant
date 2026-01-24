const PartySet = () => {
  const menu = {
    title: "PARTY SET 54 SZT - 229 ZŁ",
    ingredients: [
      "Nigiri tamago 2 szt",
      "Nigiri węgorz 2 szt",
      "Hosomaki tuńczyk 8 szt",
      "Hosomaki łosoś 8 szt",
      "Futomaki crispy shrimp 6 szt (Krewetka w panko, spicy mayo, ogórek, kanpyo, sałata)",
      "Futomaki spicy crab 6 szt (Sałatka krabowa, majonez, awokado, kanpyo, oshinko)",
      "Uramaki crispy tuna 8 szt (Warzywa w tempurze, spicy mayo, top: tatar z tuńczyka)",
      "Uramaki spicy salmon 8 szt (Kimchi, szczypiorek, ogórek, top: łosoś opalany)",
      "Futomaki spicy shrimp panko 6 szt (Krewetka parzona, kimchi, ogórek, szczypiorek)",
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

export default PartySet;
