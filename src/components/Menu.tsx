// import { Button } from "@chakra-ui/react";
// import { format, parseISO } from "date-fns";
import Image from "next/image";
import { useRouter } from "next/router";
import { type FC, useState } from "react";
import { HiArrowLeft } from "react-icons/hi";
import Select from "react-select";
import { capitalize, selectOptions } from "src/utils/helper";
import { api } from "src/utils/api";
import { Link } from "lucide-react";
import { SlSocialInstagram } from "react-icons/sl";

interface MenuProps {
  selectedTime: string; // as ISO string
  addToCart: (id: string, quantity: number) => void;
}

const Menu: FC<MenuProps> = ({ selectedTime, addToCart }) => {
  const router = useRouter();
  const { data: menuItems } = api.menu.getMenuItems.useQuery(undefined, {
    refetchOnMount: false,
  });

  const [filter, setFilter] = useState<string | undefined>(undefined);

  const filteredMenuItems = menuItems?.filter((menuItem) => {
    if (!filter) return true;
    return menuItem.categories.includes(filter);
  });

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:py-10 lg:max-w-full">
        <div className="flex w-full flex-col justify-between ">
          <div className="sm:flex sm:flex-row sm:justify-between">
            <h2 className="flex items-center gap-4 text-2xl font-bold tracking-tight text-gray-900">
              <HiArrowLeft
                className="cursor-pointer"
                onClick={() => router.push("/")}
              />
              Menümüzde:
              {/* for {format(parseISO(selectedTime), "MMM do, yyyy")} */}
            </h2>

            <Select
              onChange={(e) => {
                if (e?.value === "Hepsi") setFilter(undefined);
                else setFilter(e?.value);
              }}
              className="border-none outline-none sm:w-[20rem]"
              placeholder="Filtre..."
              options={selectOptions}
            />
          </div>
          <h3 className="mt-2 flex flex-row px-4">
            *Tüm siparişler instagramdan verilmektedir.{" "}
            <span>
              <a href="https://www.instagram.com/ustasushi/" target="_blank">
                <SlSocialInstagram
                  size={20}
                  className="ml-2 transition-all duration-300 hover:-translate-y-2"
                />
              </a>
            </span>
          </h3>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {filteredMenuItems?.map((menuItem) => (
            <div key={menuItem.id} className="group relative">
              <div className="min-h-80 aspect-w-1 aspect-h-1 lg:aspect-none h-40 w-full overflow-hidden rounded-md bg-gray-200 hover:opacity-75 sm:h-80">
                <div className="relative h-full w-full object-cover object-center lg:h-full lg:w-full">
                  <Image
                    src={menuItem.url}
                    alt={menuItem.name}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <p>{menuItem.name}</p>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {menuItem.categories.map((c) => capitalize(c)).join(", ")}
                  </p>
                  <p className="text-sm font-medium text-gray-900">
                    {menuItem.description}
                  </p>
                </div>

                <p className="text-sm font-medium text-gray-900">
                  {menuItem.price.toFixed(2)} TL
                </p>
              </div>

              {/* <Button
                className="mt-4"
                onClick={() => {
                  addToCart(menuItem.id, 1);
                }}
              >
                Add to cart
              </Button> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
