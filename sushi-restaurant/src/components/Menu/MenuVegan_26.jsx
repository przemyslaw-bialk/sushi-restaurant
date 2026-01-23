const MenuVegan26 = () => {
  const menu = {
    title: "VEGAN SET 26 SZT - 99 ZŁ",
    ingredients: [
      "Gunkan wakame 2 szt",
      "Nigiri awokado 2 szt",
      "Hosomaki spicy tempura 8 szt",
      "Futomaki vegan tempura 6 szt (Warzywa w tempurze, kimchi, awokado)",
      "Uramaki vegan panko 8 szt (Ogórek, kanpyo, oshinko, vegan spicy mayo)",
    ],
  };
  return (
    <div className="p-1">
      <div>
        <div className="rounded-lg bg-black/30 p-4 md:bg-transparent">
          <h2 className="text-xl font-semibold text-sushiBrand">
            {menu.title}
          </h2>
          <ul className="mt-4 font-thin text-sushiMain">
            {menu.ingredients.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MenuVegan26;
