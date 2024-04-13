import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Hero from "../components/Hero";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <main
        className="flex-1 p-6 pt-8 flex flex-col md:items-center"
        style={{
          backgroundColor: "#fff",
          backgroundImage: `radial-gradient(#bfdeff 0.6px, transparent 0.8px)`,
          backgroundSize: "10px 10px",
        }}
      >
        <Hero />
      </main>
    </Layout>
  );
}
