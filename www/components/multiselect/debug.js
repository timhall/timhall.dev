export default function Debug(props) {
  const { value, ...attributes } = props;
  return (
    <pre style={{ borderLeft: 'none' }} {...attributes}>
      {JSON.stringify(value)}
    </pre>
  );
}
