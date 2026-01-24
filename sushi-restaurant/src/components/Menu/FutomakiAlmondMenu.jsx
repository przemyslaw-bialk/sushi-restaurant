const FutomakiAlmondMenu = () => {
  const menu = {
    title: "FUTOMAKI W MIGDAŁACH 6 SZT",
    ingredients: [
      "Salmon mango almond – 45 zł (Łosoś, mango, ogórek, serek)",
      "Spicy tuna almond – 45 zł (Tuńczyk, ogórek, spicy mayo)",
      "Crispy shrimp almond – 35 zł (Krewetka w panko, mango mayo, awokado)",
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

export default FutomakiAlmondMenu;
