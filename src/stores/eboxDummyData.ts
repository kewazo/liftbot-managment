import type { EboxItem } from '../types';

export const dummyItems: EboxItem[] = [
  {
    serial_number: 'KR1.2s-2211-001',
    password: 'password1',
    config: {
      date: '2024-01-01T00:00:00',
      safety: 1,
      battery: 2,
      remote_controller: 2,
      transportation_platform: 2
    }
  },
  {
    serial_number: 'KR1.2s-2211-002',
    password: 'password2',
    config: {
      date: '2024-01-02T00:00:00',
      safety: 1,
      battery: 3,
      remote_controller: 2,
      transportation_platform: 2
    }
  },
  {
    serial_number: 'KR1.2s-2211-003',
    password: 'password3',
    config: {
      date: '2024-01-03T00:00:00',
      safety: 1,
      battery: 3,
      remote_controller: 1,
      transportation_platform: 1
    }
  }
  // Add more dummy items as needed
];