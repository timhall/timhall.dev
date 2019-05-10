import Link from 'next/link';

export default function Header(props) {
  const {
    className = '',
    title,
    meta = 'Creative code and engineering',
    ...attributes
  } = props;

  return (
    <header
      className={`max-w-3xl mx-auto bg-white mt-1 px-2 py-4 sm:px-8 ${className}`}
      {...attributes}
    >
      <h1 className="text-2xl sm:text-3xl font-bold leading-none">
        <Link href="/">
          <a
            className="text-4xl sm:text-5xl font-bold text-brand relative"
            style={{ top: '0.2rem' }}
            href="/"
            aria-label="Home"
          >
            TH
          </a>
        </Link>{' '}
        {title}
      </h1>
      <span className="text-gray-600">{meta}</span>
    </header>
  );
}
