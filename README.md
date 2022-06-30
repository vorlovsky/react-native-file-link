# react-native-file-link

react-native-file-link provides support to create hard/soft links on iOS from React Native app

## Installation

```sh
yarn add react-native-file-link
```

## Usage

````js
import { createHardLink, createSymbolicLink, removeLink } from "react-native-file-link";

// ...
const fileName = <path-to-a-file-you-want-to-create-link-to>;
const hardLinkPath = fileName + '.lnk'; // example: hard link will have the same file path, same name and a custom extension added (check if there is no such file existing already)
const softLinkPath = <some-other-file-path>; // example: soft link will have different file path (check if there is no such file existing already)

await createHardLink(fileName, hardLinkPath);
await createSymbolicLink(fileName, softLinkPath);

await removeLink(hardLinkPath) // removing hard link
await removeLink(softLinkPath) // removing soft link
````

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
