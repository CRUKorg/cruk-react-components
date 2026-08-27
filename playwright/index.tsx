import React, { StrictMode } from "react";
import { flushSync } from "react-dom";
import { createRoot, type Root } from "react-dom/client";

import "../src/components/global-styles.css";

// Story id -> module path, e.g. "components/AddressLookup/AddressLookup" for
// src/components/AddressLookup/AddressLookup.story.tsx.
const storyModules = import.meta.glob("../src/**/*.story.tsx");

function modulePathToId(filePath: string) {
  return filePath.replace(/^\.\.\/src\//, "").replace(/\.story\.\w+$/, "");
}

async function resolveStory(storyId: string) {
  const id = storyId.replace(/^\.\//, "");
  const sep = id.lastIndexOf("/");
  const modulePath = id.slice(0, sep);
  const exportName = id.slice(sep + 1);

  const file = Object.keys(storyModules).find(
    (f) =>
      modulePathToId(f) === modulePath ||
      modulePathToId(f).endsWith(`/${modulePath}`),
  );
  if (!file) {
    return undefined;
  }

  const mod = (await storyModules[file]()) as Record<string, unknown>;
  return mod[exportName] ?? mod.default;
}

const rootEl = document.getElementById("root") as HTMLElement;
let root: Root | undefined;

window.mount = async ({ story, props }) => {
  const Story = await resolveStory(story);
  if (!Story) {
    throw new Error(`Unknown story: ${story}`);
  }
  const StoryComponent = Story as React.ComponentType<Record<string, unknown>>;

  root ??= createRoot(rootEl);
  // flushSync so a render error rejects the mount() call instead of being swallowed.
  flushSync(() => {
    root!.render(
      <StrictMode>
        <StoryComponent {...props} />
      </StrictMode>,
    );
  });
};

window.unmount = async () => {
  root?.unmount();
  root = undefined;
};
