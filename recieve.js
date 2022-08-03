import can from "socketcan";

const channel = can.createRawChannel('vcan0', true);

// Log any message
channel.addListener("onMessage", function(msg) { console.log(msg); } );

channel.start();
