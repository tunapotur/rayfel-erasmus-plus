import SectionTemplate from "../SectionTemplate";

export default function Announcements() {
  return (
    <SectionTemplate
      name="Güncel Duyurular"
      header="Duyurular"
      link={{ text: "Tümünü Gör", href: "/announcements" }}
    >
      <div>Announcements</div>
    </SectionTemplate>
  );
}
