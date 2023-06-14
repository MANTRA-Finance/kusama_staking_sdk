import fs from "fs";
import path from "path";
import { FireblocksSDK, PeerType, TransactionArguments, TransactionOperation, TransactionStatus } from "fireblocks-sdk";
import { KSMStaker } from "./src/ksm-staker";

const apiSecret = fs.readFileSync(path.resolve(__dirname, "./fireblocks_secret.key"), "utf8");
const apiKey = "45c887d5-bb2b-4700-8ece-4293993ff4c4";
const fireblocks = new FireblocksSDK(apiSecret, apiKey);
const ksmStaker = new KSMStaker(fireblocks, false);

(async () => {

    const vaultAccountId = "2"; // This is the vault account ID
    const amount = 1;   // This is the amount of KSM to unbond

    await ksmStaker.unbond(vaultAccountId, amount);

})().catch(console.log);