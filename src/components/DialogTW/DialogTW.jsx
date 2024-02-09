import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Button from "../Button";

export default function DialogTW({
  title,
  description,
  buttonCTA,
  handleClick,
  icon,
}) {
  const [open, setOpen] = useState(true);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        {/* Overlay */}
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>
        {/* Dialog  */}
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full min-w-80 items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel
                className="relative w-full transform overflow-hidden rounded-lg bg-white dark:bg-slate-900
 p-5 pt-6 text-left shadow-xl transition-all sm:my-8 sm:max-w-lg sm:p-6"
              >
                {/* Modal Content */}
                <div>
                  <div className="text-4xl mx-auto flex h-12 w-12 items-center justify-center">
                    {icon}
                  </div>
                  <div className="mt-1 text-center sm:mt-2">
                    <Dialog.Title
                      as="h3"
                      className="text-base font-semibold leading-6 text-gray-900 dark:text-slate-50"
                    >
                      {title}
                    </Dialog.Title>
                    {/* Description */}
                    <div className="mt-2">
                      <p className="text-sm text-gray-500 dark:text-gray-300">
                        {description}
                      </p>
                    </div>
                  </div>
                </div>
                {/* Modal CTA */}
                <div className="mt-5 flex flex-col gap-2 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                  <Button variant="soft" type="link" href="/">
                    🕹️ Back to Selection
                  </Button>
                  <Button
                    variant="primary"
                    onClick={() => {
                      handleClick();
                      setOpen(false);
                    }}
                  >
                    {buttonCTA}
                  </Button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
