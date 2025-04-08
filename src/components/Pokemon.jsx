export const Pokemon = ({name = 'Pikachu'})=> {
    
   return (
     <h2>
        Nome do pokemon: {name ? name : 'Pikachu'}
     </h2>
    );
  }