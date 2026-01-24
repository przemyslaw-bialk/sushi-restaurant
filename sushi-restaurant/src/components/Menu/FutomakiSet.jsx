const FutomakiSet = () => {
  const menu = {
    title: "FUTOMAKI SET 24 SZT - 129 ZŁ",
    ingredients: [
      "Futomaki salmon classic 6 szt (Łosoś, serek, awokado, ogórek, sałata)",
      "Futomaki tuna tatar 6 szt (Warzywa w tempurze, majonez, top: tatar z tuńczyka)",
      "Futomaki shrimp classic 6 szt (Krewetka parzona, serek, ogórek, kanpyo)",
      "Futomaki spicy x crispy 6 szt (Dorsz w panko, spicy mayo, ogórek, kanpyo, szczypiorek)",
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

export default FutomakiSet;
