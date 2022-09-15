import { useState, useEffect, Fragment } from "react";
import { Dialog, Combobox, Transition } from "@headlessui/react";

export default function CommandPallette({ postsData, isOpen, setIsOpen }) {
  const [query, setQuery] = useState("");
  var tags;

  const filteredPosts = query
    ? postsData.filter((post) => {
        return post.tags.find((tag) => {
          if (tag.includes(query)) {
            return post;
          }
        });
      })
    : postsData;

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "k" && (event.metaKey || event.ctrlKey)) {
        setIsOpen(!isOpen);
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  return (
    <Transition.Root
      as={Fragment}
      show={isOpen}
      afterLeave={() => setQuery("")}
    >
      <Dialog
        className="fixed inset-0 px-3 pt-10 sm:p-8 sm:pt-[10vh] md:pt-[20vh] overflow-y-auto"
        onClose={() => {
          setIsOpen(false);
        }}
      >
        <Transition.Child
          enter="duration-300 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-200 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Dialog.Overlay className="fixed inset-0 bg-black/50" />
        </Transition.Child>

        <Transition.Child
          enter="duration-300 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-200 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Combobox
            as="div"
            onChange={(metadata) => {
              setIsOpen(false);
              window.location.href = `https://ajesh-mishra.github.io/blog/${metadata.id}`
            }}
            className="relative max-w-2xl mx-auto bg-fluent-210 rounded-md shadow-xl ring-1 ring-black/60 divide-y divide-fluent-140/50 overflow-hidden"
          >
            <div className="flex place-items-center px-4 space-x-4 h-12 ">
              <svg
                className="w-5 h-5 fill-fluent-60"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z" />
              </svg>
              <Combobox.Input
                className="w-full bg-transparent border-0 focus:border-0 focus:outline-none focus:ring-0 text-sm placeholder:text-fluent-120 text-fluent-60"
                placeholder="Search ..."
                onChange={(even) => {
                  setQuery(event.target.value);
                }}
              />
            </div>

            {query && filteredPosts.length === 0 && (
              <div className="px-5 py-3 text-fluent-70">No results found.</div>
            )}

            {filteredPosts.length > 0 && (
              <Combobox.Options static className="max-h-[65vh] sm:max-h-[50vh] overflow-y-auto">
                {filteredPosts.map((metadata) => {
                  return (
                    <Combobox.Option key={metadata.id} value={metadata}>
                      {({ active }) => {
                        return (
                          <div
                            className={`px-5 py-3 hover:cursor-pointer ${
                              active ? "bg-fluent-180" : ""
                            }`}
                          >
                            <span className="text-fluent-70 font-medium text-sm">
                              {metadata.title}
                            </span>
                            <div className="flex space-x-2 text-sm text-fluent-140">
                              <span>tags:</span>
                              {metadata.tags.map((tag) => {
                                return <span> {tag}</span>;
                              })}
                            </div>
                          </div>
                        );
                      }}
                    </Combobox.Option>
                  );
                })}
              </Combobox.Options>
            )}
          </Combobox>
        </Transition.Child>
      </Dialog>
    </Transition.Root>
  );
}
