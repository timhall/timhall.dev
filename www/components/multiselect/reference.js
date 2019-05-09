export function References(props) {
  const { children } = props;
  return (
    <div>
      {children}
      <style jsx>{`
        div {
          display: grid;
          grid-template-columns: repeat(5, minmax(100px, 1fr));
        }
      `}</style>
    </div>
  );
}

export function Reference(props) {
  const { title, children } = props;
  return (
    <div>
      <span className="block text-xs pl-2">{title}</span>
      {children}
    </div>
  );
}
