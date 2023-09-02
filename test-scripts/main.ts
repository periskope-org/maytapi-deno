import {
  MessageSendingOperationsApi,
  ServerConfiguration,
  createConfiguration,
} from "../index.ts";

const server = new ServerConfiguration<{ product_id: string }>(
  "https://api.maytapi.com/api/{product_id}",
  { product_id: "3b9b1047-19fd-46b5-ab6f-2488ae5e9553" }
);

export const maytapi_config = createConfiguration({
  baseServer: server,
  authMethods: {
    ApiKeyAuth: "952dcb09-a0f3-43ae-acaa-9703faed504b",
  },
});

const api = new MessageSendingOperationsApi(maytapi_config);

const phoneId = "30795";
const number = "919537851844";

async function main() {
  const res = await api.phoneIdSendMessagePost(phoneId, {
    toNumber: "919537851844",
    type: "vcard",
    message: {
      displayName: "Periskope Coordinator",
      vcard:
        "BEGIN:VCARD\nVERSION:3.0\nFN;CHARSET=UTF-8:Periskope Coordinator\nN;CHARSET=UTF-8:;Periskope;Coordinator;;\nTEL;TYPE=CELL:+919004389372\nREV:2020-01-23T11:09:14.782Z\nEND:VCARD",
    },
    // type: 'text',
    // toNumber: number,
    // message: 'Hello world 1',
  });

  console.log(res.success);
}

main();
