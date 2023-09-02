export default function Image(props: {
    src: string,
    width: number,
    height: number,
    alt: string,
    className?: string
}) {
    const { src, width, height, alt, className } = props;
    return (
        <img
            src={src}
            width={width}
            height={height}
            alt={alt}
            className={className}
        />
    )
}
