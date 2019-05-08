export default function a(props) {
  const { className = '', style = {}, ...attributes } = props;

  return (
    <>
      <a
        className={`no-underline border-b border-dashed ${className}`}
        {...attributes}
      />
      <style jsx>
        {`
          a {
            color: #107791;
            border-color: rgb(18, 138, 168);
            border-color: rgba(18, 138, 168, 0.3);
          }
          a:hover {
            border-bottom-style: solid;
          }
        `}
      </style>
    </>
  );

  return;
}
