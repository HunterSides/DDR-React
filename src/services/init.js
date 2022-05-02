import { apps, user } from "@dash-incubator/dapp-sdk";

let initialized = false;

const init = async () => {
  if (initialized) {
    return;
  }

  initialized = await user.session.start();

  if (initialized) {
    await apps.upload.register();
    console.log("tDash founds, all relevant contract info cached");
  } else {
    console.log(
      `Deposit tDash in <b>${user.session.wallet.address}</b> to continue`
    );
    setTimeout(init, 1000 * 30);
  }
};

export default init;
