const FutomakiTempuraMenu = () => {
  const menu = {
    title: "FUTOMAKI W TEMPURZE",
    count: "6 SZT",
    ingredients: [
      {
        name: "Classic shrimp tempura",
        price: "39 zł",
        description: "(Krewetka parzona, ogórek, serek, kanpyo)",
      },
      {
        name: "Surimi classic tempura",
        price: "32 zł",
        description: "(Surimi, serek, ogórek, kanpyo)",
      },
      {
        name: "Tuna tatar tempura",
        price: "35 zł",
        description: "(Tatar z tuńczyka, ogórek, oshinko)",
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

export default FutomakiTempuraMenu;
