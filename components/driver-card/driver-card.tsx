import Image from 'next/image'
import { FC } from 'react';
import { Driver } from '../../services/drivers';

interface DriverCardProps {
  driver: Driver;
}

export const DriverCard: FC<DriverCardProps> = (props) => {
  const { driver } = props;
  console.log({ d: props.driver })

  return (
    <div className="driver-card bg-white w-fit">
      <div className="driver-card__header flex flex-row flex-nowrap gap-x-12 justify-between border-b-2 border-solid border-gray-300 px-8 py-4">
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

      <div className="driver-card__body flex flex-col gap-2 px-8 py-4">
        <div className="mb-8">
          <div className="relative h-32 w-32">
            <Image className="rounded-full" src={driver.picture.medium} alt="driver-picture" layout="fill" />
          </div>
        </div>

        <div>
          <p className="text-gray-600">Nama Driver</p>
          <p className="font-semibold text-lg">{driver.name.first}, {driver?.name.last}</p>
        </div>
        <div>
          <p className="text-gray-600">Nomor Telepon</p>
          <p className="font-semibold text-lg">{driver.cell}</p>
        </div>
        <div>
          <p className="text-gray-600">Email</p>
          <p className="font-semibold text-lg">{driver.email}</p>
        </div>
        <div>
          <p className="text-gray-600">Tanggal Lahir</p>
          <p className="font-semibold text-lg">DD-MM-YYYY</p>
        </div>
      </div>
    </div>
  )
}

export default DriverCard;
