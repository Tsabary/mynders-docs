---
sidebar_position: 4
---

# API Reference

In this section, we'll detail the API functionalities available to your plugin within the Mynders ecosystem. Understanding and utilizing these APIs is crucial for developing plugins that not only integrate seamlessly with Mynders but also leverage its full capabilities to enhance user experience.

### User Information

- **`user`**: Provides information about the user currently using the plugin. This includes `_id` (user ID) and an optional `name` if it has been defined by the user. This allows your plugin to personalize the user experience.

### Folder Information

- **`folderId`**: The ID of the folder in which the plugin is currently being accessed. This is essential for ensuring that your plugin operates within the correct context and can manage data appropriately for each folder.
- **`isHome`**: A boolean value that is only set to true when the plugin is currently open in the user's home folder.
- **`isLosingFocus`**: A boolean value that is set to true when your component is losing focus by the user naviating to a child-folder. You can listen to this value changes in a useEffect to execute any actions you desie when that occurs (for example, closing an open modal). If the user naviates away from your plugin by going back to a parent folder, or by naviating to a different plugin in the same folder, your component will simply unmount.

### Data and File Encryption/Decryption

Mynders places a strong emphasis on security, especially when handling sensitive user data. The platform provides a set of encryption and decryption methods that your plugin can use:

- **`encryptData(data: string): string`**: Expects a string and returns an encrypted version of it. Use this method to securely store sensitive information.
- **`decryptData(data: string): string`**: Takes an encrypted string (previously encrypted with `encryptData`) and returns the decrypted version. Use this for securely retrieving stored information.
- **`encryptFile(file: Blob): string`**: Expects a `Blob`, and returns it as an encrypted text file. This method is useful for securely handling file uploads. Remember to keep the file's name (string), and the file type (MIME type) in your data, as you will need that information to succesfully decrypt the file back to its oiginal format.
- **`decryptFile(file: Blob, filename: string, fileType: string): Blob`**: Takes an encrypted `Blob` (previously encrypted with `encryptFile`), the file's name, and type (MIME type), returning it as the decrypted file in its original format. This allows for the secure download and viewing of files.

### Local Storage Management

To avoid conflicts with other plugins and ensure data integrity, Mynders provides methods for local storage management that guarantee unique key usage:

- **`setLocalStorage(key: string, data: string): void`**: Allows you to store data in the browser's local storage. This method ensures that your storage keys are unique to avoid clashes with other developers.
- **`getLocalStorage(key: string): string | null`**: Retrieves data from local storage. Returns `null` if no data is found for the specified key, ensuring your plugin can handle missing data gracefully.

### Accessing Mynders Functionality

All the above data and methods can be accessed within your plugin components using the `useMynders` hook. This hook is part of your plugin's environment, provided by wrapping your entire plugin in the `MyndersContextProvider`.

## Additional Utilities

Beyond the core APIs, Mynders offers utility methods and components which can be imported from the "mynders" package to further enhance your plugin:

- **`generateBackgroundPattern(bgColor: string, dotColor: string): CSSProperties`**: Generates a background pattern characteristic of Mynders. It can accept two hex strings for background and dot colors, allowing customization to fit your plugin's theme.
- **`resizeImage(file: Blob, maxWidth: number, blurRadius?: number): Blob`**: Resizes an image file. It takes a `Blob`, a maximum width (in pixels), and an optional `blurRadius` for a blurred effect, returning the resized image as a `Blob`.

## Components

For a more integrated user experience, Mynders provides styled form components that you are welcomed to use within your plugin:

### DragDropFilesContainer

**Description:**  
The `DragDropFilesContainer` is a React component designed to provide an interactive area for dragging and dropping files. It supports customizable text prompts and handles file drop events seamlessly, updating the UI based on user interactions.

**Props:**

- `children` (React.ReactNode): Child components or elements to be displayed within the container.
- `text` (string): A prompt displayed in the drop zone when a drag operation is detected; defaults to "Drop files here".
- `onDrop` (function): A callback function that is invoked when files are dropped into the container. It receives an array of `File` objects.

**Behavior:**

- **Drag Operations:** Detects and visually indicates when files are being dragged over the container. The prompt area becomes visible and shows the `text` when files are detected over the area.
- **File Drop:** Handles file drops by preventing default browser behavior, capturing the files, and invoking the `onDrop` callback with the files.
- **Drag Leave:** Ensures that the drag over visual cue is removed when the dragged items leave the container boundary without a drop.

