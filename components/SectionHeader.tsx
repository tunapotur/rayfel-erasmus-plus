export default function SectionHeader({ text }: { text: string }) {
  return (
    <h3 className="text-3xl font-bold leading-tight text-gray-800 dark:text-gray-200 ">
      {text}
    </h3>
  );
}
