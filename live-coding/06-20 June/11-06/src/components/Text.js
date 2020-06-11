import React from "react";

// export const Text = (props) => {
//   return (
//     <React.Fragment>
//       <h3>
//         Hi, I am {props.name} and I am {props.age}
//       </h3>
//     </React.Fragment>
//   );
// };

// export default Text;

export default class Text extends React.Component {
  render() {
    return (
      <h1>
        {""}
        Hi I am {this.props.name} and I am {this.props.age}
      </h1>
    );
  }
}
// export default Text;
