---
sidebar_position: 4
---



# API Reference

In this section, we'll detail the API functionalities available to your plugin within the Mynders ecosystem. Understanding and utilizing these APIs is crucial for developing plugins that not only integrate seamlessly with Mynders but also leverage its full capabilities to enhance user experience.

### User Information

-   **`user`**: Provides information about the user currently using the plugin. This includes `_id` (user ID) and an optional `name` if it has been defined by the user. This allows your plugin to personalize the user experience.
    
-   **`folderId`**: The ID of the folder in which the plugin is currently being accessed. This is essential for ensuring that your plugin operates within the correct context and can manage data appropriately for each folder.
    

### Data and File Encryption/Decryption

Mynders places a strong emphasis on security, especially when handling sensitive user data. The platform provides a set of encryption and decryption methods that your plugin can use:

-   **`encryptData(data: string): string`**: Expects a string and returns an encrypted version of it. Use this method to securely store sensitive information.
    
-   **`decryptData(data: string): string`**: Takes an encrypted string (previously encrypted with `encryptData`) and returns the decrypted version. Use this for securely retrieving stored information.
    
-   **`encryptFile(file: Blob, filename: string, fileType: string): string`**: Expects a `Blob`, the file's name (string), and the file type (MIME type), returning it as an encrypted text file. This method is useful for securely handling file uploads.
    
-   **`decryptFile(file: Blob, filename: string, fileType: string): Blob`**: Takes an encrypted `Blob` (previously encrypted with `encryptFile`), the file's name, and type (MIME type), returning it as the decrypted file in its original format. This allows for the secure download and viewing of files.
    

### Local Storage Management

To avoid conflicts with other plugins and ensure data integrity, Mynders provides methods for local storage management that guarantee unique key usage:

-   **`setLocalStorage(key: string, data: string): void`**: Allows you to store data in the browser's local storage. This method ensures that your storage keys are unique to avoid clashes with other developers.
    
-   **`getLocalStorage(key: string): string | null`**: Retrieves data from local storage. Returns `null` if no data is found for the specified key, ensuring your plugin can handle missing data gracefully.
    

### Accessing Mynders Functionality

All the above data and methods can be accessed within your plugin components using the `useMynders` hook. This hook is part of your plugin's environment, provided by wrapping your entire plugin in the `MyndersContextProvider`.

## Additional Utilities

Beyond the core APIs, Mynders offers utility methods and components which can be imported from the "mynders" package to further enhance your plugin:

-   **`generateBackgroundPattern(bgColor: string, dotColor: string): CSSProperties`**: Generates a background pattern characteristic of Mynders. It can accept two hex strings for background and dot colors, allowing customization to fit your plugin's theme.
    
-   **`resizeImage(file: Blob, maxWidth: number, blurRadius?: number): Blob`**: Resizes an image file. It takes a `Blob`, a maximum width (in pixels), and an optional `blurRadius` for a blurred effect, returning the resized image as a `Blob`.
    

## Components

For a more integrated user experience, Mynders provides styled form components that you are welcomed to use within your plugin:

-   **`DragDropFilesContainer`**: A component that enables drag-and-drop file functionality. It accepts children, an `onDrop` method to handle the file array, and an optional text string to display during drag-over.
    
-   **Form Components**: Include `LabeledInput`, `LabeledTextArea`, and `LabeledPasswordInput` for consistent styling across plugins.