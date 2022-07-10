interface obj {
    title: string;
    status: boolean;
    id: number;
}

interface uName {
    firstName: string;
    lastName?: string;
}

function getName( {firstName, lastName }: uName): string {
    if(lastName){
        return (firstName + " " + lastName);
    }
    else {
        return firstName
    }
}

interface Address {
    houseNumber: number;
    street: string;
    city: string;
    state: string;
    postalCode: number;
    country: string;
}

interface PersonDetails {
    prefix?: "Mr" | "Mrs" | "Miss";
    phone: number[];
    addresses: Address;
    email?: "string";
    firstName: string;
    lastName: string;
    middleName?: string;
}

function PhoneBook( personDetails: PersonDetails): PersonDetails[] {
    let arr = [];
    arr.push(personDetails);
    return arr;
}