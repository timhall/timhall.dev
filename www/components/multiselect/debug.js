export default function Debug(props) {
  const { value, ...attributes } = props;
  return <pre {...attributes}>{JSON.stringify(value)}</pre>;
}
