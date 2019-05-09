export default function Example(props) {
  const { children } = props;

  return (
    <div className="my-4 border border-brand">
      <span className="inline-block uppercase tracking-wide font-medium text-xs text-white bg-brand mb-2 py-1 px-2">
        Example
      </span>
      <div className="p-3">{children}</div>
    </div>
  );
}
