const CrispySet = () => {
  const menu = {
    title: "CRISPY SET 26 SZT - 139 ZŁ",
    ingredients: [
      "Hosomaki krewetka w panko 8 szt",
      "Futomaki spicy shrimp panko 6 szt (Krewetka parzona, kimchi, ogórek, szczypiorek)",
      "Futomaki tuna tatar tempura 6 szt (Tatar z tuńczyka, ogórek, oshinko)",
      "Futomaki salmon mango almond 6 szt (Łosoś, mango mayo, ogórek)",
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

export default CrispySet;
