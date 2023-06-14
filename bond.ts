import fs from "fs";
import path from "path";
import { FireblocksSDK, PeerType, TransactionArguments, TransactionOperation, TransactionStatus } from "fireblocks-sdk";
import { KSMStaker } from "./src/ksm-staker";

const apiSecret = fs.readFileSync(path.resolve(__dirname, "./fireblocks_secret.key"), "utf8");
const apiKey = "45c887d5-bb2b-4700-8ece-4293993ff4c4";
const fireblocks = new FireblocksSDK(apiSecret, apiKey);
const ksmStaker = new KSMStaker(fireblocks, false);

(async () => {

    const vaultAccountId = "11"; // This is the stash vault account ID
    const amount = 35.1607;   // This is the amount of KSM to bond
    const controllerAddress = "EoKEJjfC6pGvxb7Wh3oNoBUVbLp2ZBn74zLwDrxDfc8sBDG"; // This is the address that will be able to control the staking
    const rewardAddress = ""; // Optional: This is the address that will receive the rewards

    await ksmStaker.bond(vaultAccountId, amount, controllerAddress);

})().catch(console.log);