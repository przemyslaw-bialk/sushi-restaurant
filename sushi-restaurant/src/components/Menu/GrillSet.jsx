const GrillSet = () => {
  const menu = {
    title: "GRILL SET 38 SZT - 169 ZŁ",
    ingredients: [
      "Hosomaki łosoś pieczony 8 szt",
      "Nigiri łosoś opalany 2 szt",
      "Futomaki crispy shrimp 6 szt (Krewetka w panko, spicy mayo, ogórek, kanpyo, sałata)",
      "Futomaki spicy x crispy 6 szt (Dorsz w panko, spicy mayo, ogórek, kanpyo, szczypiorek)",
      "Uramaki salmon x avocado 8 szt (Łosoś pieczony, spicy mayo, ogórek, top: awokado)",
      "Uramaki teriyaki salmon 8 szt (Awokado, ogórek, kanpyo, majonez, szczypiorek, top: łosoś teriyaki)",
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

export default GrillSet;
