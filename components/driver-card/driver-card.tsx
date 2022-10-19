import Image from 'next/image'
import { FC } from 'react';
import { Driver } from '../../services/drivers';

interface DriverCardProps {
  driver: Driver;
}

export const DriverCard: FC<DriverCardProps> = (props) => {
  const { driver } = props;

  const headerClassesLarge = `md:tracking-normal md:px-8 md:py-4 md:gap-x-12`;
  const headerBorder = `border-b-2 border-solid border-gray-300 `;
  const headerClasses = `driver-card__header flex flex-row flex-nowrap px-4 py-2 justify-between ${headerBorder} tracking-tighter ${headerClassesLarge}`;

  return (
    <div className="driver-card bg-white w-full md:w-fit">
      <div className={headerClasses}>
        <div className="flex flex-row flex-nowrap whitespace-nowrap">
          <p>Driver ID :</p>
          <p className="text-red-500 font-semibold ml-2">
            ({driver.id.name}) {driver.id.value}
          </p>
        </div>
        <div className="header--action">
          <p>...</p>
        </div>
      </div>

      <div className="driver-card__body flex flex-row gap-x-8 items-center gap-y-4 px-4 py-8 md:px-8 md:py-4 md:flex-col md:items-start ">
        <div>
          <div className="relative h-24 w-24 md:h-32 md:w-32">
            <Image className="rounded-full" src={driver.picture.medium} alt="driver-picture" layout="fill" />
          </div>
        </div>

        <div>
          <div>
            <p className="text-gray-600">Nama Driver</p>
            <p className="font-semibold md:text-lg">{driver.name.first}, {driver?.name.last}</p>
          </div>
          <div>
            <p className="text-gray-600">Nomor Telepon</p>
            <p className="font-semibold md:text-lg">{driver.cell}</p>
          </div>
          <div className="hidden md:block">
            <p className="text-gray-600">Email</p>
            <p className="font-semibold md:text-lg">{driver.email}</p>
          </div>
          <div className="hidden md:block">
            <p className="text-gray-600">Tanggal Lahir</p>
            <p className="font-semibold md:text-lg">DD-MM-YYYY</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DriverCard;
