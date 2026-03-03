import React from 'react';
import { Deck, Slide, Heading, Text, FlexBox, DefaultTemplate, Image, Grid, Box, CodePane, Link, Appear, ListItem, UnorderedList} from 'spectacle';

//Bilder
import dføHus from './assets/img/dfø.jpg';
import dføAnsatt from './assets/img/dfø1.jpg';
import nuxt from './assets/img/nuxt.png';
import vue from './assets/img/vue.png';
import tailwind from './assets/img/tailwind.png';
import dføP from './assets/img/dføP.jpg';
import cat from './assets/img/cat.png';
import kode from './assets/img/kode.png';
import plan from './assets/img/planDFØ.png';
import varIT from './assets/img/varIT.png';
import kommune from './assets/img/kommune.jpg';
import varNett from './assets/img/varNett.jpg';
import varSer from './assets/img/varSer.jpg';
import powerShell from './assets/img/powerShell.jpg'


const customTheme = {
  colors: {
    primary: '#03A9F4', // Hovedtekstfarge
    secondary: '#E91E63', // Overskrifter
    tertiary: '#ffffff', // Bakgrunnsfarge
    quaternary: '#CECECE' // Sekundær tekstfarge
  },
  fonts: {
    header: '"Helvetica Neue", Helvetica, Arial, sans-serif',
    text: '"Open Sans", sans-serif'
  }
};

function App() {
  return (
    <Deck template={<DefaultTemplate />}>
      
      {/* Slide 1: Tittel */}
      <Slide>
        <FlexBox height="100%" flexDirection="column">
          <Heading>Uka 6 og 7</Heading>
          <Text>
            <a href="http://localhost:5173/?slideIndex=1&stepIndex=0">DFØ </a>
            og
            <a href="http://localhost:5173/?slideIndex=4&stepIndex=0"> VarIT</a>
          </Text>
        </FlexBox>
      </Slide>


      {/* Slide 2: DFØ */}
      <Slide>
        <Heading>Litt om DFØ?</Heading>
        <FlexBox>
          <Box>
            <Text>
              Direktoratet for forvaltning og økonomistyring.
            </Text>
            <UnorderedList>
              <Appear>
                <ListItem>Stand up</ListItem>
              </Appear>
              <Appear>
                <ListItem>Lærling</ListItem>
              </Appear>
            </UnorderedList>
          </Box>

          <FlexBox flexDirection={'column'} justifyContent={'start'} alignItems={'start'}>
            <Image src={dføHus} width="350px" />
            <Image src={dføAnsatt} width="350px" />
          </FlexBox>
        </FlexBox>
        
      </Slide>

      {/* Slide 3: min side*/}
      <Slide>
        <Heading>Oppgave</Heading>
        <FlexBox>
          
          <Box>

            <UnorderedList>
              <Appear>
                <ListItem>Nuxt</ListItem>
              </Appear>
              
              <Appear>
                <ListItem>Vue</ListItem>
              </Appear>
              <Appear>
                <ListItem>Tailwind</ListItem>
              </Appear>
              <Appear>
                <ListItem>API</ListItem>
              </Appear>
              <Appear>
                <ListItem>GidHub</ListItem>
              </Appear>
            </UnorderedList>
          </Box>

          
          <FlexBox flexDirection={'column'}>

            <Image src={nuxt} width="200"/>
            <Image src={vue} width="200"/>
            
          </FlexBox>
          <Image src={tailwind} width="200"/>
        </FlexBox>
      </Slide>

      
      {/* Slide 4: PowerShell, Brukerstøtte*/}
      <Slide>
        <Heading>Min side</Heading>
        <FlexBox justifyContent={'space-between'}>
          <a href="http://localhost:3000/">
            <Image src={cat} width="500"/>
          </a>
          <Image src={kode} width="800"/>
        </FlexBox>
      </Slide>

        

      {/* Slide 5: det som jeg lært*/}
      <Slide>
        <Heading>Mitt inntrykk </Heading>
        <FlexBox>
          <Box>
            <UnorderedList>
              <Appear>
                <ListItem>Chat GPT</ListItem>
              </Appear>
              <Appear>
                <ListItem>Ansatte</ListItem>
              </Appear>
              <Appear>
                <ListItem>løs PC</ListItem>
              </Appear>
            </UnorderedList>
          </Box>

          <UnorderedList>
            <Appear>
              {/* <ListItem> */}
                <Image src={plan} width="700"/>
              {/* </ListItem> */}
            </Appear>
          </UnorderedList> 
        </FlexBox>
      </Slide>


      {/* Slide 6: VarIT */}
      <Slide>
        <Heading>VarIT</Heading>
        <FlexBox>
          <Box>
            <UnorderedList>
              <Appear>
                <ListItem>Stjørdal rådhus</ListItem>
              </Appear>
              <Appear>
                <ListItem>6 kommunene</ListItem>
              </Appear>
            </UnorderedList>
          </Box>
          <Image src={kommune} width="600"/>
        </FlexBox>
      </Slide>

      {/* Slide 7: møter, internett*/}
      <Slide>
        <Heading>Møter, retninger </Heading>
        <FlexBox>
          <FlexBox >
            <UnorderedList>
              <Appear>
                <ListItem>drift og utvikling</ListItem>
              </Appear>

              <Appear>
                <ListItem>brukerstøtte</ListItem>
              </Appear>
              <Appear>
                <ListItem>nettverk</ListItem>
              </Appear>
              
              <Appear>
                <ListItem>utvikling</ListItem>
              </Appear>
            </UnorderedList>
          </FlexBox>
          <FlexBox flexDirection={'column'}>
            <Image src={varNett} width="300"/>
            <Image src={varSer} width="300"/>
          </FlexBox>


        </FlexBox>
      </Slide>


      {/* Slide 8: PowerShell, Brukerstøtte*/}
      <Slide>
        <Heading>Oppgave for oss</Heading>
        <UnorderedList>
          <Appear>
            <ListItem>PowerShell</ListItem>
          </Appear>
          <Appear>
            <ListItem>Brukerstøtte</ListItem>
          </Appear>
          <Image src={powerShell} width="700"/>
        </UnorderedList>
      </Slide>

      <Slide>
        <Grid gridTemplateColumns="1fr 1fr" gridColumnGap={15}>
          <Box backgroundColor="primary" padding={10}>
            <Text>Venstre side</Text>
          </Box>
          <Box backgroundColor="secondary" padding={10}>
            <Text>Høyre side</Text>
          </Box>
        </Grid>
      </Slide>

    </Deck>
  );
}

export default App;