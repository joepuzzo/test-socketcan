# Test Socketcan

This is a test repo to play with socketcan

## Resources

* This is based on [this](https://www.youtube.com/watch?v=h8JVC13S66g&t=71s) 

## Info

* This simulates the speed and rev limiter of a car where the id of the can node is 500

## Usefull Commands

```bash

sudo modprobe vcan
sudo ip link add dev vcan0 type vcan
sudo ip link set up vcan0

candump vcan0

cansniffer vcan0

```
