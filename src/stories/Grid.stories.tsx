import { Meta, StoryObj } from '@storybook/react';
import Grid from '../lib/Grid/Grid';
import React from 'react';

const children = [
  { content: 'content1', color: '#d5d2ff', area: 1 },
  { content: 'content2', color: '#b5aeff', area: 1 },
  { content: 'content3', color: '#9f98ff', area: 1 },
  { content: 'content4', color: '#7d74ff', area: 2 },
  { content: 'content5', color: '#6f65ff', area: 2 },
  { content: 'content6', color: '#6054fd', area: 2 },
  { content: 'content7', color: '#5e52fd', area: 3 },
  { content: 'content8', color: '#4d40ff', area: 3 },
  { content: 'content9', color: '#493cff', area: 3 },
];

const meta = {
  component: Grid,
  title: 'Grid',
  argTypes: {
    as: {
      control: 'select',
      options: ['article', 'div', 'a', 'button'],
      description: 'Container 컴포넌트의 `HTML Tag`. Tag에 맞춰 `attributes`의 자동 완성이 지원됩니다.',
    },
    rows: {
      control: 'select',
      options: [1, 2, 3, 4, 'repeat(5, minmax(auto, 1fr))'],
      description: '트랙의 행 배치',
    },
    columns: {
      control: 'select',
      options: [1, 2, 3, 4, 'repeat(5, minmax(auto, 1fr))'],
      description: ' 트랙의 열 배치',
    },
    areas: { control: 'text', description: '영역 배치' },
    rowGap: { control: 'select', options: [0, 10, '20px', 30], description: '행 셀 사이의 간격' },
    columnGap: { control: 'select', options: [0, 10, '20px', 30], description: '열 셀 사이의 간격' },
    gap: { control: 'select', options: [0, 10, '20px', 30], description: '셀 사이의 간격' },
  },
} satisfies Meta<typeof Grid>;

export default meta;
type Story = StoryObj<typeof Grid>;

export const Default: Story = {
  args: {
    as: 'div',
    rows: 3,
    columns: 3,
    gap: 10,
    children: (
      <>
        {children.map(({ color, content }) => (
          <div style={{ backgroundColor: color }}>{content}</div>
        ))}
      </>
    ),
  },
  render: (props) => <Grid {...props} />,
};

export const AreasWithItems: Story = {
  args: {
    as: 'div',
    areas: "'1 1 1' '2 2 2' '3 3 3'",
    gap: 10,
    children: (
      <>
        {children.map(({ color, content, area }) => (
          <Grid.Item area={area} style={{ backgroundColor: color }}>
            {content}
          </Grid.Item>
        ))}
      </>
    ),
  },
  render: (props) => <Grid {...props} />,
};
