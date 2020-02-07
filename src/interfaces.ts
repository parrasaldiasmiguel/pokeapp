
export interface PokeApi{
    count : Number;
    next  : String;
    results: Results[];
    }

export interface Results{
        name   : string;
        url    : string;
        id?    : string;
        details: PokemonDetails;
        description?: string;
    }
    
export interface PokemonDetails{
        id      :number;
        name    :string;
        sprites :Sprites;
        abilities?:Array<any>;
        types?  :Array<any>;
        moves?  :Array<any>;
        species?:Species;
        location_area_encounters?:string;
        }

export interface Sprites{
        front_default:string;
    }

export interface Species{
        id:number;
        name:string;
        flavor_text_entries:string;
    }

    

    