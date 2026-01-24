const TempuraSet = () => {
  const menu = {
    title: "TEMPURA SET 32 SZT - 139 ZŁ",
    ingredients: [
      "Hosomaki spicy tempura 8 szt",
      "Futomaki vegan tempura 6 szt (Warzywa w tempurze, kimchi, awokado)",
      "Futomaki shrimp tempura 6 szt (Krewetka w tempurze, sałata, ogórek, spicy mayo, kanpyo)",
      "Futomaki surimi tempura 6 szt (Surimi, serek, ogórek, kanpyo)",
      "Futomaki tuna tatar tempura 6 szt (Tatar z tuńczyka, ogórek, oshinko)",
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

export default TempuraSet;
