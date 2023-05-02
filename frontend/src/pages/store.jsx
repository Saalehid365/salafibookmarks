import React, { useContext } from "react";
import Filtermenu from "../store/filtermenu";
import Storegrid from "../store/storegrid";
import Storehero from "../store/storehero";
import { ShopContext } from "../shop-context";
import { Transition } from "@headlessui/react";

const Store = () => {
  const filterSearch = useContext(ShopContext);
  const { filter, setFilter, setToggle, toggle, handleToggle } = filterSearch;

  return (
    <div
      className="sm:pt-
    "
    >
      <div className="">
        <Storehero />
      </div>
      <div className="flex sm:flex-col">
        <Filtermenu />
        <Transition
          show={!toggle}
          enter="transition-opacity duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Storegrid />
        </Transition>
      </div>
    </div>
  );
};

export default Store;
