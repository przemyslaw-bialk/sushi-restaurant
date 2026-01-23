const HosomakiSet = () => {
  const menu = {
    title: "HOSOMAKI SET 40 SZT - 99ZŁ",
    ingredients: [
      "Hosomaki ogórek 8 szt",
      "Hosomaki spicy tempura 8 szt",
      "Hosomaki tuńczyk 8 szt",
      "Hosomaki łosoś 8 szt",
      "Hosomaki krewetka w panko 8 szt",
    ],
  };
  return (
    <div className="bg-bgMenu p-5">
      <h2 className="text-xl font-semibold text-sushiBrand">{menu.title}</h2>
      <ul className="mt-4 font-thin text-sushiMain">
        {menu.ingredients.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default HosomakiSet;
