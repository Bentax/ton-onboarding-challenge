import {Address, TonClient} from "ton";
import {getHttpEndpoint} from "@orbs-network/ton-access";

async function main () {

  const wallet = Address.parse('kQBqASax75JOWlfKz8aNuHnNtEld2RD8PE0t5ToZR0R_cQjo');
  const collection = Address.parse('EQDk8N7xM5D669LC2YACrseBJtDyFqwtSPCNhRWXU7kjEptX');

  // get the decentralized RPC endpoint in Testnet
  const endpoint = await getHttpEndpoint({
    network: "testnet",
  });

  // initialize ton library
  const client = new TonClient({ endpoint });


}

main()