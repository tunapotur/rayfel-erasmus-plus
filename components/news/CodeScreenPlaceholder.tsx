export function CodeScreenPlaceholder() {
  const lines = [
    { color: "#e3b341", width: "60%" },
    { color: "#ff7b72", width: "45%" },
    { color: "#79c0ff", width: "40%", indent: "12px" },
    { color: "#d2a8ff", width: "50%", indent: "20px" },
    { color: "#56d364", width: "30%", indent: "12px" },
    { color: "#e3b341", width: "45%" },
    { color: "#79c0ff", width: "35%", indent: "24px" },
    { color: "#ff7b72", width: "20%", indent: "12px" },
    { color: "#d2a8ff", width: "55%" },
    { color: "#56d364", width: "38%", indent: "12px" },
    { color: "#79c0ff", width: "42%", indent: "20px" },
    { color: "#e3b341", width: "28%" },
    { color: "#ff7b72", width: "50%", indent: "12px" },
    { color: "#56d364", width: "33%", indent: "24px" },
  ];

  const renderScreen = (key: number) => (
    <div
      key={key}
      className="flex-1 rounded-md bg-[#161b22] p-2.5 overflow-hidden"
    >
      {lines.map((line, i) => (
        <div
          key={i}
          className="mb-1.5 h-1.5 rounded-full"
          style={{
            backgroundColor: line.color,
            width: line.width,
            marginLeft: line.indent ?? "0px",
            opacity: 0.85,
          }}
        />
      ))}
    </div>
  );

  return (
    <div className="w-full aspect-video rounded-xl bg-[#0d1117] flex gap-2.5 p-3 mb-7 shadow-lg overflow-hidden">
      {[0, 1, 2].map(renderScreen)}
    </div>
  );
}
