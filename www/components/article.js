export default function Article(props) {
  const { className = '', children, ...attributes } = props;

  return (
    <article
      className={`max-w-3xl overflow-auto mx-auto bg-white px-2 sm:px-8 ${className}`}
      {...attributes}
    >
      {children}

      <style jsx>{`
        article > :global(h1) {
          margin-top: 0.75rem;
          font-size: 1.875rem;
          font-weight: bold;
        }
        article > :global(h2) {
          margin-top: 0.75rem;
          font-size: 1.5rem;
          font-weight: bold;
        }
        article > :global(h3) {
          margin-top: 0.75rem;
          font-size: 1.25rem;
          font-weight: bold;
        }
        article :global(p) {
          margin-top: 1rem;
          margin-bottom: 1rem;
        }
        article :global(ul),
        article :global(ol) {
          margin-top: 1rem;
          margin-bottom: 1rem;
          margin-left: 1rem;
        }
        article :global(ul) {
          list-style-type: disc;
        }
        article :global(ol) {
          list-style-type: decimal;
        }
        article :global(a) {
          text-decoration: none;
          color: #107791;
          border-bottom-width: 1px;
          border-bottom-style: dashed;
          border-color: rgb(18, 138, 168);
          border-color: rgba(18, 138, 168, 0.3);
        }
        article :global(a:hover) {
          border-bottom-style: solid;
        }
        article :global(code) {
          padding: 0.1rem 0.3rem;
          background-color: #edf2f7;
          border-radius: 0.125rem;
          font-size: 0.875rem;
        }
        article :global(pre) {
          border-left: solid 2px #e2e8f0;
          padding: 0.25rem 0 0.25rem 0.75rem;
          max-width: 48rem;
          line-height: 1.375;
          word-wrap: normal;
          overflow: auto;
        }
        article :global(pre > code) {
          padding: 0;
          margin: 0;
          background-color: transparent;
          border-radius: 0;
          white-space: pre;
        }
        article :global(> p:first-child),
        article :global(> h2:first-child) {
          margin-top: 0;
        }
      `}</style>
    </article>
  );
}
