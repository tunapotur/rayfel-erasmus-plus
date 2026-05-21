export interface InfoType {
  id: number;
  title: string;
  description: string;
  href: string;
}

export interface AnnouncementsType extends InfoType {
  date: string;
}

export interface NewsType extends AnnouncementsType {
  newsType: string;
  image: string;
}
