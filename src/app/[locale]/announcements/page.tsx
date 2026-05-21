import Card from "@/components/Card";
import PageBadgeHeader from "@/components/PageBadgeHeader";
import announcements from "@/sample_data/announcements";

export default function AnnouncementsPage() {
  return (
    <div className="flex flex-col items-center mb-auto">
      <PageBadgeHeader
        topHeader="Platform Duyuruları"
        header="Duyurular"
        content="Proje başvuruları ve platformumuzdaki en yeni gelişmeleri buradan takip edebilirsiniz."
      />

      {/* Announcements Cards List */}
      <div className="w-full grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 px-4 py-6">
        {announcements.map((item) => (
          <Card key={item.title} card={item} />
        ))}
      </div>
    </div>
  );
}
