import H1 from '../elements/h1';

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
      <H1 className="leading-none" style={{ fontSize: '2rem' }}>
        <a
          className="font-bold text-brand"
          style={{ fontSize: '2.5rem' }}
          href="/"
        >
          TH
        </a>{' '}
        {title}
      </H1>
      <span className="text-gray-500">{meta}</span>
    </header>
  );
}
