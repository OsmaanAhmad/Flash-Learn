import { Button } from "@chakra-ui/react";
import { Grid, GridItem } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function BottomNav() {
    return (
        <Grid templateColumns='repeat(3, 1fr)' h="100%" textAlign="center" alignItems="center">
            <GridItem w='100%' h="100%">
                <Button as={Link} to="/english/details" w="100%" h="100%" bg='blue.500' color="white">
                    English
                </Button>
            </GridItem>
            <GridItem w='100%' h="100%">
                <Button as={Link} to="/math" w="100%" h="100%" bg='red.500' color="white">
                    Math
                </Button>
            </GridItem>
            <GridItem w='100%' h="100%">
                <Button as={Link} to="/science" w="100%" h="100%" bg='blue.500' color="white">
                    Science
                </Button>
            </GridItem>
        </Grid>
    );
}

export default BottomNav;

/*
    When filtering subjects by grade, would probably make it so that there's an onClick effect for the component and that for each page
    the topics being displayed is being generated by a list that is passed to the page as props.
    Clicking the difficulty will as a result change the list being passed as a prop to the subject page.
*/