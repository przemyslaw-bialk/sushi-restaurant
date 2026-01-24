const EventSet = () => {
  const menu = {
    title: "EVENT SET 68 SZT - 349 ZŁ",
    ingredients: [
      "Gunkan goma wakame 2 szt",
      "Gunkan tosago 2 szt",
      "Nigiri łosoś 2 szt",
      "Nigiri tuńczyk 2 szt",
      "Nigiri łosoś teriyaki 2 szt",
      "Hosomaki kanpyo 8 szt",
      "Hosomaki awokado 8 szt",
      "Hosomaki sałatka krabowa 8 szt",
      "Futomaki shrimp classic 6 szt (Krewetka parzona, serek, ogórek, kanpyo)",
      "Futomaki salmon mango 6 szt (Łosoś pieczony, mango mayo, ogórek)",
      "Uramaki crispy tuna tatar 8 szt (Warzywa w tempurze, spicy mayo, top: tatar z tuńczyka)",
      "Uramaki dragon 8 szt (Krewetka w panko, awokado, ogórek, top: węgorz)",
      "Futomaki spicy tuna almond 6 szt (Tuńczyk, ogórek, spicy mayo)",
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

export default EventSet;
