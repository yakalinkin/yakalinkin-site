import os from 'os';

const interfaces = os.networkInterfaces();

export const networkAddress = () => {
  for (const name of Object.keys(interfaces)) {
    for (const interfaceInfo of interfaces[name] || []) {
      const { address, family, internal } = interfaceInfo;
      if (family === 'IPv4' && !internal) {
        return address;
      }
    }
  }
};
