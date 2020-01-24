import React from "react";
import { Label, Menu, Tab } from "semantic-ui-react";

const panes = [
  {
    menuItem: { key: "users", icon: "users", content: "User" },
    render: () => (
      <Tab.Pane>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.Quibusdam
        consectetur veniam tempore beatae voluptatem totam rem praesentium
        placeat velit qui odit fugit vitae eos enim expedita, in quidem ab esse.{" "}
      </Tab.Pane>
    )
  },
  {
    menuItem: (
      <Menu.Item key="favorites">
        Favorites<Label>15</Label>
      </Menu.Item>
    ),
    render: () => (
      <Tab.Pane>
        Tab 2 Content
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.Quibusdam
          consectetur veniam tempore beatae voluptatem totam rem praesentium
          placeat velit qui odit fugit vitae eos enim expedita, in quidem ab
          esse.
        </p>
      </Tab.Pane>
    )
  }
];

const Favorites = () => <Tab panes={panes} />;

export default Favorites;
