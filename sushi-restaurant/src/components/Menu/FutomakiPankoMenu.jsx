const FutomakiPankoMenu = () => {
  const menu = {
    title: "FUTOMAKI W PANKO 6 SZT",
    ingredients: [
      "Salmon panko – 36 zł (Łosoś, awokado, ogórek, serek)",
      "Salmon tatar panko – 39 zł (Tatar z łososia, awokado, ogórek, szczypiorek)",
      "Spicy shrimp panko – 39 zł (Krewetka parzona, kimchi, ogórek, szczypiorek)",
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

export default FutomakiPankoMenu;
