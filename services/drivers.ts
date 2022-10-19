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

interface Pager {
  startIndex: number;
  limit: number;
}

export interface DriverServiceResponse {
  meta: {
    startIndex: number;
    limit: number;
    total: number;
  },
  result: Driver[];
}

export const getDrivers = (pagination?: Pager): Promise<DriverServiceResponse> => {
  const drivers: Driver[] = mockData.results;
  const { startIndex, limit } = pagination ? pagination : { startIndex: 0, limit: 100 };

  const result = {
    meta: {
      startIndex,
      limit,
      total: drivers.length
    },
    result: drivers.slice(startIndex, startIndex + limit)
  };

  return Promise.resolve(result);
};

const driverServices = {
  getDrivers,
};

export default driverServices;
