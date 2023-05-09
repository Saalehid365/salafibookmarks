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
      className="sm:pt-20
    "
    >
      <div className="">
        <Storehero />
      </div>
      <div className="flex sm:flex-col sm:pt-4">
        <Filtermenu />
        <Transition
          show={!toggle}
          enter="transition transform duration-300 ease-out"
          enterFrom="translate-x-12 opacity-0"
          enterTo="translate-x-0 opacity-100"
          leave="ransition transform duration-300 ease-in"
          leaveFrom="translate-x-12 opacity-100"
          leaveTo="opacity-0"
        >
          <Storegrid />
        </Transition>
      </div>
    </div>
  );
};

export default Store;
