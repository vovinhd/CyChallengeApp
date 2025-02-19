import type { AcceptedChallenge, Sector } from '$lib/types/challenges';
export const acceptedChallenges: AcceptedChallenge[] = [
	{
		slug: 'v-day',
		id: '1',
		sector: 'food',
		prerequisites: [],
		title: 'Mache einen veganen Tag',
		interval: 14,
		frontMatter: `Wusstest du, dass du mit der Umstellung 
        auf eine pflanzlichere Ernährung ca. 35 % CO2 einsparen kannst?
        
        Definitiv ein Grund einen veganen Tag in der Woche auszuprobieren.`,
		content: `Klimaschutz und intensive Massentierhaltung sind unvereinbar. Ein betrieblicher oder regionaler Nährstoffkreislauf im landwirtschaftlichen Betrieb lässt sich nicht realisieren. Futtermittelimporte, die in vielen Fällen den Rodungsdruck auf den Regenwald erhöhen, sind unausweichlich. Die hohe Konzentration von Tieren führt zu einem Überangebot an Gülle mit der Folge, dass sie auf dem eigenen Betrieb weder bedarfsgerecht noch umweltverträglich verwertet werden kann.`,
		steps: [
			{ name: 'Vegane Rezepte suchen', reward: undefined },
			{ name: 'Einkaufen gehen', reward: undefined },
			{ name: 'Zubereiten & Ausprobieren', reward: undefined },
			{ name: 'Einen Tag keine tierischen Lebensmittel essen', reward: undefined }
		],
		completed: false,
		completedSteps: [
			{ name: 'Do thing 1', reward: undefined, completed: true, completedAt: new Date() }
		],
		accepted: true,
		acceptedAt: new Date('2022-05-12')
	},
	{
		title: 'Challenge eins',
		id: '128727z398172398',
		slug: 'challenge-1',
		frontMatter: 'a cool challenge',
		accepted: true,
		acceptedAt: new Date('2022-05-12'),
		interval: 21,
		prerequisites: [],
		content:
			'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde ex libero impedit! Fugiat animi architecto repellendus neque odio tempore ut. Repudiandae velit et veniam laboriosam dolore officia numquam odit excepturi.',
		steps: [
			{ name: 'Do thing 1', reward: undefined },
			{ name: 'Do thing 2', reward: undefined },
			{ name: 'Do thing 3', reward: undefined }
		],
		completed: false,
		completedSteps: [
			{ name: 'Do thing 1', reward: undefined, completed: true, completedAt: new Date() }
		],
		sector: 'consumption'
	},
	{
		title: 'Challenge 2',
		id: 'sdfgsdfgsdfgwerwerwerwer',
		slug: 'challenge-2',
		frontMatter: 'Eine komplizierte Challenge',
		accepted: true,
		acceptedAt: new Date('2022-05-12'),
		interval: 21,
		prerequisites: [],
		content:
			'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde ex libero impedit! Fugiat animi architecto repellendus neque odio tempore ut. Repudiandae velit et veniam laboriosam dolore officia numquam odit excepturi.',
		steps: [
			{ name: 'Do thing 1', reward: undefined },
			{ name: 'Do thing 2', reward: undefined },
			{ name: 'Do thing 3', reward: undefined },
			{ name: 'Do thing 4', reward: undefined },
			{ name: 'Do thing 5', reward: undefined },
			{ name: 'Do thing 6', reward: undefined }
		],
		completed: false,
		completedSteps: [],
		sector: 'consumption'
	},
	{
		title: 'Challenge 3',
		id: 'asdf233wrefswet5r',
		slug: 'challenge-3',
		frontMatter: 'a cool challenge',
		accepted: true,
		acceptedAt: new Date('2022-05-12'),
		interval: 21,
		prerequisites: [],
		content:
			'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde ex libero impedit! Fugiat animi architecto repellendus neque odio tempore ut. Repudiandae velit et veniam laboriosam dolore officia numquam odit excepturi.',
		steps: [
			{ name: 'Do thing 1', reward: undefined },
			{ name: 'Do thing 2', reward: undefined },
			{ name: 'Do thing 3', reward: undefined }
		],
		completed: false,
		completedSteps: [],
		sector: 'consumption'
	},
	{
		title: 'Challenge 4',
		id: 'hfghfg343432435425',
		slug: 'challenge-4',
		frontMatter: 'a cool challenge',
		accepted: true,
		acceptedAt: new Date('2022-05-12'),
		interval: 21,
		prerequisites: [],
		content:
			'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde ex libero impedit! Fugiat animi architecto repellendus neque odio tempore ut. Repudiandae velit et veniam laboriosam dolore officia numquam odit excepturi.',
		steps: [
			{ name: 'Do thing 1', reward: undefined },
			{ name: 'Do thing 2', reward: undefined },
			{ name: 'Do thing 3', reward: undefined }
		],
		completed: false,
		completedSteps: [],
		sector: 'consumption'
	},
	{
		title: 'Challenge 5',
		id: 'sdfgsdf231321312sdfgsdfg',
		slug: 'challenge-5',
		frontMatter: 'a cool challenge',
		accepted: true,
		acceptedAt: new Date('2022-05-12'),
		interval: 21,
		prerequisites: [],
		content:
			'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde ex libero impedit! Fugiat animi architecto repellendus neque odio tempore ut. Repudiandae velit et veniam laboriosam dolore officia numquam odit excepturi.',
		steps: [
			{ name: 'Do thing 1', reward: undefined },
			{ name: 'Do thing 2', reward: undefined },
			{ name: 'Do thing 3', reward: undefined }
		],
		completed: false,
		completedSteps: [],
		sector: 'consumption'
	},
	{
		title: 'Challenge 6',
		id: 'ertzg343423452gr',
		slug: 'challenge-6',
		frontMatter: 'a cool challenge',
		accepted: true,
		acceptedAt: new Date('2022-05-12'),
		interval: 21,
		prerequisites: [],
		content:
			'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde ex libero impedit! Fugiat animi architecto repellendus neque odio tempore ut. Repudiandae velit et veniam laboriosam dolore officia numquam odit excepturi.',
		steps: [
			{ name: 'Do thing 1', reward: undefined },
			{ name: 'Do thing 2', reward: undefined },
			{ name: 'Do thing 3', reward: undefined }
		],
		completed: false,
		completedSteps: [],
		sector: 'consumption'
	}
];
