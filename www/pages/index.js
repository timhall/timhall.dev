import React from 'react';
import Head from 'next/head';
import Header from '../components/header';
import Article from '../components/article';
import H2 from '../elements/h2';
import P from '../elements/p';
import A from '../elements/a';
import '../styles/index.css';

const projects = [
  {
    name: 'vba-blocks',
    link: 'https://github.com/vba-blocks/vba-blocks',
    description: 'A package manager and build tool for VBA'
  },
  {
    name: 'd3-composer',
    link: 'https://github.com/CSNW/d3-composer',
    description:
      'Functional chart components and a svg grid system for creating advanced visualizations'
  },
  {
    name: 'svelte-apollo',
    link: 'https://github.com/timhall/svelte-apollo',
    description: 'Svelte integration for Apollo GraphQL'
  },
  {
    name: 'VBA-Web',
    link: 'https://github.com/VBA-tools/VBA-Web',
    description:
      'The most-starred VBA project on GitHub, gives structured web queries to Office.'
  },
  {
    name: 'vba-test',
    link: 'https://github.com/VBA-tools/vba-test',
    description: 'Liked TDD so much, I ported Jasmine to Excel'
  },
  {
    name: 'and more!',
    link: 'https://github.com/timhall'
  }
];

const articles = [
  {
    name: 'Vectors Everywhere',
    link: 'https://timhall.github.io/articles/freebody/vectors/'
  },
  {
    name: 'Module Resolution',
    site: 'vba-blocks',
    link: 'https://www.vba-blocks.com/blog/2017/module-resolution/'
  }
];

const publications = [
  {
    name: "Master's Thesis",
    link: 'https://drum.lib.umd.edu/handle/1903/12027',
    description:
      'Manufacturability Analysis of Thermally-Enhanced Polymer Composite Heat Exchangers'
  },
  {
    name: 'DETC 2011 Conference Paper',
    link:
      'https://timhall.github.io/publications/A_New_Approach_for_Explicit_Construction_of_Moldability_-_Tim_Hall.pdf',
    description:
      'A New Approach for Explicit Construction of Moldability Based Feasibility Boundary for Polymer Heat Exchangers'
  },
  {
    name: 'MSEC 2012 Conference Paper',
    link:
      'https://timhall.github.io/publications/Development_of_a_Fiber_Orientation_Measurement_Methodology_-_Tim_Hall.pdf',
    description:
      'Development of a Fiber Orientation Measurement Methodology for Injection Molded Thermally-Enhanced Polymers'
  }
];

export default function Index() {
  return (
    <>
      <Head>
        <title>Tim Hall</title>
      </Head>
      <Header title="Tim Hall" />
      <Article>
        <P className="sm:text-center mt-2 mb-2 sm:mb-6 text-xl sm:text-2xl text-brand-600">
          I'm Tim Hall and I LOVE creating things.
        </P>
        <P>
          From LEGO as a little kid (and a big kid too), to a MS in Mechanical
          Engineering, to my recent journeys in programming, I'm obsessed with=
          creation and the opportunity to shape this world.
        </P>

        <H2>Contact</H2>
        <List>
          <ListItem>
            <A href="mailto:tim.hall.engr@gmail.com">tim.hall.engr@gmail.com</A>
          </ListItem>
        </List>

        <H2>Projects</H2>
        <List>
          {projects.map(project => (
            <ListItem>
              <Link {...project} />
            </ListItem>
          ))}
        </List>

        <H2>Articles</H2>
        <List>
          {articles.map(article => (
            <ListItem style={{ marginBottom: '0.5rem' }}>
              <Link {...article} />
            </ListItem>
          ))}
        </List>

        <H2>Publications</H2>
        <List>
          {publications.map(publication => (
            <ListItem>
              <Link {...publication} />
            </ListItem>
          ))}
        </List>
      </Article>
    </>
  );
}

function List(props) {
  const { className = '', ...attributes } = props;
  return <ul className={`my-2 px-4 ${className}`} {...attributes} />;
}

function ListItem(props) {
  const { className = '', ...attributes } = props;
  return <li className={`mb-4 ${className}`} {...attributes} />;
}

function Link(props) {
  const { name, link, site, description } = props;
  const external = isExternal(link);

  return (
    <>
      <A href={link} target={external && '_blank'} rel={external && 'noopener'}>
        {name}
      </A>
      {site && <span className="text-gray-600"> [{site}]</span>}
      {description && <p>{description}</p>}
    </>
  );
}

function isExternal(link) {
  return link.indexOf('http') === 0;
}
