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
                    <span className="article-img">
                        <Image
                            src={src}
                            alt={alt || 'content image'}
                            className="object-contain"
                            sizes="(max-width: 1024px) 100vw, 1024px"
                            fill
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
