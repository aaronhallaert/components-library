import React from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";

export default function Header() {
  const listClassName =
    "bg-gray-100 flex flex-row gap-2 justify-between w-{100%} rounded-lg";
  const itemClassName = "bg-gray-200 py-2 px-5 rounded-lg";
  return (
    <NavigationMenu.Root>
      <NavigationMenu.List className={listClassName}>
        <NavigationMenu.Item className={itemClassName}>
          <NavigationMenu.Trigger className={itemClassName}>
            <NavigationMenu.Link href="https://www.google.be?q=Links">
              Links
            </NavigationMenu.Link>
          </NavigationMenu.Trigger>
          <NavigationMenu.Content>
            <NavigationMenu.Item className={itemClassName}>
              <NavigationMenu.Link href="https://www.google.be">
                Google
              </NavigationMenu.Link>
            </NavigationMenu.Item>
            <NavigationMenu.Item className={itemClassName}>
              <NavigationMenu.Link href="https://www.github.com">
                Github
              </NavigationMenu.Link>
            </NavigationMenu.Item>
            <NavigationMenu.Item className={itemClassName}>
              <NavigationMenu.Link href="https://www.reddit.com">
                Reddit
              </NavigationMenu.Link>
            </NavigationMenu.Item>
          </NavigationMenu.Content>
        </NavigationMenu.Item>
      </NavigationMenu.List>
      <NavigationMenu.Indicator />

      <NavigationMenu.Viewport />
    </NavigationMenu.Root>
  );
}
