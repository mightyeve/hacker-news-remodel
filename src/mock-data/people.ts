import IPerson from "@/interfaces/IPerson";

const people: Array<IPerson> = [
    {
        firstName: "Stuart",
        lastName: "Little",
        birthday: new Date(+new Date() - Math.floor(Math.random() * 1000000000)),
        eyeColor: "black",
    },
    {
        firstName: "Big",
        lastName: "Bird",
        birthday: new Date(+new Date() - Math.floor(Math.random() * 1000000000)),
        eyeColor: "black",
    },
    {
        firstName: "Jane",
        lastName: "Eyre",
        birthday: new Date(+new Date() - Math.floor(Math.random() * 1000000000)),
        eyeColor: "black",
    },
    {
        firstName: "Dallas",
        lastName: "Cowboy",
        birthday: new Date(+new Date() - Math.floor(Math.random() * 1000000000)),
        eyeColor: "black",
    },
    {
        firstName: "Ben",
        lastName: "Ten",
        birthday: new Date(+new Date() - Math.floor(Math.random() * 1000000000)),
        eyeColor: "black",
    },

]

export default people;