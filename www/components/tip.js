export default function Tip(props) {
  const { label = 'Tip', className = '', children, ...attributes } = props;

  return (
    <div
      className={`border-l-2 border-solid border-green-500 pl-3 py-1 ${className}`}
      {...attributes}
    >
      {label && (
        <span className="uppercase font-bold text-sm text-green-600">
          {label}
        </span>
      )}
      <p>{children}</p>

      <style jsx>
        {`
          p {
            margin-top: 0 !important;
            margin-bottom: 0 !important;
          }
        `}
      </style>
    </div>
  );
}
