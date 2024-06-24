import { Container, VStack, Input, Button, Heading } from "@chakra-ui/react";
import { useState } from "react";

const Index = () => {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");

  const handleSubmit = () => {
    alert(`Input 1: ${input1}, Input 2: ${input2}`);
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Heading as="h1" size="xl" mb={6}>Welcome to Our Web Page</Heading>
        <Input 
          placeholder="Enter first input" 
          value={input1} 
          onChange={(e) => setInput1(e.target.value)} 
          size="lg"
        />
        <Input 
          placeholder="Enter second input" 
          value={input2} 
          onChange={(e) => setInput2(e.target.value)} 
          size="lg"
        />
        <Button onClick={handleSubmit} colorScheme="teal" size="lg">Submit</Button>
      </VStack>
    </Container>
  );
};

export default Index;