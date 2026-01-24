const HosomakiMenu = () => {
  const menu = {
    title: "HOSOMAKI 8 SZT",
    ingredients: [
      "Ogórek – 17 zł",
      "Awokado – 19 zł",
      "Oshinko – 17 zł",
      "Kanpyo – 17 zł",
      "Spicy tempura – 16 zł",
      "Krewetka parzona – 28 zł",
      "Krewetka w panko – 24 zł",
      "Tuńczyk – 23 zł",
      "Łosoś – 23 zł",
      "Łosoś pieczony – 23 zł",
      "Surimi – 19 zł",
      "Węgorz – 28 zł",
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

export default HosomakiMenu;
