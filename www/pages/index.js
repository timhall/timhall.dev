import React from 'react';
import Head from 'next/head';
import Header from '../components/header';
import Main from '../components/main';
import Link from '../components/link';
import '../styles/index.css';

const projects = [
  {
    name: 'vba-blocks',
    link: 'https://github.com/vba-blocks/vba-blocks',
    description: 'a package manager and build tool for VBA'
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
    description: 'Svelte integration for apollo GraphQL'
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
    link: '/articles/freebody/vectors'
  },
  {
    name: 'Module Resolution',
    site: 'vba-blocks',
    link: 'https://www.vba-blocks.com/blog/2017/module-resolution'
  }
];

const publications = [
  {
    name: "Master's Thesis",
    link: 'https://drum.lib.umd.edu/handle/1903/12027',
    description:
      'Manufacturability analysis of Thermally-Enhanced Polymer Composite Heat Exchangers'
  },
  {
    name: 'DETC 2011 Conference Paper',
    link:
      'https://timhall.github.io/publications/a_New_approach_for_Explicit_Construction_of_Moldability_-_Tim_Hall.pdf',
    description:
      'a New approach for Explicit Construction of Moldability Based Feasibility Boundary for Polymer Heat Exchangers'
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
      <Main>
        <p className="sm:text-center mt-2 mb-2 sm:mb-6 text-xl sm:text-2xl text-brand-600">
          I'm Tim Hall and I LOVE creating things.
        </p>
        <p className="my-4">
          From LEGO as a little kid (and a big kid too), to a MS in Mechanical
          Engineering, to my recent journeys in programming, I'm obsessed with
          creation and the opportunity to shape this world.
        </p>

        <Heading>Contact</Heading>
        <List>
          <ListItem>
            <Link href="mailto:tim.hall.engr@gmail.com">
              tim.hall.engr@gmail.com
            </Link>
          </ListItem>
        </List>

        <Heading>Projects</Heading>
        <List>
          {projects.map(project => (
            <ListItem key={project.link}>
              <Details {...project} />
            </ListItem>
          ))}
        </List>

        <Heading>Articles</Heading>
        <List>
          {articles.map(article => (
            <ListItem key={article.link} style={{ marginBottom: '0.5rem' }}>
              <Details {...article} />
            </ListItem>
          ))}
        </List>

        <Heading>Publications</Heading>
        <List>
          {publications.map(publication => (
            <ListItem key={publication.link}>
              <Details {...publication} />
            </ListItem>
          ))}
        </List>
      </Main>
    </>
  );
}

function Heading(props) {
  const { children } = props;
  return <h2 className="mt-3 text-2xl font-bold">{children}</h2>;
}

function List(props) {
  const { children } = props;
  return <ul className="my-2 px-4">{children}</ul>;
}

function ListItem(props) {
  const { className = '', ...attributes } = props;
  return <li className={`mb-4 ${className}`} {...attributes} />;
}

function Details(props) {
  const { name, link, site, description } = props;
  const external = isExternal(link);

  return (
    <>
      <Link
        href={link}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener' : undefined}
      >
        {name}
      </Link>
      {site && <span className="text-gray-600"> [{site}]</span>}
      {description && <p>{description}</p>}
    </>
  );
}

function isExternal(link) {
  return link.indexOf('http') === 0;
}
