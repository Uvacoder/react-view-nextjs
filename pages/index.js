import { View, PropTypes } from "react-view";

function Button({ children }) {
  return <button>{children}</button>;
}

export default () => (
  <View
    componentName="Button"
    props={{
      children: {
        value: "Hello",
        type: PropTypes.ReactNode,
        description: "Visible label.",
      },
      onClick: {
        value: '() => alert("click")',
        type: PropTypes.Function,
        description: "Function called when button is clicked.",
      },
      disabled: {
        value: false,
        type: PropTypes.Boolean,
        description: "Indicates that the button is disabled",
      },
    }}
    scope={{
      Button,
    }}
    imports={{
      "your-button-component": {
        named: ["Button"],
      },
    }}
  />
);
