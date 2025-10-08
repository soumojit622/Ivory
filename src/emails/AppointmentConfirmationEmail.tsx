import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";

interface AppointmentConfirmationEmailProps {
  doctorName: string;
  appointmentDate: string;
  appointmentTime: string;
  appointmentType: string;
  duration: string;
  price: string;
}

function AppointmentConfirmationEmail({
  doctorName,
  appointmentDate,
  appointmentTime,
  appointmentType,
  duration,
  price,
}: AppointmentConfirmationEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Your dental appointment at Ivory has been confirmed</Preview>
      <Body style={main}>
        <Container style={container}>
          {/* Logo Section */}
          <Section style={logoContainer}>
            <Img
              src="https://ibb.co/FqsyxNTg/logo.png"
              width="50"
              height="50"
              alt="Ivory"
              style={logo}
            />
            <Text style={logoText}>Ivory</Text>
          </Section>

          {/* Heading */}
          <Heading style={h1}>Appointment Confirmed 🦷</Heading>

          {/* Greeting */}
          <Text style={text}>Hello,</Text>
          <Text style={text}>
            Your dental appointment has been successfully scheduled. Here are
            your appointment details:
          </Text>

          {/* Appointment Details */}
          <Section style={appointmentDetails}>
            <Text style={detailLabel}>Doctor</Text>
            <Text style={detailValue}>{doctorName}</Text>

            <Text style={detailLabel}>Type</Text>
            <Text style={detailValue}>{appointmentType}</Text>

            <Text style={detailLabel}>Date</Text>
            <Text style={detailValue}>{appointmentDate}</Text>

            <Text style={detailLabel}>Time</Text>
            <Text style={detailValue}>{appointmentTime}</Text>

            <Text style={detailLabel}>Duration</Text>
            <Text style={detailValue}>{duration}</Text>

            <Text style={detailLabel}>Cost</Text>
            <Text style={detailValue}>{price}</Text>

            <Text style={detailLabel}>Location</Text>
            <Text style={detailValue}>Ivory Dental Center</Text>
          </Section>

          {/* Instructions */}
          <Text style={text}>
            Kindly arrive 10-15 minutes before your scheduled time. If you need
            to reschedule or cancel, please contact us at least 24 hours in
            advance.
          </Text>

          {/* Call-to-Action Button */}
          <Section style={buttonContainer}>
            <Link
              style={button}
              href={process.env.NEXT_PUBLIC_APP_URL + "/appointments"}
            >
              View My Appointments
            </Link>
          </Section>

          {/* Footer */}
          <Text style={footer}>
            Best regards,
            <br />
            The Ivory Team
          </Text>

          <Text style={footerText}>
            Questions? Contact us at{" "}
            <Link href="mailto:support@ivory.com" style={supportLink}>
              support@ivory.com
            </Link>
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

export default AppointmentConfirmationEmail;

// ================= Styles =================
const main = {
  backgroundColor: "#f7f8fa",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
  padding: "20px 0",
};

const container = {
  margin: "0 auto",
  padding: "24px",
  maxWidth: "600px",
  backgroundColor: "#ffffff",
  borderRadius: "12px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
};

const logoContainer = {
  textAlign: "center" as const,
  marginBottom: "32px",
};

const logo = {
  borderRadius: "12px",
};

const logoText = {
  fontSize: "22px",
  fontWeight: "700",
  color: "#2563eb",
  marginLeft: "12px",
  display: "inline-block",
};

const h1 = {
  color: "#1f2937",
  fontSize: "26px",
  fontWeight: "700",
  textAlign: "center" as const,
  margin: "20px 0",
};

const text = {
  color: "#374151",
  fontSize: "16px",
  lineHeight: "26px",
  margin: "12px 0",
};

const appointmentDetails = {
  backgroundColor: "#f9fafb",
  border: "1px solid #e5e7eb",
  borderRadius: "10px",
  padding: "24px",
  margin: "24px 0",
};

const detailLabel = {
  color: "#6b7280",
  fontSize: "14px",
  fontWeight: "500",
  margin: "6px 0 2px 0",
};

const detailValue = {
  color: "#1f2937",
  fontSize: "16px",
  fontWeight: "600",
  margin: "0 0 12px 0",
};

const buttonContainer = {
  textAlign: "center" as const,
  margin: "32px 0",
};

const button = {
  backgroundColor: "#2563eb",
  borderRadius: "8px",
  color: "#ffffff",
  fontSize: "16px",
  fontWeight: "600",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "inline-block",
  padding: "14px 28px",
};

const footer = {
  color: "#374151",
  fontSize: "16px",
  lineHeight: "26px",
  margin: "32px 0 8px 0",
  textAlign: "center" as const,
};

const footerText = {
  color: "#6b7280",
  fontSize: "14px",
  lineHeight: "24px",
  margin: "0",
  textAlign: "center" as const,
};

const supportLink = {
  color: "#2563eb",
  textDecoration: "none",
};
