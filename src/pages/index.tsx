import * as React from "react";
import Background from "../components/Background";

export default class extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div>
        <Background />
      </div>
    );
  }
}
