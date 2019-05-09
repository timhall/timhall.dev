export function Block(props) {
  const { className = '', ...attributes } = props;

  return (
    <div
      className={`border-l-2 border-solid pl-3 py-1 ${className}`}
      {...attributes}
    />
  );
}

export function BlockLabel(props) {
  const { className = '', ...attributes } = props;

  return (
    <span
      className={`block uppercase font-bold text-sm ${className}`}
      {...attributes}
    />
  );
}
