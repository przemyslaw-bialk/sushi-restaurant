const CelebrationSet = () => {
  const menu = {
    title: "CELEBRATION SET 86 SZT - 439 ZŁ",
    ingredients: [
      "Gunkan tatar łosoś 2 szt",
      "Gunkan tatar tuńczyk 2 szt",
      "Nigiri krewetka parzona 2 szt",
      "Nigiri łosoś 2 szt",
      "Nigiri awokado 2 szt",
      "Nigiri węgorz 2 szt",
      "Hosomaki ogórek 8 szt",
      "Hosomaki oshinko 8 szt",
      "Hosomaki tuńczyk 8 szt",
      "Hosomaki łosoś 8 szt",
      "Futomaki salmon classic 6 szt (Łosoś, serek, awokado, ogórek, sałata)",
      "Futomaki crispy shrimp 6 szt (Krewetka w panko, spicy mayo, ogórek, kanpyo, sałata)",
      "Futomaki spicy tuna 6 szt (Tuńczyk, kimchi, ogórek, szczypiorek)",
      "Uramaki crab classic 8 szt (Awokado, ogórek, serek, szczypiorek, sezam, top: sałatka krabowa)",
      "Uramaki crispy rainbow 8 szt (Dorsz w panko, serek, oshinko, top: łosoś, tuńczyk, awokado)",
      "Uramaki double salmon 8 szt (Łosoś pieczony, spicy mayo, ogórek, top: tatar z łososia)",
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

export default CelebrationSet;
