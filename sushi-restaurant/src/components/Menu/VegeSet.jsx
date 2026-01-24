const VegeSet = () => {
  const menu = {
    title: "VEGE SET 32 SZT - 129 ZŁ",
    ingredients: [
      "Nigiri tamago 2 szt",
      "Gunkan tosago 2 szt",
      "Hosomaki ogórek 8 szt",
      "Futomaki vege cream cheese 6 szt (Awokado, serek, ogórek, oshinko, sałata)",
      "Uramaki vege 8 szt (Kanpyo, oshinko, top: spicy mayo, sezam, szczypiorek)",
      "Futomaki vege tempura 6 szt (Kimchi, awokado)",
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

export default VegeSet;
