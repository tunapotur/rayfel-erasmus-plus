import parse from 'html-react-parser';

interface QuillContentProps {
    htmlContent: string;
}

export default function QuillContent({ htmlContent }: QuillContentProps) {
    // Quill 2 bazen çok fazla ardışık &nbsp; üretebilir,
    // html-react-parser bunu çözer ancak string düzeyinde de temiz kalmasını sağlayabiliriz.
    const cleanHtml = htmlContent.replace(/&nbsp;/g, ' ');

    return (
        <div className="prose prose-slate dark:prose-invert prose-p:leading-relaxed prose-p:mb-4 prose-strong:font-bold prose-em:italic prose-img:rounded-xl prose-img:mx-auto max-w-none">
            {parse(cleanHtml)}
        </div>
    );
}

/*
TODO: Alttaki metin yapılacak
💡 Ekstra İpucu (Quill Görselleri İçin)
Veritabanındaki mainText içinde <img src="/uploads/.../logo.png"> gibi lokal URL'ler yer alıyor. Next.js'in <Image /> optimizasyonunu bu HTML içinde doğrudan kullanmak istersen, html-react-parser'ın replace opsiyonunu kullanarak <img> etiketlerini dinamik olarak Next.js Image bileşenine dönüştürebilirsin. Ancak basit bir gösterim için yukarıdaki prose-img:... sınıfları işini fazlasıyla görecektir!
*/
