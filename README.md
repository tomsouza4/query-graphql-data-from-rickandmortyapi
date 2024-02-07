# React GraphQL Open API Character Viewer

This is a React application that allows users to view character information fetched from an open API using GraphQL queries. The application consists of several components that enable users to browse through characters, view individual character details, and search for characters by name.

React With GraphQL (Apollo Client) Crash Course hosted by [Laith Academy](https://www.youtube.com/watch?v=gAbIQx26wSI)

## Components

### CharactersList
The CharactersList component displays a list of characters retrieved from the GraphQL API. It renders each character's name and image, and users can click on a character to view more details.

### Character
The Character component provides detailed information about a specific character selected from the list. It displays the character's image, name, gender, and a list of episodes the character appeared in.

### Search
The Search component allows users to search for characters by name. Users can enter a character's name in the input field and click the "Search" button to retrieve matching character locations.

#### Features:
- List all available characters on page load.
- Search which location/dimension a particular character appeared in.
- Use the URL to go to a specific character.

## How to Use

1. Clone the repository to your local machine: 

```bash
git clone https://github.com/tomsouza4/query-graphql-data-from-rickandmortyapi.git
```

Navigate to the project directory:
```sh 
cd query-graphql-data-from-rickandmortyapi
```

Open with Visual Code:
```sh 
code .
```

Install dependencies:
```sh 
npm install @apollo/client graphql react-router-dom
```

Run the React app:
```sh
yarn start
```

# Output Sample



# Important Note
As of Feb/2024 the API doesn't support mutations.

## Nice to Haves
- Handle edge cases not tested
- Enhance Search functionality
