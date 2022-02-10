import { apps } from "@dash-incubator/dapp-sdk";

const image = () => {
  async function save(data) {
    let result = await apps.upload.image.save(
      await apps.upload.image.create(data)
    );
    console.log("congratulations your files has been uploaded", data);
    console.log(result);
  }
  return save();
};

export default image;
