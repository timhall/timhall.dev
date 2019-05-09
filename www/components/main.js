export default function Main(props) {
  const { className = '', children, ...attributes } = props;

  return (
    <main
      className={`max-w-3xl overflow-auto mx-auto bg-white px-2 sm:px-8 ${className}`}
      {...attributes}
    >
      {children}
    </main>
  );
}
