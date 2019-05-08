export default function h2(props) {
  const { className = '', ...attributes } = props;

  return (
    <h2 className={`text-2xl font-bold mt-3 ${className}`} {...attributes} />
  );
}
