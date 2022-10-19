import mockData from './drivers_mock.json';

export interface Driver {
  name: {
    first: string;
    last: string;
  },
  email: string;
  dob: {
    date: string;
  },
  cell: string;
  id: {
    name: string;
    value: string;
  },
  picture: {
    medium: string;
  }
}

export const getDrivers = () => {
  const drivers: Driver[] = mockData.results;

  return Promise.resolve(drivers);
};

const driverServices = {
  getDrivers,
};

export default driverServices;
