export interface Config {
    date: string;
    safety: number;
    battery: number;
    remote_controller: number;
    transportation_platform: number;
  }
  
  export interface EboxItem {
    serial_number: string;
    password: string;
    config: Config;
  }


  export interface LiftbotItem {
    status: string;
    version: string;
    serial_number: string;
  }
