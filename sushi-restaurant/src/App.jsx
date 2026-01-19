import Test from "./components/Test";

export default function App() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4 bg-sushiDark text-sushiGold">
      <h1 className="text-4xl font-bold text-sushiRed underline">
        TEST SUSHI RED
      </h1>
      <h2 className="ml-32 mt-9 border border-red-400 p-4 text-2xl text-sushiGreen underline">
        TEST SUSHI GREEN
      </h2>
      <Test />
    </div>
  );
}
