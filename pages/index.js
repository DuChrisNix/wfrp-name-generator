import React from 'react';
import Head from 'next/head';
import { Button, Container, Grid, Header } from 'semantic-ui-react';

import Names from '../data/names.json';

export default class Index extends React.Component {
  state = {
    genderSelection: 'female',
    generatedName: undefined,
    raceSelection: 'dwarf',
  };

  getRandomInt = max => Math.floor(Math.random() * Math.floor(max));

  generateDwarfName = genderSelection => {
    const { dwarfs } = Names;

    const forename = dwarfs[this.getRandomInt(dwarfs.length)];
    let surname;

    if (genderSelection === 'female') {
      surname = `${dwarfs[this.getRandomInt(dwarfs.length)]}dottir`;
    }

    if (genderSelection === 'male') {
      surname = `${dwarfs[this.getRandomInt(dwarfs.length)]}son`;
    }

    return `${forename} ${surname}`;
  };

  generateElfName = () => {
    const { elves } = Names;

    return elves[this.getRandomInt(elves.length)];
  };

  generateHalflingName = genderSelection => {
    const {
      halflings: { female, male, surnames },
    } = Names;

    const surname = surnames[this.getRandomInt(surnames.length)];
    let forename;

    if (genderSelection === 'female') {
      forename = female[this.getRandomInt(female.length)];
    }

    if (genderSelection === 'male') {
      forename = male[this.getRandomInt(male.length)];
    }

    return `${forename} ${surname}`;
  };

  generateHumanName = genderSelection => {
    const {
      humans: { female, male, surnames },
    } = Names;

    const surname = surnames[this.getRandomInt(surnames.length)];
    let forename;

    if (genderSelection === 'female') {
      forename = female[this.getRandomInt(female.length)];
    }

    if (genderSelection === 'male') {
      forename = male[this.getRandomInt(male.length)];
    }

    return `${forename} ${surname}`;
  };

  handleGenerateClick = () => {
    const { genderSelection, raceSelection } = this.state;

    let generatedName;

    switch (raceSelection) {
      case 'dwarf':
        generatedName = this.generateDwarfName(genderSelection);
        break;
      case 'elf':
        generatedName = this.generateElfName();
        break;
      case 'halfling':
        generatedName = this.generateHalflingName(genderSelection);
        break;
      case 'human':
        generatedName = this.generateHumanName(genderSelection);
        break;
      default:
        break;
    }

    this.setState({
      generatedName,
    });
  };

  buttonText = () => {
    const { genderSelection, raceSelection } = this.state;

    if (raceSelection === 'elf') {
      return `Generate an ${raceSelection} name`;
    }

    return `Generate a ${genderSelection} ${raceSelection} name`;
  };

  render() {
    const { generatedName, genderSelection, raceSelection } = this.state;

    return (
      <Container text>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, height=device-height, initial-scale=1"
          />
          <title>Warhammer Fantasy Name Generator</title>
          <link
            rel="stylesheet"
            href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.11/semantic.min.css"
          />
        </Head>
        <style jsx global>{`
          body {
            background: rgb(47, 2, 2);
            background: linear-gradient(
              180deg,
              rgba(47, 2, 2, 1) 0%,
              rgba(3, 3, 3, 1) 100%
            );
            overflow: hidden;
            touch-action: manipulation;
          }
        `}</style>
        <Grid textAlign="center">
          <Grid.Row>
            <Grid.Column>
              <Header
                as="h1"
                content="WFRP Name Generator"
                style={{ color: 'white', marginTop: '2rem', marginBottom: 0 }}
              />
              <Header
                size="tiny"
                content="Select a race and a gender and hit generate!"
                style={{ color: 'white', marginTop: 0, marginBottom: '1rem' }}
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Button.Group>
                <Button
                  active={raceSelection === 'dwarf'}
                  onClick={() => this.setState({ raceSelection: 'dwarf' })}
                >
                  Dwarf
                </Button>
                <Button
                  active={raceSelection === 'elf'}
                  onClick={() => this.setState({ raceSelection: 'elf' })}
                >
                  Elf
                </Button>
                <Button
                  active={raceSelection === 'halfling'}
                  onClick={() => this.setState({ raceSelection: 'halfling' })}
                >
                  Halfling
                </Button>
                <Button
                  active={raceSelection === 'human'}
                  onClick={() => this.setState({ raceSelection: 'human' })}
                >
                  Human
                </Button>
              </Button.Group>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Button.Group>
                <Button
                  active={genderSelection === 'female'}
                  disabled={raceSelection === 'elf'}
                  onClick={() => this.setState({ genderSelection: 'female' })}
                >
                  Female
                </Button>
                <Button
                  active={genderSelection === 'male'}
                  disabled={raceSelection === 'elf'}
                  onClick={() => this.setState({ genderSelection: 'male' })}
                >
                  Male
                </Button>
              </Button.Group>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row style={{ minHeight: '65px' }}>
            <Grid.Column>
              <Header size="huge" style={{ color: 'white' }}>
                {generatedName}
              </Header>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Button onClick={this.handleGenerateClick} color="orange">
                {this.buttonText()}
              </Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}
