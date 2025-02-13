import { PropsWithChildren } from 'react';

type FlexProps<C extends React.ElementType> = {
  as?: C;
  direction?: React.CSSProperties['flexDirection'];
  justify?: React.CSSProperties['justifyContent'];
  align?: React.CSSProperties['alignItems'];
  gap?: React.CSSProperties['gap'];
  wrap?: React.CSSProperties['flexWrap'];
  overrideStyle?: React.CSSProperties;
} & React.ComponentPropsWithoutRef<C>;

const Flex = <C extends React.ElementType = 'div'>({
  as,
  direction,
  justify,
  align,
  gap,
  wrap,
  overrideStyle,
  children,
  ...attributes
}: PropsWithChildren<FlexProps<C>>) => {
  const styles = {
    display: 'flex',
    flexDirection: direction,
    justifyContent: justify,
    alignItems: align,
    gap,
    flexWrap: wrap,
    ...overrideStyle,
  };

  const Component = as || 'div';

  return (
    <Component style={styles} {...attributes}>
      {children}
    </Component>
  );
};

export default Flex;
