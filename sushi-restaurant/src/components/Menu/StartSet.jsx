const StartSet = () => {
  const menu = {
    title: "START SET 16 SZT - 79 ZŁ",
    ingredients: [
      "Nigiri tamago 2 szt",
      "Futomaki tuna classic 6 szt (Tuńczyk, awokado, ogórek, sałata, serek)",
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

export default StartSet;
