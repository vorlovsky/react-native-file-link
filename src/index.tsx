import { NativeModules, Platform } from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-file-link' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo managed workflow\n';

const FileLink = NativeModules.FileLink
  ? NativeModules.FileLink
  : Platform.select({
      ios: new Proxy(
        {},
        {
          get() {
            throw new Error(LINKING_ERROR);
          },
        }
      ),
      default: new Proxy(
        {},
        {
          get() {
            Promise.reject(new Error('Not supported'));
          },
        }
      ),
    });

export function createHardLink(
  srcPath: String,
  destPath: String
): Promise<String> {
  return FileLink.createHardLink(srcPath, destPath);
}

export function createSymbolicLink(
  srcPath: String,
  destPath: String
): Promise<String> {
  return FileLink.createSymbolicLink(srcPath, destPath);
}

export function removeLink(destPath: String): Promise<String> {
  return FileLink.removeLink(destPath);
}
