import { Button, Layout, Typography } from "antd";
import { useCreateProject } from "../hooks/mutations/useCreateProject";

const { Header, Footer, Content } = Layout;
const { Title, Text } = Typography;

const headerStyle = {
  height: 64,
  padding: "0 40px",
  background: "linear-gradient(90deg, #001529, #003a8c)",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
};

const layoutStyle = {
  minHeight: "100vh",
  background: "linear-gradient(135deg, #e6f4ff, #f5f7fa)",
};

const contentStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "20px",
  textAlign: "center",
  padding: "40px",
};

const cardStyle = {
  background: "rgba(255,255,255,0.9)",
  backdropFilter: "blur(10px)",
  padding: "45px 35px",
  borderRadius: "16px",
  boxShadow: "0 15px 40px rgba(0,0,0,0.12)",
  maxWidth: "420px",
  width: "100%",
  transition: "all 0.3s ease",
  border: "1px solid rgba(255,255,255,0.3)",
};

const buttonStyle = {
  width: "100%",
  height: "48px",
  fontWeight: "600",
  borderRadius: "10px",
  background: "linear-gradient(90deg, #1677ff, #69b1ff)",
  border: "none",
  boxShadow: "0 6px 15px rgba(22,119,255,0.4)",
  transition: "all 0.3s ease",
};

const footerStyle = {
  textAlign: "center",
  background: "#001529",
  color: "#aaa",
  fontSize: "13px",
  letterSpacing: "0.5px",
};
export const CreateProject = () => {
  const { createProjectMutation, isPending } = useCreateProject();

  async function handleCreateProject() {
    try {
      await createProjectMutation();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Layout style={layoutStyle}>
      
      {/* Header */}
      <Header style={headerStyle}>
        <Title level={4} style={{ color: "#fff", margin: 0, fontWeight: "600" }}>
          CodeCollab
        </Title>
        <Text style={{ color: "#d6e4ff" }}>Dashboard</Text>
      </Header>

      {/* Content */}
      <Content style={contentStyle}>
        <div
          style={cardStyle}
          onMouseEnter={(e) =>
            (e.currentTarget.style.transform = "translateY(-5px)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.transform = "translateY(0px)")
          }
        >
          <Title level={3} style={{ marginBottom: "10px" }}>
            🚀 Create New Project
          </Title>

          <Text type="secondary" style={{ fontSize: "14px" }}>
            Start a new collaborative coding workspace instantly
          </Text>

          <div style={{ marginTop: "25px" }}>
            <Button
                type="primary"
                size="large"
                loading={isPending}
                onClick={handleCreateProject}
                style={buttonStyle}
                onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.03)";
                    e.currentTarget.style.background =
                    "linear-gradient(90deg, #0958d9, #4096ff)";
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.background =
                    "linear-gradient(90deg, #1677ff, #69b1ff)";
                }}
                >
                Create Playground
            </Button>
          </div>
        </div>
      </Content>

      {/* Footer */}
      <Footer style={footerStyle}>
        CodeCollab ©2026 Created by Akshay
      </Footer>

    </Layout>
  );
};