export default function a(props) {
  const { className = '', style = {}, ...attributes } = props;

  return (
    <>
      <a
        className={`no-underline border-b border-dashed text-brand-600 hover:border-solid ${className}`}
        {...attributes}
      />
      <style jsx>
        {`
          a {
            border-color: rgb(18, 138, 168);
            border-color: rgba(18, 138, 168, 0.3);
          }
        `}
      </style>
    </>
  );

  return;
}
