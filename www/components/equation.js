import Mathjax from 'react-mathjax';

export default function Equation(props) {
  const { formula } = props;

  return (
    <Mathjax.Provider>
      <Mathjax.Node formula={formula} />
    </Mathjax.Provider>
  );
}
