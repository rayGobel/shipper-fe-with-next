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

function foundMatch (driver: Driver, matcher: RegExp): boolean {
  const firstNameMatch = driver.name.first.toLowerCase().search(matcher) != -1;
  const lastNameMatch = driver.name.last.toLowerCase().search(matcher) != -1;

  return firstNameMatch || lastNameMatch;
}

export const searchDriver = (driverName: string, pagination: Pager): Promise<DriverServiceResponse> => {
  const { startIndex, limit } = pagination;
  const matcher = new RegExp(`^${driverName.toLowerCase()}`);
  const result = mockData.results.filter((driver) => foundMatch(driver, matcher));

  return Promise.resolve({
    meta: {
      startIndex: pagination.startIndex,
      limit: pagination.limit,
      total: result.length,
    },
    result: result.slice(startIndex, startIndex + limit)
  });

  return Promise.reject(new Error('Not implemented'));
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
  searchDriver,
};

export default driverServices;
