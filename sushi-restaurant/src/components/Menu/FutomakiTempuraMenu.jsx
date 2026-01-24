const FutomakiTempuraMenu = () => {
  const menu = {
    title: "FUTOMAKI W TEMPURZE 6 SZT",
    ingredients: [
      "Classic shrimp tempura – 39 zł (Krewetka parzona, ogórek, serek, kanpyo)",
      "Surimi classic tempura – 32 zł (Surimi, serek, ogórek, kanpyo)",
      "Tuna tatar tempura – 35 zł (Tatar z tuńczyka, ogórek, oshinko)",
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

export default FutomakiTempuraMenu;
