import React from "react";
import { Tab, List, Image, Container, Header } from "semantic-ui-react";

const panes = [
  {
    menuItem: { key: "users", icon: "users", content: "About" },
    render: () => (
      <Tab.Pane>
        <br />
        <Image
          centered
          size="small"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxDtMY8vFBEZMoeNcdcxidr_NnBO8ohXhdP2fqtbSHV1D-7jWMQA&s"
        />
        <br />
        <Container text>
          <Header style={{ textAlign: "center" }} as="h2">
            About
          </Header>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
            aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
            imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
            link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus
            elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo
            ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam
            lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus
            viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean
            imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper
            ultricies nisi.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
            aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
            imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
            link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus
            elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo
            ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam
            lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus
            viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean
            imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper
            ultricies nisi.
          </p>
        </Container>
      </Tab.Pane>
    )
  },
  {
    menuItem: { key: "phone", content: "Contact", icon: "phone" },
    render: () => (
      <Tab.Pane>
        <br />
        <Image
          centered
          size="small"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFrkALap57QPVsBdBslBLyrZzfyNFSCBawt8eTI_GP6XaO17llWw&s"
        />
        <br />
        <List style={{ fontSize: "25px" }}>
          <List.Item icon="users" content="Yazgeldi Seyidov" />
          <List.Item icon="marker" content="San Diego, CA" />
          <List.Item
            icon="mail"
            content={
              <a href="mailto:blablabla@gmail.com">
                yazgeldi.seyidov@gmail.com
              </a>
            }
          />
          <List.Item
            icon="linkedin"
            content={
              <a href="https://www.linkedin.com/in/yazgeldi-seyidov-83b855158/">
                LinkedIn
              </a>
            }
          />
          <List.Item
            icon="github"
            content={<a href="https://github.com/yazseyit77">GitHub</a>}
          />
        </List>
      </Tab.Pane>
    )
  }
];

const About = () => <Tab panes={panes} />;

export default About;
