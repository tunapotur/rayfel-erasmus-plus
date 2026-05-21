import Card from "../Card";
import SectionTemplate from "./SectionTemplate";
import announcements from "@/sample_data/announcements";

export default function Announcements() {
  return (
    <SectionTemplate
      name="Güncel Duyurular"
      header="Duyurular"
      linkText="Tümünü Gör"
      href="/announcements"
    >
      <div className="w-full flex flex-col gap-4 md:flex-row">
        {announcements.slice(0, 4).map((item) => (
          <Card key={item.title} card={item} />
        ))}
      </div>
    </SectionTemplate>
  );
}
