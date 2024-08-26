import { Heart } from "lucide-react";
import Image from "next/image";

const JobRow = () => {
  return (
    <>
      <div className="bg-white p-4 rounded-lg shadow-sm relative">
        <div className="absolute cursor-pointer top-4 right-4">
          <Heart fill="true" className="size-4 text-gray-300 fill-current" />
        </div>
        <div className="flex grow gap-4 ">
          <div className="content-center">
            <Image
              className="size-12"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Spotify_icon.svg/1982px-Spotify_icon.svg.png"
              alt=""
              height={12}
              width={12}
            />
          </div>
          <div className="grow sm:flex">
            <div className="grow">
              <div className="text-gray-500 text-sm">Spotify</div>
              <div className="font-bold text-lg mb-1">Product Designer</div>
              <div className="content-end text-gray-400 text-sm">
                Remote &middot; New Youk, US &middot; Full Time
              </div>
            </div>
            <div className="content-end text-gray-500 text-sm">2 weeks ago</div>
          </div>
        </div>
      </div>
    </>
  );
};
export default JobRow;
