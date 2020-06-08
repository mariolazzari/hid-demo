const hid = require("node-hid");
const { Hidstream, Keyboard, KeyboardCharacters } = require("node-hid-stream");

// show all connected devices
const devices = hid.devices();

console.log(devices);
console.log("Total devices:", devices.length);

// read from
/*
device = new hid.HID(1739, 15);
console.log(device.getDeviceInfo());

device.on("data", (data) => {
  console.log(data);
});

device.on("error", (error) => {
  console.log(error);
});
*/

// keyboard
const keyboard = { vendorId: 1121, productId: 16 };
const kbStream = new KeyboardCharacters(keyboard);
kbStream.on("data", (data) => {
  console.log("test", data);
});
