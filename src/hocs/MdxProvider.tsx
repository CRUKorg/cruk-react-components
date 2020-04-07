import React, { FunctionComponent, HTMLAttributes } from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import { MDXProvider } from '@mdx-js/react';

import Avatar from '../components/Avatar';
import Badge from '../components/Badge';
import Box from '../components/Box';
import Button from '../components/Button';
import Checkbox from '../components/Checkbox';
import Collapse from '../components/Collapse';
import ErrorText from '../components/ErrorText';
import Flex from '../components/Flex';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Heading from '../components/Heading';
import Icon from '../components/Icon';
import Link from '../components/Link';
import Loader from '../components/Loader';
import Modal from '../components/Modal';
import Pagination from '../components/Pagination';
import PopOver from '../components/PopOver';
import ProgressBar from '../components/ProgressBar';
import RadioGroup from '../components/RadioGroup';
import Radio from '../components/Radio';
import Select from '../components/Select';
import Step from '../components/Step';
import Text from '../components/Text';
import TextField from '../components/TextField';
import Totaliser from '../components/Totaliser';
import UserBlock from '../components/UserBlock';

const components = {
  pre: (props: any) => <div {...props} />,
  code: ({ children }: any) => (
    <LiveProvider
      code={children}
      aria-label="Example code"
      scope={{
        Avatar,
        Badge,
        Button,
        Box,
        Checkbox,
        ErrorText,
        Footer,
        Flex,
        Heading,
        Header,
        Icon,
        Link,
        Loader,
        Modal,
        Pagination,
        PopOver,
        ProgressBar,
        Radio,
        RadioGroup,
        Select,
        Step,
        Text,
        TextField,
        Totaliser,
        UserBlock,
        Collapse,
      }}
    >
      <LivePreview aria-label="Example code preview" style={{ border: '1px solid grey', padding: '5px' }} />
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
  h1: (props: HTMLAttributes<{}>) => <Heading h1 marginTop="medium" {...props} />,
  h2: (props: HTMLAttributes<{}>) => <Heading h2 marginTop="medium" {...props} />,
  h3: (props: HTMLAttributes<{}>) => <Heading h3 marginTop="medium" {...props} />,
  h4: (props: HTMLAttributes<{}>) => <Heading h4 marginTop="medium" {...props} />,
  h5: (props: HTMLAttributes<{}>) => <Heading h5 marginTop="medium" {...props} />,
  h6: (props: HTMLAttributes<{}>) => <Heading h6 marginTop="medium" {...props} />,
  p: (props: HTMLAttributes<{}>) => <Text {...props} />,
};

const MdxProvider: FunctionComponent = props => <MDXProvider components={components}>{props.children}</MDXProvider>;

export default MdxProvider;
