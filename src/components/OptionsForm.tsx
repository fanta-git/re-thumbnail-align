import { FormContents } from "@/types/form";
import { Box } from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";

export default function OptionsForm () {
  const { register } = useFormContext<FormContents>()

  return (
    <Box width={"100%"}>
    </Box>
  );
}
