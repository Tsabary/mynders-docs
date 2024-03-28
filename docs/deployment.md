---
sidebar_position: 5
---


# Deployment

Deploying your Mynders plugin is the final step in making it a part of your Mynders experience. This process is quick and straightforward, immediately making the plugin available for your personal use within the Mynders platform. While your plugin won't be accessible to others just yet, you can fully use it in your own account. Future updates will provide options for sharing your creations with the Mynders community. Here's a guide on how to move your plugin from development to being actively used on Mynders..

## Building Your Plugin

1.  **Compile Your Plugin**: Before deployment, you need to compile your plugin into a format that Mynders can utilize. This is done by running the build command in your project directory:
        
    `npm run build` 
    
    This command generates a `*.umd.js` file in the `dist` folder. This file contains your plugin's compiled code, ready for deployment.
    
2.  **Check Your Build**: Ensure that the `*.umd.js` file is generated without build-time errors. This file is what you will upload to the Mynders developers portal. If there are any issues, review the build output for errors and resolve them before proceeding.
    

## Submitting Your Plugin

1.  **Navigate to the Developers Portal**: Open your web browser and go to [developers.mynders.com](https://developers.mynders.com/). If you haven't already, you will need to create a developer account or log in.
    
2.  **Plugin Submission**: In the portal, you’ll submit a new plugin. At this stage, you are required to provide:
    
    -   A **unique name** for your plugin.
    -   The **version** of your plugin.
    -   A **unique plugin ID** (e.g. `com.example.plugin`).
    -   The `*.umd.js` file.
3.  **Upload and Scan**: After you upload the `*.umd.js` file and enter the required details, the file undergoes a scan to ensure its safety. This process is automated, with the primary goal of protecting the Mynders platform and its users.
    

#### After Submission

-   **Availability**: Once the scan confirms the safety of your plugin, it becomes immediately available within your Mynders account for personal use.
    
-   **Future Public Sharing**: While currently plugins are only accessible to their developers, Mynders is working towards enabling developers to share their plugins with the broader community. This upcoming feature will allow for wider use and feedback, enhancing the ecosystem of available plugins.
    

## Best Practices

-   **Testing**: Thoroughly test your plugin in various real-world scenarios to ensure it functions as intended within the Mynders platform.
-   **Responsive Design**: Design your plugin with responsiveness in mind, ensuring a seamless user experience across different devices.
-   **Security**: Pay close attention to security practices, especially in data handling and user interactions, to maintain the integrity of the Mynders platform.
-   **Keep Updated**: Stay informed about updates to Mynders, including new features and development practices, to ensure your plugin remains compatible and utilizes the platform's full capabilities.

## Conclusion

Deploying your plugin is a straightforward process aimed at quickly integrating your work into the Mynders platform for personal use. This immediate deployment capability allows for real-time testing and refinement, setting the stage for future sharing capabilities. As Mynders evolves, your contributions as a developer will continue to play a crucial role in enriching the platform’s ecosystem.