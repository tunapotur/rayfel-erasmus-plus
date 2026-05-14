export default function AboutPage() {
  return (
    <div>
      <div className="w-full h-192 bg-amber-500 flex flex-col items-center relative z-15">
        <div className="w-full bg-blue-600/75 h-128 absolute top-0 z-5">
          <div className=""></div>
        </div>
        <div className="w-full bottom-24 h-64 bg-green-600/75 absolute z-10 flex flex-row justify-around">
          <div className="w-64 h-full bg-background rounded-lg"></div>
          <div className="w-64 h-full bg-background rounded-lg"></div>
          <div className="w-64 h-full bg-background rounded-lg"></div>
        </div>
      </div>
    </div>
  );
}
