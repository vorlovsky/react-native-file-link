import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import {
  createHardLink,
  createSymbolicLink,
  removeLink,
} from 'react-native-file-link';
import RNFS, { DocumentDirectoryPath } from 'react-native-fs';

export default class App extends React.PureComponent {
  state = {};

  async writeFile(path, content) {
    await RNFS.writeFile(path, content, 'ascii');

    console.log(`Written string: ${content}`);
  }

  async readFile(path, message) {
    const readResult = await RNFS.readFile(path, 'ascii');

    console.log(`${message}: ${readResult}`);
  }

  async readDir(path) {
    const files = await RNFS.readDir(path);

    console.log('Files:');
    files.forEach((file) => console.log(file.name, file.size));
  }

  async unlink(path) {
    await RNFS.unlink(path);
  }

  async componentDidMount() {
    const filePath = DocumentDirectoryPath + '/test';
    const fileContent = 'test string';

    const hardLinkPath = filePath + '.hard';
    const softLinkPath = filePath + '.soft';

    await this.writeFile(filePath, fileContent);

    await createHardLink(filePath, hardLinkPath).catch((error) =>
      console.log(error)
    );

    await this.readFile(hardLinkPath, `Read string (hard link)`);

    await createSymbolicLink(filePath, softLinkPath).catch((error) =>
      console.log(error)
    );

    await this.readFile(softLinkPath, `Read string (symbolic link)`);

    await this.readDir(DocumentDirectoryPath);

    await this.unlink(filePath);

    await removeLink(hardLinkPath).catch((error) => console.log(error));
    await removeLink(softLinkPath).catch((error) => console.log(error));
  }

  render() {
    return <View style={styles.container}></View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
