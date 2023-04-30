import React from "react";

export const SideBar = () => {
  return (
    <div
      class="w3-sidebar w3-bar-block w3-border-right"
      style="display:none"
      id="mySidebar"
    >
      <button onclick="w3_close()" class="w3-bar-item w3-large">
        Close &times;
      </button>
      <a href="#" class="w3-bar-item w3-button">
        Link 1
      </a>
      <a href="#" class="w3-bar-item w3-button">
        Link 2
      </a>
      <a href="#" class="w3-bar-item w3-button">
        Link 3
      </a>
    </div>
  );
};
