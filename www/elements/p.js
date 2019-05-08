export default function P(props) {
  const { className = '', ...attributes } = props;

  return <p className={`my-4 ${className}`} {...attributes} />;
}
