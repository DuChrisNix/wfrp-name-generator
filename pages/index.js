import React from 'react';
import Head from 'next/head';
import { Button, Container, Grid, Header } from 'semantic-ui-react';

import Names from '../data/names.json';
import { generateTavernName } from '../data/tavernNames';

export default class Index extends React.Component {
  state = {
    genderSelection: 'female',
    generatedNames: [],
    raceSelection: 'dwarf',
    selectedMode: 'npc',
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
    const { genderSelection, raceSelection, selectedMode } = this.state;

    const generatedNames = [];
    const windowHeight = window.innerHeight;
    const rem = parseFloat(getComputedStyle(document.documentElement).fontSize);
    const nameHeight = 2 * rem + rem * 0.3;

    const spaceForNamesInRem =
      selectedMode === 'tavern'
        ? windowHeight - 21 * rem
        : windowHeight - 27.5 * rem;

    let possibleNames = Math.floor(spaceForNamesInRem / nameHeight);
    possibleNames = possibleNames > 10 ? 10 : possibleNames;

    for (let index = 0; index < possibleNames; index += 1) {
      let generatedName;

      if (selectedMode === 'npc') {
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
      }

      if (selectedMode === 'tavern') {
        generatedName = generateTavernName();
      }

      generatedNames.push(generatedName);
    }

    this.setState({
      generatedNames,
    });
  };

  buttonText = () => {
    const { genderSelection, raceSelection, selectedMode } = this.state;

    if (selectedMode === 'npc') {
      if (raceSelection === 'elf') {
        return `Generate an ${raceSelection} name`;
      }

      return `Generate a ${genderSelection} ${raceSelection} name`;
    }

    if (selectedMode === 'tavern') {
      return 'Generate a tavern name';
    }
  };

  render() {
    const {
      genderSelection,
      generatedNames,
      raceSelection,
      selectedMode,
    } = this.state;

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
          <Grid.Row
            style={{
              paddingTop: 0,
              paddingBottom: '.75rem',
            }}
          >
            <Grid.Column>
              <Button.Group>
                <Button
                  active={selectedMode === 'npc'}
                  onClick={() =>
                    this.setState({
                      selectedMode: 'npc',
                      generatedNames: [],
                    })
                  }
                >
                  NPC Names
                </Button>
                <Button
                  active={selectedMode === 'tavern'}
                  onClick={() =>
                    this.setState({
                      selectedMode: 'tavern',
                      generatedNames: [],
                    })
                  }
                >
                  Tavern Names
                </Button>
              </Button.Group>
            </Grid.Column>
          </Grid.Row>
          {selectedMode === 'npc' && (
            <>
              <Grid.Row
                style={{
                  paddingTop: 0,
                  paddingBottom: '.75rem',
                }}
              >
                <Grid.Column>
                  <Button.Group>
                    <Button
                      active={raceSelection === 'dwarf'}
                      onClick={() =>
                        this.setState({
                          raceSelection: 'dwarf',
                          generatedNames: [],
                        })
                      }
                    >
                      Dwarf
                    </Button>
                    <Button
                      active={raceSelection === 'elf'}
                      onClick={() =>
                        this.setState({
                          raceSelection: 'elf',
                          generatedNames: [],
                        })
                      }
                    >
                      Elf
                    </Button>
                    <Button
                      active={raceSelection === 'halfling'}
                      onClick={() =>
                        this.setState({
                          raceSelection: 'halfling',
                          generatedNames: [],
                        })
                      }
                    >
                      Halfling
                    </Button>
                    <Button
                      active={raceSelection === 'human'}
                      onClick={() =>
                        this.setState({
                          raceSelection: 'human',
                          generatedNames: [],
                        })
                      }
                    >
                      Human
                    </Button>
                  </Button.Group>
                </Grid.Column>
              </Grid.Row>
              {raceSelection !== 'elf' && (
                <Grid.Row
                  style={{
                    paddingTop: 0,
                    paddingBottom: '.75rem',
                  }}
                >
                  <Grid.Column>
                    <Button.Group>
                      <Button
                        active={genderSelection === 'female'}
                        onClick={() =>
                          this.setState({
                            genderSelection: 'female',
                            generatedNames: [],
                          })
                        }
                      >
                        Female
                      </Button>
                      <Button
                        active={genderSelection === 'male'}
                        onClick={() =>
                          this.setState({
                            genderSelection: 'male',
                            generatedNames: [],
                          })
                        }
                      >
                        Male
                      </Button>
                    </Button.Group>
                  </Grid.Column>
                </Grid.Row>
              )}
            </>
          )}
          <Grid.Row style={{ paddingTop: 0, marginTop: '1rem' }}>
            <Grid.Column>
              {generatedNames.map((generatedName, index) => (
                <p
                  style={{
                    color: 'white',
                    fontSize: '1.5rem',
                    marginBottom: '.3rem',
                  }}
                  key={`generated-name-${index}`}
                >
                  {generatedName}
                </p>
              ))}
            </Grid.Column>
          </Grid.Row>
          <Grid.Row
            style={{
              position: 'absolute',
              bottom: '2rem',
            }}
          >
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
