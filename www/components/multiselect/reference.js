export function References(props) {
  const { children } = props;
  return <div className="flex flex-wrap">{children}</div>;
}

export function Reference(props) {
  const { title, children } = props;
  return (
    <div className="mb-3" style={{ flex: '1 1 auto' }}>
      <span className="block text-xs pl-2">{title}</span>
      {children}
    </div>
  );
}
