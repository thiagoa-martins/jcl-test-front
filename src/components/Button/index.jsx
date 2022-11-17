import { Container } from "./styles";

export function Button({ title, children, ...rest}) {
  return (
    <Container type="button" {...rest}>
      {children} {title}
    </Container>
  );
}
