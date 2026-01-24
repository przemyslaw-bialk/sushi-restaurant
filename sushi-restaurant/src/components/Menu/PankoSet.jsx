const PankoSet = () => {
  const menu = {
    title: "PANKO SET 26 SZT - 149 ZŁ",
    ingredients: [
      "Futomaki crispy shrimp 6 szt (Krewetka w panko, spicy mayo, ogórek, kanpyo, sałata)",
      "Uramaki crispy rainbow 8 szt (Dorsz w panko, serek, oshinko, top: łosoś, tuńczyk, awokado)",
      "Futomaki salmon classic panko 6 szt (Łosoś, oshinko, ogórek, serek)",
      "Futomaki salmon tatar panko 6 szt (Tatar z łososia, oshinko, ogórek, szczypiorek)",
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

export default PankoSet;
