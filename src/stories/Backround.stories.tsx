import * as React from "react";
import { storiesOf } from "@storybook/react";
import Background from "../components/Background/Background";

storiesOf("Background", module).add("with text", () => {
  return <Background />;
});
