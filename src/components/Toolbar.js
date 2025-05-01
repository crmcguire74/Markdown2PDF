import React from "react";
import { CommandBar } from "@fluentui/react";

function Toolbar() {
  const items = [
    {
      key: "bold",
      text: "Bold",
      iconProps: { iconName: "Bold" },
      onClick: () => {
        // Insert markdown bold formatting
      },
    },
    {
      key: "italic",
      text: "Italic",
      iconProps: { iconName: "Italic" },
      onClick: () => {
        // Insert markdown italic formatting
      },
    },
    {
      key: "link",
      text: "Link",
      iconProps: { iconName: "Link" },
      onClick: () => {
        // Insert markdown link formatting
      },
    },
    {
      key: "code",
      text: "Code",
      iconProps: { iconName: "Code" },
      onClick: () => {
        // Insert markdown code formatting
      },
    },
    {
      key: "download",
      text: "Download",
      iconProps: { iconName: "Download" },
      subMenuProps: {
        items: [
          {
            key: "downloadMd",
            text: "Download Markdown",
            onClick: () => {
              // Trigger download of markdown file
            },
          },
          {
            key: "downloadPdf",
            text: "Download PDF",
            onClick: () => {
              // Trigger download of PDF document
            },
          },
          {
            key: "downloadWord",
            text: "Download Word",
            onClick: () => {
              // Trigger download of Word document
            },
          },
        ],
      },
    },
  ];

  return <CommandBar items={items} />;
}

export default Toolbar;
