import Image from 'next/image'

export const DriverCard = () => {
  return (
    <div className="driver-card bg-white w-fit">
      <div className="driver-card__header flex flex-row flex-nowrap gap-x-12 justify-between border-b-2 border-solid border-gray-300 px-8 py-4">
        <div className="flex flex-row flex-nowrap whitespace-nowrap">
          <p>Driver ID :</p>
          <p className="text-red-500 font-semibold ml-2">ID-XYZ99561</p>
        </div>
        <div className="header--action">
          <p>...</p>
        </div>
      </div>

      <div className="driver-card__body flex flex-col gap-2 px-8 py-4">
        <div className="mb-8">
          <div className="relative h-32 w-32">
            <Image className="rounded-full" src="/blank-profile-picture.png" alt="driver-picture" layout="fill" />
          </div>
        </div>

        <div>
          <p className="text-gray-600">Nama Driver</p>
          <p className="font-semibold text-lg">First Name, Last Name</p>
        </div>
        <div>
          <p className="text-gray-600">Nomor Telepon</p>
          <p className="font-semibold text-lg">Phone Number</p>
        </div>
        <div>
          <p className="text-gray-600">Email</p>
          <p className="font-semibold text-lg">Email Address</p>
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
