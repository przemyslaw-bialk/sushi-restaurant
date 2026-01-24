const FriendsSet = () => {
  const menu = {
    title: "FRIENDS SET 32 SZT - 179 ZŁ",
    ingredients: [
      "Gunkan goma wakame 2 szt",
      "Nigiri łosoś 2 szt",
      "Hosomaki ogórek 8 szt",
      "Futomaki tuna avocado 6 szt (Tuńczyk, spicy mayo, awokado, oshinko, sałata)",
      "Uramaki dragon 8 szt (Krewetka w panko, awokado, ogórek, top: węgorz)",
      "Futomaki salmon tatar panko 6 szt (Tatar z łososia, oshinko, ogórek, szczypiorek)",
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

export default FriendsSet;
