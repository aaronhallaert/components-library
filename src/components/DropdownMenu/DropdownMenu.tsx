import React from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

export default () => (
  <DropdownMenu.Root>
    <DropdownMenu.Trigger
      className={`bg-indigo-500 text-white py-2 px-8 rounded cursor-default`}
    >
      Trigger
    </DropdownMenu.Trigger>
    <DropdownMenu.Content className={`p-1 shadow-xl rounded`}>
      <DropdownMenu.Item
        className={`py-2 px-8 rounded cursor-default
          focus:outline-none focus:bg-indigo-400 focus:text-white br-1`}
      >
        Cut
      </DropdownMenu.Item>
      <DropdownMenu.Item
        className={`py-2 px-8 rounded cursor-default
          focus:outline-none focus:bg-indigo-400 focus:text-white br-1`}
      >
        Copy
      </DropdownMenu.Item>
      <DropdownMenu.Item
        className={`py-2 px-8 rounded cursor-default
          focus:outline-none focus:bg-indigo-400 focus:text-white br-1`}
      >
        Paste
      </DropdownMenu.Item>
      <DropdownMenu.Arrow className="text-white" fill="currentColor" />
    </DropdownMenu.Content>
  </DropdownMenu.Root>
);
