const SalmonSet = () => {
  const menu = {
    title: "SALMON SET 32 SZT - 159 ZŁ",
    ingredients: [
      "Nigiri łosoś 2 szt",
      "Gunkan tatar łosoś 2 szt",
      "Hosomaki łosoś 8 szt",
      "Futomaki salmon teriyaki 6 szt (Łosoś w teriyaki, awokado, ogórek, szczypiorek)",
      "Uramaki salmon x mango 8 szt (Łosoś pieczony, ogórek, top: mango mayo)",
      "Futomaki salmon panko 6 szt (Łosoś, oshinko, ogórek, serek)",
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

export default SalmonSet;
