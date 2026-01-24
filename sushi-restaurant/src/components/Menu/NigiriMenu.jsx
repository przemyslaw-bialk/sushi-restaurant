const NigiriMenu = () => {
  const menu = {
    title: "NIGIRI 2 SZT",
    ingredients: [
      "Awokado – 16 zł",
      "Krewetka parzona – 27 zł",
      "Tuńczyk – 25 zł",
      "Łosoś – 23 zł",
      "Łosoś teriyaki – 23 zł",
      "Węgorz – 29 zł",
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

export default NigiriMenu;
