const FutomakiPankoMenu = () => {
  const menu = {
    title: "FUTOMAKI W PANKO",
    count: "6 SZT",
    ingredients: [
      {
        name: "Salmon panko",
        price: "36 zł",
        description: "(Łosoś, awokado, ogórek, serek)",
      },
      {
        name: "Salmon tatar panko",
        price: "39 zł",
        description: "(Tatar z łososia, awokado, ogórek, szczypiorek)",
      },
      {
        name: "Spicy shrimp panko",
        price: "39 zł",
        description: "(Krewetka parzona, kimchi, ogórek, szczypiorek)",
      },
    ],
  };

  return (
    <div className="p-5">
      <h2 className="text-xl font-semibold text-sushiBrand">
        {menu.title}
        <span className="ml-2 text-sushiMain">{menu.count}</span>
      </h2>

      <ul className="mt-4 font-thin text-sushiMain">
        {menu.ingredients.map((item, i) => (
          <li key={i}>
            <span className="font-normal">{item.name}</span>
            {" – "}
            <span className="font-extralight">{item.price}</span>
            <p className="italic text-gray-300">{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FutomakiPankoMenu;
