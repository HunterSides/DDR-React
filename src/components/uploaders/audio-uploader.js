import { apps } from "@dash-incubator/dapp-sdk";

const audio = (data) => {
  async function save(data) {
    let result = await apps.upload.audio.save(
      await apps.upload.audio.create(data)
    );
    console.log("congratulations your files has been uploaded", data);
    console.log(result);
  }
  return save();
};

export default audio;
/* type Input = {
                    audio?: File | { content: string, path: string }[] | string;
                    banner?: File;
                    compress?: boolean;
                    description?: string;
                    encrypted?: boolean;
                    keywords?: string[];
                    name?: string;
                    secret?: string;
                    thumbnail?: File;
                    transcoded?: boolean;
                };      
                 */
