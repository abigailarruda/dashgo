import { Flex, Text, Box, Avatar } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Abigail Arruda</Text>

          <Text color="gray.300" fontSize="small">
            abigailarrud@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size={showProfileData ? "md" : "xs"}
        name="Abigail Arruda"
        src="https://github.com/abigailarruda.png"
      />
    </Flex>
  );
}
