import { Html, Head, Preview, Body, Container, Heading, Text } from "@react-email/components"

export default function WelcomeEmail({ to }: { to: string }) {
  return (
    <Html>
      <Head />
      <Preview>Welcome</Preview>
      <Body style={{ backgroundColor: "#fff" }}>
        <Container style={{ padding: "24px" }}>
          <Heading style={{ margin: "0 0 8px" }}>Thanks for joining</Heading>
          <Text>We’ll be in touch at {to}.</Text>
        </Container>
      </Body>
    </Html>
  )
}
