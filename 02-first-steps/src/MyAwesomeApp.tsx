import type { CSSProperties } from 'react';


 const myStyles: CSSProperties = {
            backgroundColor: '#fafafa',
                borderRadius: 10,
                padding: 10,
                marginTop: 20,
            }

     const firstName = 'Fabricio!!';
    const lastName = 'Alegre';

    const favoriteGames = ['red dead redepmtion 2','subnautica','far cry']
    const isActive = true;

    const address = {
        zipcode: '12345',
        country: 'Colombia',
    }

export const MyAwesomeApp = () => {




   
    return(
        <>
        <h1>{firstName}</h1>
        <h3>{lastName}</h3>

        <p>{favoriteGames.join(', ')}</p>

        <h1>{isActive ? 'Active' : 'Inactive'}</h1>

        <p style={myStyles}>{JSON.stringify(address)}</p>
        </>
    );
};





