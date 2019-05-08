export default function H1(props) {
  const { className = '', ...attributes } = props;

  return <h1 className={`text-3xl font-bold ${className}`} {...attributes} />;
}
