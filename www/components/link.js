import NextLink from 'next/link';

export default function Link(props) {
  const { className = '', href, ...attributes } = props;

  return (
    <NextLink href={href}>
      <a
        className={`text-brand-600 border-b border-dashed hover:border-solid ${className}`}
        {...attributes}
      />
    </NextLink>
  );
}
