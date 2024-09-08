import { Button } from "@chakra-ui/react"
import { Grid, GridItem } from '@chakra-ui/react'

function BottomNav() {
    return(
        <Grid templateColumns='repeat(3, 1fr)' style={{"height" : "100%", "text-align":"center", "align-items" : "center"}} >
            <GridItem w='100%' bg='blue.500'> English </GridItem>
            <GridItem w='100%' bg='red.500'> Math </GridItem>
            <GridItem w='100%' bg='blue.500'> Science </GridItem>
        </Grid>
    );
}

export default BottomNav;

/*
    When filtering subjects by grade, would probably make it so that there's an onClick effect for the component and that for each page
    the topics being displayed is being generated by a list that is passed to the page as props.
    Clicking the difficulty will as a result change the list being passed as a prop to the subject page.
*/