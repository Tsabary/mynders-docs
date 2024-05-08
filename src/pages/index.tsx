import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Hero from "../components/Hero";
import { generateBackgroundPattern } from "../helpers/generateBackgroundPattern";
import { gradiantArrays } from "../constants/gradiant-arrays";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <main
        className="flex-1 p-6 pt-8 flex flex-col md:items-center"
        style={generateBackgroundPattern(...gradiantArrays.white)}
      >
        <Hero />
        {/* <Faq /> */}
      </main>
    </Layout>
  );
}
