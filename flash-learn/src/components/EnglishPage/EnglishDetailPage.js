import React from 'react';
import { Grid, GridItem, Box, Text, Button, Icon, VStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { FaBook, FaPencilAlt, FaGlobe } from 'react-icons/fa'; // Adding icons for fun subjects

function EnglishDetailPage() {
    return (
        <Grid
            templateAreas={`"header header header"
                            "grammar spelling punctuation"
                            "wordOfTheDay wordOfTheDay tips"
                            "definition definition tips"
                            "sentence sentence tips"
                            "footer footer footer"`}
            gridTemplateRows={'auto auto auto auto auto 1fr'}
            gridTemplateColumns={'1fr 1fr 1fr'}
            minH="100vh"
            gap="6"
            padding="20px"
            bg="#DCDCDC"
            color="blackAlpha.800"
            fontFamily="'Baloo Bhai 2', sans-serif"
            fontWeight="bold"
        >
            {/* Header */}
            <GridItem area={'header'} textAlign="center">
                <Text 
                    fontSize="5xl" 
                    fontWeight="bold" 
                    color="#282828" 
                    textShadow="1px 1px 6px rgba(0,0,0,0.2)"
                >
                    English
                </Text>
            </GridItem>

            {/* Icons Section with Borders and More Visibility */}
            <GridItem area={'grammar'} textAlign="center">
                <Button 
                    as={Link} 
                    to="/english/grammar" 
                    bgGradient="radial-gradient(circle at 12.3% 19.3%, rgb(85, 88, 218) 0%, rgb(95, 209, 249) 100.2%);"
                    p="20px" 
                    borderRadius="50px" 
                    w="100%" 
                    h="100%" 
                    border="4px solid #1e90ff"
                    color="white"
                    boxShadow="xl"
                    _hover={{ transform: 'scale(1.1)', boxShadow: '2xl', bg: 'radial-gradient(circle at 12.3% 19.3%, rgb(85, 88, 218) 0%, rgb(95, 209, 249) 100.2%);' }} 
                    transition="0.3s"
                >
                    <VStack spacing={3}>
                        <Icon as={FaBook} w={10} h={10} />
                        <Text fontSize="2xl">Grammar</Text>
                    </VStack>
                </Button>
            </GridItem>
            <GridItem area={'spelling'} textAlign="center">
                <Button 
                    as={Link} 
                    to="/english/spelling" 
                    bgGradient="radial-gradient(circle at 12.3% 19.3%, rgb(85, 88, 218) 0%, rgb(95, 209, 249) 100.2%);"
                    p="20px" 
                    borderRadius="50px" 
                    w="100%" 
                    h="100%" 
                    border="4px solid #1e90ff"
                    color="white"
                    boxShadow="xl"
                    _hover={{ transform: 'scale(1.1)', boxShadow: '2xl', bg: 'radial-gradient(circle at 12.3% 19.3%, rgb(85, 88, 218) 0%, rgb(95, 209, 249) 100.2%);' }} 
                    transition="0.3s"
                >
                    <VStack spacing={3}>
                        <Icon as={FaPencilAlt} w={10} h={10} />
                        <Text fontSize="2xl">Spelling</Text>
                    </VStack>
                </Button>
            </GridItem>
            <GridItem area={'punctuation'} textAlign="center">
                <Button 
                    as={Link} 
                    to="/english/punctuation" 
                    bgGradient="radial-gradient(circle at 12.3% 19.3%, rgb(85, 88, 218) 0%, rgb(95, 209, 249) 100.2%);"
                    p="20px" 
                    borderRadius="50px" 
                    w="100%" 
                    h="100%" 
                    border="4px solid #1e90ff"
                    color="white"
                    boxShadow="xl"
                    _hover={{ transform: 'scale(1.1)', boxShadow: '2xl', bg: 'radial-gradient(circle at 12.3% 19.3%, rgb(85, 88, 218) 0%, rgb(95, 209, 249) 100.2%);' }} 
                    transition="0.3s"
                >
                    <VStack spacing={3}>
                        <Icon as={FaGlobe} w={10} h={10} />
                        <Text fontSize="2xl">Punctuation</Text>
                    </VStack>
                </Button>
            </GridItem>

            {/* Word of the Day Section */}
            <GridItem area={'wordOfTheDay'} textAlign="center">
                <Box bg="radial-gradient(263px at 100.2% 3%, rgb(12, 85, 141) 31.1%, rgb(205, 181, 93) 36.4%, rgb(244, 102, 90) 50.9%, rgb(199, 206, 187) 60.7%, rgb(249, 140, 69) 72.5%, rgb(12, 73, 116) 72.6%);" p="30px" borderRadius="50px" boxShadow="2xl" _hover={{ transform: 'scale(1.05)', transition: '0.3s' }}>
                    <Text fontSize="2xl" mb="10px" color="white">Word of the Day</Text>
                    <Text fontSize="5xl" fontWeight="bold" color="white">Inundate</Text>
                </Box>
            </GridItem>

            {/* Definition Section */}
            <GridItem area={'definition'} textAlign="center">
                <Box bg="linear-gradient(111.1deg, rgb(0, 40, 70) -4.8%, rgb(255, 115, 115) 82.7%, rgb(255, 175, 123) 97.2%);" p="30px" borderRadius="50px" boxShadow="2xl" _hover={{ transform: 'scale(1.05)', transition: '0.3s' }}>
                    <Text fontSize="2xl" fontWeight="bold" color="white">Definition</Text>
                    <Text fontSize="1xl" color="white"> "To overwhelm someone with things or people to deal with."</Text>
                </Box>
            </GridItem>

            {/* Use It in a Sentence Section */}
            <GridItem area={'sentence'} textAlign="center">
                <Box bg="linear-gradient(111.1deg, rgb(0, 40, 70) -4.8%, rgb(255, 115, 115) 82.7%, rgb(255, 175, 123) 97.2%);" p="30px" borderRadius="50px" boxShadow="2xl" _hover={{ transform: 'scale(1.05)', transition: '0.3s' }}>
                    <Text fontSize="2xl" fontWeight="bold" color="white">Use it in a Sentence</Text>
                    <Text fontSize="1xl" color="white" >"The teacher inundated the students with homework before the holiday break."</Text>
                </Box>
            </GridItem>

            {/* Essay Writing Tips Section */}
            <GridItem area={'tips'} textAlign="left" rowSpan={3}>
                <Box bg="radial-gradient(circle at 12.3% 19.3%, rgb(85, 88, 218) 0%, rgb(95, 209, 249) 100.2%);" border="4px solid #1e90ff" p="30px" borderRadius="50px" boxShadow="2xl" h="100%" _hover={{ transform: 'scale(1.05)', transition: '0.3s' }}>
                    <Text fontSize="2xl" fontWeight="bold" color="white" mb="10px">Essay Writing Tips</Text>
                    <Text fontSize="lg" color="white" > 
                    Many students and even professional writers struggle with figuring out where and how to start their essays, no matter how long they’ve been writing. But if you’ve been assigned a certain topic or know you have a specific point or idea that you want to prove or get across, a great way to get started is to start not from the beginning, but at the end. It might seem counterproductive, but you’ll have a much better time working backward and putting all your focus on proving your point or explaining your perspective...
                    </Text>
                </Box>
            </GridItem>

            {/* Bottom Navigation */}
            <GridItem area={'footer'} alignSelf="end" justifySelf="stretch">
                <Grid templateColumns="repeat(3, 1fr)" gap={6} textAlign="center">
                    {/* English Button with Green Border */}
                    <Box display="flex" alignItems="center" justifyContent="center">
                        <Button w="95%" bg="#505050" borderRadius="50px" color="white" _hover={{ bg: "#505050" }}>
                            English
                        </Button>
                    </Box>
                    {/* Math Button */}
                    <Box display="flex" alignItems="center" justifyContent="center">
                        <Button w="95%" bg="white" borderRadius="50px" color="black" _hover={{ bg: "#505050" }}>
                            Math
                        </Button>
                    </Box>
                    {/* Science Button */}
                    <Box display="flex" alignItems="center" justifyContent="center">
                        <Button w="95%" bg="white" borderRadius="50px" color="black" _hover={{ bg: "#505050" }}>
                            Science
                        </Button>
                    </Box>
                </Grid>
            </GridItem>
        </Grid>
    );
}

export default EnglishDetailPage;