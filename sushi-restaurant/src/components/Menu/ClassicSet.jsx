const ClassicSet = () => {
  const menu = {
    title: "CLASSIC SET 24 SZT - 105 ZŁ",
    ingredients: [
      "Gunkan tatar łosoś 2 szt",
      "Hosomaki krewetka w panko 8 szt",
      "Futomaki crab cream cheese 6 szt (Sałatka krabowa, majonez, awokado, kanpyo, oshinko)",
      "Uramaki salmon x tosago 8 szt (Łosoś, serek, ogórek, oshinko, top: tosago)",
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

export default ClassicSet;
