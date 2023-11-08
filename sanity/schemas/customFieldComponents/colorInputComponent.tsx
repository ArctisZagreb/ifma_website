import React from "react";
import { Stack, Text, TextInput, TextArea, Box } from "@sanity/ui";

const colorInputComponent = (props: any) => {
  const { elementProps, value = "" } = props;
  return (
    <Stack space={[2, 2]}>
      <Box>
        <input type="color" {...elementProps} />
      </Box>
    </Stack>
  );
};

export default colorInputComponent;
