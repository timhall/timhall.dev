import Head from 'next/head';
import Header from './header';
import Article from './article';

export default function Post(props) {
  const { title, meta, children } = props;

  return (
    <>
      <Head>
        <title>{title ? `${title} | Tim Hall` : 'Tim Hall'}</title>
      </Head>
      <Header title={title} meta={meta} />
      <Article>{children}</Article>
    </>
  );
}
