import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/components";

type EmailTemplateProps = {
  message: string;
  senderEmail: string;
}

const EmailTemplate = ({message, senderEmail}: EmailTemplateProps) => {
  return (
    <Html>
      <Preview>New Message from your portfolio site</Preview>
      <Tailwind>
        <Body className="bg-gray-100 text-black">
          <Container>
            <Section className="bg-white borderBlack my-10 px-10 rounded-md">
              <Heading className="leading-tight">You received the following message from the contact form</Heading>
              <Text>{message}</Text>
              <Hr/>
              <Text>The sender email is: {senderEmail}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}

export default EmailTemplate