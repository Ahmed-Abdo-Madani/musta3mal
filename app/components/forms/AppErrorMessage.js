import React from "react";

import AppText from "../AppText";

export default function AppErrorMessage({ error, visible }) {
  if (!visible || !error) return null;
  return (
    <AppText
      style={{ marginLeft: 15 }}
      text={error}
      color="red"
      size={15}
      fontWeight="normal"
    />
  );
}
