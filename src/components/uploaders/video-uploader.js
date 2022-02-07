import { apps } from "@dash-incubator/dapp-sdk";

const video = () => {
  async function save(data) {
    let result = await apps.upload.video.save(
      await apps.upload.video.create(data)
    );
    console.log("congratulations your files has been uploaded", data);
    console.log(result);
  }
  return save();
};
export default video;
