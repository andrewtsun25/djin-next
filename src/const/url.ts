import Config from './config';

const Urls: Record<string, string> = {
  AssetRoot: `https://storage.googleapis.com/${Config.StorageBucket}`,
  SoundCloudRoot: `https://soundcloud.com/${Config.SoundCloudUserName}`,
};

export { Urls };
