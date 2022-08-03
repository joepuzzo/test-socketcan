import can from "socketcan";

const channel = can.createRawChannel('vcan0', true);

function dumpPacketOG(msg) {
  console.log('(' + (msg.ts_sec + msg.ts_usec / 1000000).toFixed(6) + ') ' +
    toHex(msg.id).toUpperCase() + '#' + msg.data.toString('hex').toUpperCase());
}

const splitString = ( str ) => {
  return str.match(/.{1,2}/g).join(' ');
}

const parse = ( buff ) => {

  const revs = buff.readUIntBE(0, 4).toString(10);

  const speed = buff.readUIntBE(4, 2).toString(10);

  return `revs: ${revs}, speed: ${speed}`

}

function dumpPacket(msg) {

  //console.log(msg)

  const buff = msg.data

  // Pretty string
	const pretty = splitString( buff.toString('hex') );

  // Parsed
  const parsed = parse( buff );

  console.log(`ID: ${msg.id}    Data: ${pretty}    Parsed: ${parsed}`);
}


channel.addListener("onMessage", dumpPacket);

channel.start();
