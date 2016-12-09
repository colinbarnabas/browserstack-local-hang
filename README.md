# browserstack-local-hang

This repo demonstrates an issue with browserstack-local in Docker, whereby the tunnel fails to stop (hangs indefnitely).

## Test
```
npm start
```
The result should be something like [./example_log.txt](./example_log.txt); in particular there is no "Tunnel stopped" output and the container
hangs until killed.