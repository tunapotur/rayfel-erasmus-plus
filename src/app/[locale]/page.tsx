// import Navbar from "@/components/Navbar";

import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { ModeToggle } from "@/components/ModeToggle";
import logo from "@/public/logo64.png";

import LocaleSwitcher from "@/components/LocaleSwitcher";
import LocalOperation from "@/components/LocalOperation";

const navLinks = [
  { label: "Ana Sayfa", href: "/", active: true },
  { label: "Hakkımızda", href: "/about" },
  { label: "Duyurular", href: "/announcements " },
  { label: "Haberler", href: "/news" },
  { label: "eTwinning", href: "/etwinning" },
];

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 shrink-0">
      {/* image */}
      <div className="size-7.5 flex items-center justify-center">
        <Image src={logo} alt="Rayfel Logo" />
      </div>

      {/* text */}
      <div className="font-semibold flex flex-col items-start leading-none">
        <div>Rayfel</div>
        <div className="text-primary font-bold">Erasmus+</div>
      </div>
    </Link>
  );
}

function Navigation() {
  return (
    <nav className="flex items-center text-sm">
      {navLinks.map((link) => (
        <Link
          key={link.label}
          href={link.href}
          className={`px-3 py-1.5 rounded-md ${
            link.active
              ? "text-primary font-semibold"
              : " hover:text-gray-900 hover:bg-gray-100"
          }`}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}

function AuthButtons() {
  return (
    <div className="flex items-center gap-1">
      <Button variant="outline" asChild>
        <Link href="/login">Giriş Yap</Link>
      </Button>

      <Button asChild>
        <Link href="/signup">Kayıt</Link>
      </Button>
    </div>
  );
}

function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full shadow-sm px-4 bg-background">
      <div className="flex items-center justify-between h-16">
        <Logo />
        <Navigation />
        <ModeToggle></ModeToggle>

        <LocalOperation />
        <LocaleSwitcher />

        <AuthButtons />
      </div>
    </header>
  );
}

export default function HomePage() {
  return (
    <div className="flex justify-center">
      <div className="max-w-4xl ">
        <Navbar />

        <div className="border-2 border-amber-500 mt-12">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            quisquam, nulla doloremque vitae voluptatibus suscipit atque, optio
            mollitia dicta est, eveniet illum magnam reprehenderit enim nemo
            recusandae commodi repellendus consequatur. Lorem, ipsum dolor sit
            amet consectetur adipisicing elit. Porro culpa harum distinctio
            repellat eius repellendus commodi reprehenderit eligendi fugiat
            quasi optio deserunt laborum repudiandae, ullam consequuntur
            consectetur voluptatibus nobis voluptatum. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Provident modi officiis itaque
            dignissimos accusantium optio deleniti, recusandae architecto quam
            vitae id, iusto ipsum expedita praesentium eos molestias, quae
            eveniet nisi? Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Cumque totam et excepturi fugiat iste dolore consequatur
            inventore, quia nam sit, eaque commodi provident optio aspernatur
            illo labore sed tempore accusantium! Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Quia debitis, quaerat, placeat error
            provident iusto qui, reiciendis recusandae temporibus illum esse
            ipsa nisi nobis officiis doloribus consequatur deleniti atque.
            Quibusdam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            quisquam, nulla doloremque vitae voluptatibus suscipit atque, optio
            mollitia dicta est, eveniet illum magnam reprehenderit enim nemo
            recusandae commodi repellendus consequatur. Lorem, ipsum dolor sit
            amet consectetur adipisicing elit. Porro culpa harum distinctio
            repellat eius repellendus commodi reprehenderit eligendi fugiat
            quasi optio deserunt laborum repudiandae, ullam consequuntur
            consectetur voluptatibus nobis voluptatum. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Provident modi officiis itaque
            dignissimos accusantium optio deleniti, recusandae architecto quam
            vitae id, iusto ipsum expedita praesentium eos molestias, quae
            eveniet nisi? Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Cumque totam et excepturi fugiat iste dolore consequatur
            inventore, quia nam sit, eaque commodi provident optio aspernatur
            illo labore sed tempore accusantium! Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Quia debitis, quaerat, placeat error
            provident iusto qui, reiciendis recusandae temporibus illum esse
            ipsa nisi nobis officiis doloribus consequatur deleniti atque.
            Quibusdam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            quisquam, nulla doloremque vitae voluptatibus suscipit atque, optio
            mollitia dicta est, eveniet illum magnam reprehenderit enim nemo
            recusandae commodi repellendus consequatur. Lorem, ipsum dolor sit
            amet consectetur adipisicing elit. Porro culpa harum distinctio
            repellat eius repellendus commodi reprehenderit eligendi fugiat
            quasi optio deserunt laborum repudiandae, ullam consequuntur
            consectetur voluptatibus nobis voluptatum. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Provident modi officiis itaque
            dignissimos accusantium optio deleniti, recusandae architecto quam
            vitae id, iusto ipsum expedita praesentium eos molestias, quae
            eveniet nisi? Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Cumque totam et excepturi fugiat iste dolore consequatur
            inventore, quia nam sit, eaque commodi provident optio aspernatur
            illo labore sed tempore accusantium! Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Quia debitis, quaerat, placeat error
            provident iusto qui, reiciendis recusandae temporibus illum esse
            ipsa nisi nobis officiis doloribus consequatur deleniti atque.
            Quibusdam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            quisquam, nulla doloremque vitae voluptatibus suscipit atque, optio
            mollitia dicta est, eveniet illum magnam reprehenderit enim nemo
            recusandae commodi repellendus consequatur. Lorem, ipsum dolor sit
            amet consectetur adipisicing elit. Porro culpa harum distinctio
            repellat eius repellendus commodi reprehenderit eligendi fugiat
            quasi optio deserunt laborum repudiandae, ullam consequuntur
            consectetur voluptatibus nobis voluptatum. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Provident modi officiis itaque
            dignissimos accusantium optio deleniti, recusandae architecto quam
            vitae id, iusto ipsum expedita praesentium eos molestias, quae
            eveniet nisi? Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Cumque totam et excepturi fugiat iste dolore consequatur
            inventore, quia nam sit, eaque commodi provident optio aspernatur
            illo labore sed tempore accusantium! Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Quia debitis, quaerat, placeat error
            provident iusto qui, reiciendis recusandae temporibus illum esse
            ipsa nisi nobis officiis doloribus consequatur deleniti atque.
            Quibusdam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            quisquam, nulla doloremque vitae voluptatibus suscipit atque, optio
            mollitia dicta est, eveniet illum magnam reprehenderit enim nemo
            recusandae commodi repellendus consequatur. Lorem, ipsum dolor sit
            amet consectetur adipisicing elit. Porro culpa harum distinctio
            repellat eius repellendus commodi reprehenderit eligendi fugiat
            quasi optio deserunt laborum repudiandae, ullam consequuntur
            consectetur voluptatibus nobis voluptatum. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Provident modi officiis itaque
            dignissimos accusantium optio deleniti, recusandae architecto quam
            vitae id, iusto ipsum expedita praesentium eos molestias, quae
            eveniet nisi? Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Cumque totam et excepturi fugiat iste dolore consequatur
            inventore, quia nam sit, eaque commodi provident optio aspernatur
            illo labore sed tempore accusantium! Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Quia debitis, quaerat, placeat error
            provident iusto qui, reiciendis recusandae temporibus illum esse
            ipsa nisi nobis officiis doloribus consequatur deleniti atque.
            Quibusdam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            quisquam, nulla doloremque vitae voluptatibus suscipit atque, optio
            mollitia dicta est, eveniet illum magnam reprehenderit enim nemo
            recusandae commodi repellendus consequatur. Lorem, ipsum dolor sit
            amet consectetur adipisicing elit. Porro culpa harum distinctio
            repellat eius repellendus commodi reprehenderit eligendi fugiat
            quasi optio deserunt laborum repudiandae, ullam consequuntur
            consectetur voluptatibus nobis voluptatum. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Provident modi officiis itaque
            dignissimos accusantium optio deleniti, recusandae architecto quam
            vitae id, iusto ipsum expedita praesentium eos molestias, quae
            eveniet nisi? Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Cumque totam et excepturi fugiat iste dolore consequatur
            inventore, quia nam sit, eaque commodi provident optio aspernatur
            illo labore sed tempore accusantium! Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Quia debitis, quaerat, placeat error
            provident iusto qui, reiciendis recusandae temporibus illum esse
            ipsa nisi nobis officiis doloribus consequatur deleniti atque.
            Quibusdam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            quisquam, nulla doloremque vitae voluptatibus suscipit atque, optio
            mollitia dicta est, eveniet illum magnam reprehenderit enim nemo
            recusandae commodi repellendus consequatur. Lorem, ipsum dolor sit
            amet consectetur adipisicing elit. Porro culpa harum distinctio
            repellat eius repellendus commodi reprehenderit eligendi fugiat
            quasi optio deserunt laborum repudiandae, ullam consequuntur
            consectetur voluptatibus nobis voluptatum. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Provident modi officiis itaque
            dignissimos accusantium optio deleniti, recusandae architecto quam
            vitae id, iusto ipsum expedita praesentium eos molestias, quae
            eveniet nisi? Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Cumque totam et excepturi fugiat iste dolore consequatur
            inventore, quia nam sit, eaque commodi provident optio aspernatur
            illo labore sed tempore accusantium! Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Quia debitis, quaerat, placeat error
            provident iusto qui, reiciendis recusandae temporibus illum esse
            ipsa nisi nobis officiis doloribus consequatur deleniti atque.
            Quibusdam.
          </p>
        </div>
      </div>
    </div>
  );
}
