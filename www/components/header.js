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
        <a className="font-bold" href="/">
          TH
        </a>{' '}
        {title}
      </H1>
      <span className="text-gray-500">{meta}</span>

      <style jsx>{`
        a {
          color: #128aa8;
          font-size: 2.5rem;
        }
      `}</style>
    </header>
  );
}
