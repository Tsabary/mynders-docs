import { Accordion } from "flowbite-react";
import { gradiantArrays } from "../constants/gradiant-arrays";
import { generateBackgroundPattern } from "../helpers/generateBackgroundPattern";

function Faq() {
  const data: { question: string; answer: React.ReactNode }[] = [
    {
      question: "Is Mynders free to use?",
      answer: (
        <div>
          Absolutely, Mynders offers a comprehensive free version that is here
          to stay, which allows you to use up to two plugins for free. If you
          wish to use more than two plugins, upgrade to one of our pro plans.
        </div>
      ),
    },
    {
      question: "How does the folder organization system work?",
      answer: (
        <div>
          Our folder system allows you to create unlimited folders and
          subfolders, offering you the flexibility to structure your data just
          how you need it. Whether it's for personal notes, project management,
          or any form of data, you can customize your organization scheme to
          match your workflow.
        </div>
      ),
    },
    {
      question: "Is my data secure with Mynders?",
      answer: (
        <div>
          Absolutely. Your data's security is our top priority. Every text
          input, voice memo, file, and image you share is protected through
          end-to-end encryption. This means that only you have the ability to
          access and understand your data.
          <br />
          <br />
          We guarantee that your personal information is never shared with third
          parties, ensuring that it remains private and secure.
        </div>
      ),
    },
    {
      question: "Can I use Mynders on my mobile device?",
      answer: (
        <div>
          Yes, Mynders is available for Android & iPhone users through the App
          Stores and offers a seamless mobile experience.
        </div>
      ),
    },
    {
      question: "Is there a desktop app available for Mynders?",
      answer: (
        <div>
          Absolutely! Mynders offers a dedicated desktop application for Windows
          users, providing an enhanced, native experience. Simply navigate to
          the download section to get the Windows version.
          <br />
          <br />
          <span className="font-semibold">For macOS:</span> We're currently
          developing a version of Mynders tailored for macOS. Stay tuned for its
          release, coming soon (real soon). This upcoming version is designed to
          offer Mac users the same robust, streamlined experience as on other
          platforms. Meanwhile, you're welcomed to use the web version.
          <br />
          <br />
          Our desktop app ensures you have all the tools you need for effective
          data management and organization, right at your fingertips.
        </div>
      ),
    },
    {
      question: "How can developers contribute to the Mynders platform?",
      answer: (
        <div>
          Developers are encouraged to join the Mynders community by creating
          and sharing their own plugins. Our development kit, complete with APIs
          and documentation, makes it easy to build plugins.
          <br />
          <br />
          Once developed, plugins can be submitted to our platform for review
          and then shared with the Mynders community, contributing to the
          ever-growing ecosystem.
        </div>
      ),
    },
    {
      question: "How can I contribute a feature suggestion to Mynders?",
      answer: (
        <div>
          We warmly welcome your suggestions and ideas for enhancing Mynders.
          Your input is invaluable as we strive to make Mynders the most
          effective tool for organizing your thoughts and projects.
          <br />
          <br />
          To share your ideas, please join our Discord community through this
          link:{" "}
          <a
            href="https://discord.gg/tMFZ5nMh"
            target="_blank"
            className="text-blue-600"
          >
            Join our Discord
          </a>
          . Your feedback could lead to the next great feature!
        </div>
      ),
    },
  ];

  return (
    <div id="accordion-collapse" data-accordion="collapse">
      <h2 id="accordion-collapse-heading-1">
        <button
          type="button"
          className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
          data-accordion-target="#accordion-collapse-body-1"
          aria-expanded="true"
          aria-controls="accordion-collapse-body-1"
        >
          <span>What is Flowbite?</span>
          <svg
            data-accordion-icon
            className="w-3 h-3 rotate-180 shrink-0"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
      </h2>
      <div
        id="accordion-collapse-body-1"
        className="hidden"
        aria-labelledby="accordion-collapse-heading-1"
      >
        <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Flowbite is an open-source library of interactive components built
            on top of Tailwind CSS including buttons, dropdowns, modals,
            navbars, and more.
          </p>
          <p className="text-gray-500 dark:text-gray-400">
            Check out this guide to learn how to{" "}
            <a
              href="/docs/getting-started/introduction/"
              className="text-blue-600 dark:text-blue-500 hover:underline"
            >
              get started
            </a>{" "}
            and start developing websites even faster with components on top of
            Tailwind CSS.
          </p>
        </div>
      </div>
      <h2 id="accordion-collapse-heading-2">
        <button
          type="button"
          className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
          data-accordion-target="#accordion-collapse-body-2"
          aria-expanded="false"
          aria-controls="accordion-collapse-body-2"
        >
          <span>Is there a Figma file available?</span>
          <svg
            data-accordion-icon
            className="w-3 h-3 rotate-180 shrink-0"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
      </h2>
      <div
        id="accordion-collapse-body-2"
        className="hidden"
        aria-labelledby="accordion-collapse-heading-2"
      >
        <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Flowbite is first conceptualized and designed using the Figma
            software so everything you see in the library has a design
            equivalent in our Figma file.
          </p>
          <p className="text-gray-500 dark:text-gray-400">
            Check out the{" "}
            <a
              href="https://flowbite.com/figma/"
              className="text-blue-600 dark:text-blue-500 hover:underline"
            >
              Figma design system
            </a>{" "}
            based on the utility classes from Tailwind CSS and components from
            Flowbite.
          </p>
        </div>
      </div>
      <h2 id="accordion-collapse-heading-3">
        <button
          type="button"
          className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
          data-accordion-target="#accordion-collapse-body-3"
          aria-expanded="false"
          aria-controls="accordion-collapse-body-3"
        >
          <span>
            What are the differences between Flowbite and Tailwind UI?
          </span>
          <svg
            data-accordion-icon
            className="w-3 h-3 rotate-180 shrink-0"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
      </h2>
      <div
        id="accordion-collapse-body-3"
        className="hidden"
        aria-labelledby="accordion-collapse-heading-3"
      >
        <div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            The main difference is that the core components from Flowbite are
            open source under the MIT license, whereas Tailwind UI is a paid
            product. Another difference is that Flowbite relies on smaller and
            standalone components, whereas Tailwind UI offers sections of pages.
          </p>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            However, we actually recommend using both Flowbite, Flowbite Pro,
            and even Tailwind UI as there is no technical reason stopping you
            from using the best of two worlds.
          </p>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Learn more about these technologies:
          </p>
          <ul className="ps-5 text-gray-500 list-disc dark:text-gray-400">
            <li>
              <a
                href="https://flowbite.com/pro/"
                className="text-blue-600 dark:text-blue-500 hover:underline"
              >
                Flowbite Pro
              </a>
            </li>
            <li>
              <a
                href="https://tailwindui.com/"
                rel="nofollow"
                className="text-blue-600 dark:text-blue-500 hover:underline"
              >
                Tailwind UI
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
  return (
    <div
      className="flex flex-col gap-2 w-full items-center md:p-6 overflow-hidden"
      style={generateBackgroundPattern(...gradiantArrays.white)}
    >
      {/* <Badge text="Frequently Asked Questions" /> */}
      <Accordion className="!bg-white !rounded-none max-w-6xl w-full">
        {data.map((qna) => (
          <Accordion.Panel className="!bg-white" key={qna.question}>
            <Accordion.Title>{qna.question}</Accordion.Title>
            <Accordion.Content>{qna.answer}</Accordion.Content>
          </Accordion.Panel>
        ))}
      </Accordion>
    </div>
  );
}

export default Faq;
