import { Block, BlockLabel } from './block';

export default function Tip(props) {
  const { label = 'Tip', className = '', children, ...attributes } = props;

  return (
    <Block className={`border-green-500 ${className}`} {...attributes}>
      {label && <BlockLabel className="text-green-600">{label}</BlockLabel>}
      <p>{children}</p>

      <style jsx>
        {`
          p {
            margin-top: 0 !important;
            margin-bottom: 0 !important;
          }
        `}
      </style>
    </Block>
  );
}
