export interface Config {
    date: string;
    safety: number;
    battery: number;
    remote_controller: number;
    transportation_platform: number;
  }
  
  export interface Item {
    serial_number: string;
    password: string;
    config: Config;
  }