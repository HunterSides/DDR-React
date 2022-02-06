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
/**function when using usestate initialized 
export const init = async (initialized) => {
  if (initialized) {
    return;
  }
  console.log("1", initialized);
  initialized = await user.session.start();
  console.log("2", initialized);
  if (initialized) {
    await apps.upload.register();
    console.log("3", initialized);
  } else {
    setTimeout(init, 1000 * 30);
    console.log("4", initialized);
  }
};


  const Uploader = () => {
  const[initialized, setInitialized] = useState(false);

  useEffect(() => {
    init(initialized).then(setInitialized(true))
  }, [initialized]);
  return <></>;
};

export default Uploader;

*/
