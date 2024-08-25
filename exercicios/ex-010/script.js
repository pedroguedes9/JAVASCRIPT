const defaultUser = {
    name: "",
    email: "",
    level: 1
}
const user1 = {
    ...defaultUser,
    name: "pedro",
    email: "skdkfjakj",
}

const adm1 = {
    ...defaultUser,
    name: "guedes",
    email: "adm",
    level: 2
}
console.log(user1, adm1)