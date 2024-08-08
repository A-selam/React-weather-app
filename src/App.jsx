import MainCard from "./components/MainCard";

export default function App() {
  return (
    <div className="bg-blue-100 grid grid-cols-3 gap-4 p-4">
      <div className="col-span-2">
        <MainCard></MainCard>
      </div>
      <div className="bg-black">hello</div>
    </div>
  );
}
