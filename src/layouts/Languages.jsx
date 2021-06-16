import "./Central.css";
import React from "react";
import { Dropdown, Image, Menu } from "semantic-ui-react";

export default function Languages() {
  return (
    <div>
      <Menu.Item>
        <Dropdown
          button
          className="icon black"
          icon="world"
          labeled
          floating
          text="Languages"
        >
          <Dropdown.Menu>
            <Dropdown.Item>
              <Image
                size="tiny"
                src="https://image.flaticon.com/icons/png/512/197/197374.png"
              />
              English
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    </div>
  );
}
