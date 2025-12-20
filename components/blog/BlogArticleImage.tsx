import Image from 'next/image';

interface BlogArticleImageProps {
  src: string;
  alt: string;
}

export function BlogArticleImage({ src, alt }: BlogArticleImageProps) {
  return (
    <div className="mb-8">
      <Image
        src={src}
        alt={alt}
        width={1200}
        height={400}
        className="rounded-lg shadow-lg w-full h-auto max-h-[400px] object-cover"
        priority
      />
    </div>
  );
}

