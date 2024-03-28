import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <main
        className="flex-1"
        style={{
          backgroundColor: "#fff",
          backgroundImage: `radial-gradient(#bfdeff 0.6px, transparent 0.8px)`,
          backgroundSize: "10px 10px",
        }}
      >
        <div className="h-full w-full bg-red-600"></div>
      </main>
    </Layout>
  );
}
