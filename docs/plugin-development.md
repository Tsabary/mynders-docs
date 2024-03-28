---
sidebar_position: 3
---


# Plugin Development

Diving into plugin development for Mynders is an exciting journey. With the project structure set up by `create-mynders-app`, you have a comprehensive scaffold that supports the development of your plugin from the ground up. This chapter will guide you through understanding this structure and how to best utilize it to create plugins that seamlessly integrate with the Mynders platform.

## Project Structure Overview

Upon initializing your new project, you will find the following directories and files within your repository:

-   **`src/`**: This directory is the heart of your plugin, containing the source code and assets necessary for development.
    
    -   **`assets/`**: Holds your plugin's static assets. Initially, it includes images for development purposes only, which simulate the Mynders environment but aren't included in the final build. Feel free to add your own assets here; those you add will be included in the build and can be utilized in your deployed plugin.
    -   **`components/`**: A folder dedicated to organizing all the components of your plugin. It's where you'll spend most of your development time, creating and refining the elements that make up your plugin.
    -   **`context/`**: Holds the context providers, including the Mynders provider, essential for wrapping your plugin. This setup allows all props received by the plugin to be available throughout your components via the `useMynders` hook, eliminating the need for prop drilling.
    -   **`hooks/`**: A place for custom hooks, including the `useMynders` hook, which is crucial for accessing Mynders-specific functionality within your components.
    -   **`layout/`**: Contains the mockup layout of Mynders for development purposes. These files help simulate the platform's environment during development but are not included in the build.
    -   **`types/`**: Houses all TypeScript type definitions, ensuring your plugin development adheres to the expected data structures and types within the Mynders ecosystem.
    -   **`main.tsx`**: The entry file for the development server. It passes mock props and methods (like encryption and decryption methods) for development. In production, real ones are used, but these dummy functions mimic the interface without the underlying functionality.
    -   **`Plugin.tsx`**: The core entry point of your plugin and the root of what gets built. This file exports the Plugin component wrapped in the Mynders provider, integrating it into the Mynders ecosystem.
    -   **`styles.css`**: The main CSS file, currently containing only the imports for Tailwind base styles.
-   **`index.html`**: Used by the development server to serve your plugin in a simulated Mynders environment.
    
-   **Configuration Files**: Includes `package.json`, `postcss.config.js`, `tailwind.config.js`, `tsconfig.json`, and `vite.config.ts`. These files configure your project's dependencies, CSS preprocessing, TypeScript settings, and Vite build process, tailored to fit Mynders' expectations.
    

## Developing Your Plugin

-   **Creating Components**: Your primary development activity involves the `src/components/` directory. Here, you'll build the visual and functional elements of your plugin. Consider the user experience and how your plugin enhances the Mynders ecosystem.
-   **Utilizing Context and Hooks**: Leverage the `context/` and `hooks/` directories to manage state and access Mynders-specific functionality. The `useMynders` hook is particularly important for accessing user information, folder ID, and encryption/decryption methods.
-   **Styling Your Plugin**: Use `styles.css` and TailwindCSS for styling. TailwindCSS is integrated into your project, making it easy to apply utility-first styles for a consistent and responsive design.

## Testing and Iteration

-   Utilize the development server (`npm run dev`) to test your plugin in a simulated Mynders environment. It's crucial for assessing usability, design, and functionality.
-   Iteratively develop and test components, ensuring they meet both your standards and those of the Mynders platform.

## Conclusion

Plugin development for Mynders is a structured yet flexible process. By understanding and leveraging the provided project structure and tools, you can create plugins that significantly enhance the Mynders user experience. In the next chapters, we'll delve into the API reference, additional utilities provided by Mynders, and the steps for deploying your plugin.