const FutomakiXLSet = () => {
  const menu = {
    title: "FUTOMAKI XL SET 36 SZT - 189 ZŁ",
    ingredients: [
      "Futomaki Salmon mango 6 szt (Łosoś pieczony, mango mayo, ogórek)",
      "Futomaki Tuna avocado 6 szt (Tuńczyk, spicy mayo, awokado, sałata, oshinko)",
      "Futomaki Spicy crab 6 szt (Sałatka krabowa, majonez, awokado, kanpyo, oshinko)",
      "Futomaki Crispy shrimp 6 szt (Krewetka w panko, spicy mayo, ogórek, kanpyo, sałata)",
      "Futomaki Salmon tatar 6 szt (Oshinko, ogórek, szczypiorek, top: tatar z łososia)",
      "Futomaki Unagi classic 6 szt (Węgorz unagi, oshinko, ogórek, kanpyo, majonez)",
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

export default FutomakiXLSet;
