import Image from 'next/image';

import parse, { Element, HTMLReactParserOptions } from 'html-react-parser';

interface QuillContentProps {
    htmlContent: string;
}

export default function QuillContent({ htmlContent }: QuillContentProps) {
    const cleanHtml = htmlContent.replace(/&nbsp;/g, ' ');

    const options: HTMLReactParserOptions = {
        replace: (domNode) => {
            if (domNode instanceof Element && domNode.name === 'img') {
                const { src, alt } = domNode.attribs;

                return (
                    <span className="relative my-6 block h-62.5 w-full overflow-hidden rounded-xl border border-slate-100 sm:h-100 dark:border-slate-800">
                        <Image
                            src={src}
                            alt={alt || 'content image'}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-cover"
                            loading="lazy"
                        />
                    </span>
                );
            }
        },
    };

    return (
        <div className="prose prose-slate dark:prose-invert prose-p:leading-relaxed prose-p:mb-4 prose-strong:font-bold prose-em:italic max-w-none">
            {parse(cleanHtml, options)}
        </div>
    );
}

//TODO: Article Hero Image ve content Image resimlerinde bir ayarsızlık var bunu ayarla
