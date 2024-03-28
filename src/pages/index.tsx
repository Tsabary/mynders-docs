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
        className="flex-1 p-6 flex flex-col md:items-center"
        style={{
          backgroundColor: "#fff",
          backgroundImage: `radial-gradient(#bfdeff 0.6px, transparent 0.8px)`,
          backgroundSize: "10px 10px",
        }}
      >
        <div className="w-full flex justify-start md:justify-center gap-2">
          <a
            href="https://mynders.com"
            className="bg-white px-3 py-1 rounded-3xl text-sm text-gray-500 cursor-pointer hover:no-underline"
            style={{ border: "1px solid #6b7280" }}
          >
            Everyone Else
          </a>
          <div
            className="bg-white px-3 py-1 rounded-3xl text-sm shadow-lg shadow-purple-500/20 font-semibold text-purple-600 cursor-pointer"
            style={{ border: "1px solid #c084fc" }}
          >
            Developers
          </div>
        </div>
      </main>
    </Layout>
  );
}
