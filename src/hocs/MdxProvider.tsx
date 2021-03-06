import React, { FunctionComponent, HTMLAttributes } from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import { MDXProvider } from '@mdx-js/react';

import Heading from '../components/Heading';
import Text from '../components/Text';

import * as allExports from '../components';
const scope = { ...allExports };

const components = {
  pre: (props: any) => <div {...props} />,
  code: ({ children }: any) => (
    <LiveProvider code={children} aria-label="Example code" scope={scope}>
      <LivePreview aria-label="Example code preview" style={{ border: '1px solid grey', padding: '8px' }} />
      <LiveEditor
        aria-label="Example code editor"
        style={{
          backgroundColor: 'black',
          caretColor: 'white',
          lineHeight: '1',
          fontSize: '0.875rem',
          marginBottom: '20px',
        }}
      />
      <LiveError />
    </LiveProvider>
  ),
  h1: (props: HTMLAttributes<HTMLHeadingElement>) => <Heading h1 marginTop="m" {...props} />,
  h2: (props: HTMLAttributes<HTMLHeadingElement>) => <Heading h2 {...props} />,
  h3: (props: HTMLAttributes<HTMLHeadingElement>) => <Heading h3 {...props} />,
  h4: (props: HTMLAttributes<HTMLHeadingElement>) => <Heading h4 {...props} />,
  h5: (props: HTMLAttributes<HTMLHeadingElement>) => <Heading h5 {...props} />,
  h6: (props: HTMLAttributes<HTMLHeadingElement>) => <Heading h6 {...props} />,
  p: (props: HTMLAttributes<HTMLHeadingElement>) => <Text {...props} />,
};

const MdxProvider: FunctionComponent = props => <MDXProvider components={components}>{props.children}</MDXProvider>;

export default MdxProvider;