**Usage:**

```javascript
<DragDropFilesContainer onDrop={handleFileDrop}>
  <YourChildComponent />
</DragDropFilesContainer>
```

**Note:** This component uses CSS classes for styling, which are defined in the project's CSS files. Ensure that the relevant styles are properly set up to achieve the desired visual effects.

### UserAvatar

**Description:**  
`UserAvatar` is a component that displays a user's avatar. It supports custom dimensions and border radius settings for the avatar. If no avatar URL is provided, a unique placeholder image is generated.

**Props:**

- `user` (object): A user object containing `id` (string) and `avatar` (string) properties.
- `size` (number): Dimension for the width and height of the avatar, defaulting to 32 pixels.
- `borderRadius` (number): The radius of the avatar's edges, defaulting to 12 pixels.

**Behavior:**

- **Image Display:** The component checks if a `user.avatar` URL is provided; if so, it displays the image from the URL. If not, it generates and displays a unique placeholder avatar using the Boring Avatar service.
- **Styling:** The avatar is styled to be round (controlled by `borderRadius`) and smoothly transitions if properties change.

**Usage:**

```javascript
<UserAvatar
  user={{ id: "user123", avatar: "path/to/avatar.jpg" }}
  size={40}
  borderRadius={20}
/>
```

**Note:** Ensure that the `user` object always contains a valid `id`. This ID is essential for generating the fallback avatar when no image URL is provided.

### ImagePicker

**Description:**  
The `ImagePicker` is a component designed to allow users to select and display images from their device. It provides customizable options for image display and supports specific file types. The component displays either a selected image or a customizable prompt if no image is selected.

**Props:**

- `setImage` (function): Callback to pass the selected image file to the parent component.
- `image` (File | undefined): The currently selected image file.
- `imageSrc` (string | undefined): URL of the image to be displayed.
- `prompt` (string): Text to display as a prompt when no image is selected; defaults to "Pick an image".
- `mimeTypes` (string[]): Array of accepted MIME types for the images; defaults to ["image/*"].
- `width` (number): Width of the image display area; defaults to 256 pixels.
- `height` (number): Height of the image display area; defaults to 256 pixels.

**Behavior:**

- **Image Selection:** Clicking the image area or prompt opens a file selection dialog. Selecting an image updates the displayed image and calls the `setImage` callback with the new image file.
- **Visual Feedback:** If an `imageSrc` or `image` is provided, it is displayed. Otherwise, a clickable prompt area with the specified dimensions and prompt text is shown.

**Usage:**

```javascript
<ImagePicker
  setImage={setImage}
  image={selectedImage}
  imageSrc={imageUrl}
  prompt="Click to select an image"
  mimeTypes={["image/png", "image/jpeg"]}
  width={300}
  height={300}
/>
```

**Note:** Customize the `mimeTypes` to restrict the types of images that can be uploaded, ensuring compatibility with your application's needs.

### RecordAudioButton

**Description:**  
The `RecordAudioButton` is an interactive component designed for recording audio. It handles user permissions, manages audio recording sessions, and processes the audio data. The component visually indicates its current state and provides feedback on the recording process.

**Props:**

- `isRecording` (boolean): Indicates whether recording is currently active.
- `setIsRecording` (function): Callback to toggle the recording state.
- `isLoading` (boolean): Shows whether the component is in the process of loading or processing data.
- `setIsLoading` (function): Callback to update the loading state.
- `setTime` (function): Callback to set the recording duration, typically used for display purposes.
- `onRecordingProcessed` (function): Callback that receives the recorded audio as a Blob when recording stops.

**Behavior:**

- **Permission Request:** On initial interaction, the component requests microphone access. If permissions are not granted, an icon indicating a disabled microphone appears.
- **Start/Stop Recording:** The button toggles recording on and off. When clicked:
  - If not recording, it starts the recording session.
  - If currently recording, it stops the recording, processes the audio, and resets the recording duration.
- **Visual Feedback:** Changes in recording status are visually indicated:
  - The button is red while recording.
  - The button is black when not recording and pulsates during loading.

**Usage:**

```javascript
<RecordAudioButton
  isRecording={isRecording}
  setIsRecording={setIsRecording}
  isLoading={isLoading}
  setIsLoading={setIsLoading}
  setTime={setTime}
  onRecordingProcessed={handleAudioData}
/>
```

**Note:** Ensure that your application gracefully handles errors such as permission denials or unsupported browser features.
